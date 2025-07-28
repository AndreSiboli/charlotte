"use client";

import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import styles from "@/styles/pageComponents/root/Hero.module.scss";
import Img from "@/components/utils/Img";
import Container from "@/components/layout/Container";
import heroImage from "@/assets/volodymyr-lymariev-ugqI4poLV-g-unsplash.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const parentRef = useRef<HTMLDivElement>(null);
  const wallpaperRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ease = "cubic-bezier(0.215, 0.60, 0.355, 1)";

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (
        !titleRef.current ||
        !paragraphRef.current ||
        !wallpaperRef.current ||
        !parentRef.current
      )
        return;

      const tl = gsap.timeline();

      tl.to(wallpaperRef.current, {
        "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        scale: 1,
        duration: 0.6,
        delay: 0.25,
        ease,
      }).to(
        [titleRef.current, paragraphRef.current],
        {
          y: 0,
          "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          duration: 0.25,
          ease,
          onComplete: () => {
            scrollAnimation();
          },
        },
        "-=.3"
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  function scrollAnimation() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parentRef.current,
        start: "10% top",
        end: "50% top",
        scrub: 0.5,
      },
    });

    tl.to(titleRef.current, {
      y: -250,
      duration: 0.25,
      opacity: 0,
      ease,
    })
      .to(
        paragraphRef.current,
        {
          y: -250,
          duration: 0.25,
          opacity: 0,
          ease,
        },
        "-=.25"
      )
      .to(
        wallpaperRef.current!.children,
        {
          scrollTrigger: {
            trigger: parentRef.current,
            start: "10% top",
            end: "40% top",
            scrub: 0.5,
          },
          scale: 1.05,
          duration: 0.6,
          ease,
        },
        "-=.15"
      );
  }

  return (
    <main className={styles.hero} ref={parentRef}>
      <figure className={styles.hero_wallpaper} ref={wallpaperRef}>
        <Img src={heroImage} style={{ objectPosition: "58% center" }} />
      </figure>

      <Container>
        <section className={styles.hero_title}>
          <h1 ref={titleRef}>Charlotte</h1>
          <p ref={paragraphRef}>Capturing Moments, Framing Memories.</p>
        </section>
      </Container>
    </main>
  );
}
