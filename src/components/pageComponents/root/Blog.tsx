"use client";

import { posts } from "@/data/posts";
import { useEffect, useMemo, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import styles from "@/styles/pageComponents/root/Blog.module.scss";
import BlogCard from "@/components/layout/blog/BlogCard";
import Container from "@/components/layout/Container";
import LinkButton from "@/components/links/LinkButton";

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

  useEffect(() => {
    if (!containerRef.current) return;

    const children = containerRef.current.children;

    gsap.from(children, {
      scrollTrigger: {
        trigger: children,
        start: "top bottom",
      },
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 0.25,
    });
  }, []);

  return (
    <section className={styles.blog} id="blog">
      <Container>
        <div className={styles.blog_container}>
          <div className={styles.blog_posts} ref={containerRef}>
            {newestPosts.map((post) => (
              <BlogCard post={post} key={post.id} />
            ))}
          </div>

          <div className={styles.blog_button}>
            <LinkButton href="/blog/posts" text="More posts" variant="v1" />
          </div>
        </div>
      </Container>
    </section>
  );
}
