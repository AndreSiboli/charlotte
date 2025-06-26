"use client";

import { useEffect, useRef } from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import styles from "@/styles/pageComponents/root/About.module.scss";
import Container from "@/components/layout/Container";
import Img from "@/components/utils/Img";
import LinkButton from "@/components/links/LinkButton";
import charlotteImage from "@/assets/photographer/pexels-vario-2149731000-30766044.jpg";
import charlotteImage2 from "@/assets/photographer/pexels-vario-2149731000-30766043.jpg";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function About() {
  const parentRef = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLDivElement>(null);
  const articleTitleRef = useRef<HTMLHeadingElement>(null);
  const articleImageRef = useRef<HTMLDivElement>(null);
  const articleParagraphRef = useRef<HTMLDivElement>(null);
  const articleButtonRef = useRef<HTMLDivElement>(null);

  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !parentRef.current ||
      !articleRef.current ||
      !imageRef.current ||
      !articleParagraphRef.current
    )
      return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: articleRef.current,
        start: "top bottom",
        end: "15% top",
        scrub: 0.5,
      },
    });

    const splitText = SplitText.create(articleParagraphRef.current, {
      type: "lines",
    });

    tl.fromTo(
      articleTitleRef.current,
      { y: 50, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.25 }
    )
      .fromTo(
        articleImageRef.current,
        {
          clipPath: "inset(15% 15% 15% 15%)",
          y: 50,
          autoAlpha: 0,
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .fromTo(
        splitText.lines,
        {
          y: 40,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          autoAlpha: 0,
        },
        {
          y: 0,
          "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          autoAlpha: 1,
          stagger: 0.05,
          ease: "power1.out",
          duration: 0.3,
        },
        "-=0.4"
      );

    gsap.from(articleButtonRef.current, {
      scrollTrigger: {
        trigger: articleRef.current,
        start: "70% bottom",
        end: "30% top",
        scrub: 0.5,
      },
      y: 40,
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.fromTo(
      imageRef.current,
      {
        clipPath: "inset(15% 15% 15% 15%)",
        y: 100,
      },
      {
        scrollTrigger: {
          trigger: parentRef.current,
          start: "10% bottom",
          end: "80% bottom",
          scrub: 0.5,
        },
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.15,
        ease: "expo",
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className={styles.about} id="about" ref={parentRef}>
      <Container>
        <div className={styles.about_container}>
          <article className={styles.about_info} ref={articleRef}>
            <header className={styles.info_title}>
              <h1 ref={articleTitleRef}>Charlotte</h1>
            </header>
            <figure className={styles.info_image} ref={articleImageRef}>
              <Img
                src={charlotteImage}
                alt="An image about charlotte, photographer."
              />
            </figure>
            <div className={styles.info_description}>
              <p ref={articleParagraphRef}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
                quidem laudantium voluptates quo. Sunt, maiores! Modi
                consequuntur ipsum aliquid totam!
              </p>
            </div>
            <nav className={styles.info_link} ref={articleButtonRef}>
              <LinkButton href="/about" text="More about" variant="v1" />
            </nav>
          </article>

          <div className={styles.about_image}>
            <figure className={styles.image_container} ref={imageRef}>
              <Img src={charlotteImage2} />
            </figure>
          </div>
        </div>
      </Container>
    </div>
  );
}
