"use client";

import { photos } from "@/data/photos";
import styles from "@/styles/pageComponents/root/Works.module.scss";
import Container from "@/components/layout/Container";
import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Works() {
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

  useEffect(() => {
    if (!imagesRef.current) return;

    const children = imagesRef.current.children;

    [...children].forEach((child) => {
      gsap.from(child, {
        scrollTrigger: {
          trigger: child,
          start: "-50px bottom",
          end: "50% bottom",
          scrub: 0.5,
        },
        duration: 0.25,
        y: 50,
        ease: "ease.inOut",
      });
    });
  }, []);

  return (
    <div className={styles.works} id="photos">
      <Container>
        <div className={styles.works_container}>
          <div className={styles.works_photos} ref={imagesRef}>
            {filteredImages.map((work) => (
              <div className={styles.work} key={work.id}>
                <figure className={styles.work_image}>
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
        </div>
      </Container>
    </div>
  );
}
