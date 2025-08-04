"use client";

import { photos } from "@/data/photos";
import styles from "@/styles/pageComponents/root/Works.module.scss";
import Container from "@/components/layout/Container";
import Image from "next/image";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Button from "@/components/buttons/Button";

gsap.registerPlugin(ScrollTrigger);

export default function Works() {
  const [viewPost, setViewPosts] = useState(false);
  const filteredImages = useMemo(() => {
    const ids = [
      "AAA121",
      "AAA114",
      "AAA711",
      "AAA113",
      "AAA911",
      "AAA119",
      "AAA611",
      "AAA161",
      "AAA171",
      "AAQ111",
      "AAR111",
      "AAS111",
      "AAA131",
    ];
    return photos.filter((photo) => ids.some((id) => id === photo.id));
  }, []);
  const imagesRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!imagesRef.current) return;

      const children = Array.from(imagesRef.current.children);

      [...children].forEach((child) => {
        gsap.from(child, {
          scrollTrigger: {
            trigger: child,
            start: "-50px bottom",
            end: "50% bottom",
            scrub: 0.5,
          },
          duration: 0.25,
          scale: 0.9,
          y: 50,
          ease: "ease.inOut",
        });
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className={styles.works} id="photos">
      <Container>
        <section
          className={`${styles.works__section} ${
            viewPost ? styles["works__section--expanded"] : ""
          }`}
        >
          <div className={styles.works__gallery} ref={imagesRef}>
            {filteredImages.map((work) => (
              <div className={styles.works__item} key={work.id}>
                <figure className={styles.works__image}>
                  <Image
                    src={work.src}
                    alt={work.alt}
                    loading="lazy"
                    style={{ objectFit: "cover" }}
                  />
                </figure>
              </div>
            ))}
          </div>

          {!viewPost && (
            <footer className={styles.works__footer}>
              <div className={styles.works__action}>
                <Button
                  onClick={() => setViewPosts((prev) => !prev)}
                  style={{ fontSize: ".9em" }}
                  variant="v3"
                >
                  View All
                </Button>
              </div>
            </footer>
          )}
        </section>
      </Container>
    </div>
  );
}
