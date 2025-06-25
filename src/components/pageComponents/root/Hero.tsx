"use client";

import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import styles from "@/styles/pageComponents/root/Hero.module.scss";
import Img from "@/components/utils/Img";
import Container from "@/components/layout/Container";
import heroImage from "@/assets/pexels-vlada-karpovich-4817130.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const parentRef = useRef<HTMLDivElement>(null);
  const wallpaperRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (
      !titleRef.current ||
      !paragraphRef.current ||
      !wallpaperRef.current ||
      !parentRef.current
    )
      return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parentRef.current,
        start: "10% top",
        end: "50% top",
        scrub: 0.5,
      },
    });

    gsap.to([titleRef.current, paragraphRef.current], {
      y: 0,
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      duration: 0.25,
      ease: "power1",
      onComplete: () => {
        scrollAnimation(tl);
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  function scrollAnimation(tl: gsap.core.Timeline) {
    tl.to(titleRef.current, {
      y: -300,
      duration: 0.15,
      opacity: 0,
      ease: "power1.inOut",
    })
      .to(
        paragraphRef.current,
        {
          y: -300,
          duration: 0.15,
          opacity: 0,
          ease: "power1.inOut",
        },
        "-=.15"
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
          objectPosition: "center 100%",
          duration: 0.25,
          ease: "power1",
        },
        "-=.15"
      );
  }

  return (
    <main className={styles.hero} ref={parentRef}>
      <figure className={styles.hero_wallpaper} ref={wallpaperRef}>
        <Img src={heroImage} style={{ objectPosition: "center 70%" }} />
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
