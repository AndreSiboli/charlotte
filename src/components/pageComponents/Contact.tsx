"use client";

import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import styles from "@/styles/pageComponents/root/Contact.module.scss";
import FormContact from "../form/FormContact";
import Img from "../utils/Img";

import wallpaper from "@/assets/photos/nick-pliahas-pcMboyJs0Xo-unsplash.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const parentRef = useRef<HTMLDivElement>(null);
  const wallpaperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!parentRef.current || !wallpaperRef.current) return;

      gsap.from(wallpaperRef.current, {
        scrollTrigger: {
          trigger: parentRef.current,
          start: "top bottom",
          end: '50% bottom',
          scrub: 0.5,
        },
        scale: 0.8,
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className={styles.contact} id="contact" ref={parentRef}>
      <div className={styles.contact_container}>
        <figure className={styles.contact_wallpaper} ref={wallpaperRef}>
          <Img src={wallpaper} style={{ objectPosition: "center 35%" }} />
        </figure>
        <div className={styles.contact_form}>
          <FormContact />
        </div>
      </div>
    </div>
  );
}
