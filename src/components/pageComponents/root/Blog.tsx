"use client";

import { posts } from "@/data/posts";
import { useLayoutEffect, useMemo, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import styles from "@/styles/pageComponents/root/Blog.module.scss";
import PostPreview from "@/components/layout/blog/PostPreview";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { LuMoveRight } from "react-icons/lu";

gsap.registerPlugin(ScrollTrigger);

export default function Blog() {
  const newestPosts = useMemo(() => {
    return [...posts]
      .sort((a, b) => {
        const aDate = new Date(a.createdAt).getTime();
        const bDate = new Date(b.createdAt).getTime();

        return bDate - aDate;
      })
      .slice(0, 4);
  }, []);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !buttonRef.current) return;

      const children = Array.from(containerRef.current.children);

      gsap.from(buttonRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
        },
        y: 50,
        opacity: 0,
        duration: 0.25,
      });

      gsap.from(children, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
        },
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.25,
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className={styles.blog} id="blog">
      <Container>
        <div className={styles.blog__container}>
          <div className={styles.blog__button} ref={buttonRef}>
            <Link href="/blog/posts">
              More post <LuMoveRight />
            </Link>
          </div>
          <div className={styles.blog__posts} ref={containerRef}>
            {newestPosts.map((post) => (
              <PostPreview post={post} key={post.id} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
