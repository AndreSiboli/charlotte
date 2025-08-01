"use client";

import { PhotosType } from "@/_types/PhotosType";
import { photos } from "@/data/photos";
import { MouseEvent, useMemo } from "react";
import styles from "@/styles/pageComponents/root/Services.module.scss";
import Img from "@/components/utils/Img";

interface MergedTypes extends PhotosType {
  name: string;
  position: string;
}

const idMatch = [
  {
    id: "AAU111",
    name: "Pets",
    position: "50% 45%",
  },
  {
    id: "AAV111",
    name: "Wedding",
    position: "50% 50%",
  },
  {
    id: "AAY111",
    position: "50% 50%",
    name: "Travel",
  },
  {
    id: "AAZ111",
    position: "50% 20%",
    name: "Events",
  },
  {
    id: "AAX111",
    position: "50% 15%",
    name: "Model",
  },
  {
    id: "AAW111",
    position: "50% 20%",
    name: "Portrait",
  },
];

export default function Services() {
  const services: MergedTypes[] = useMemo(() => {
    return photos
      .filter((photo) => idMatch.some((srvc) => srvc.id === photo.id))
      .map((photo) => {
        const match = idMatch.find((srvc) => srvc.id === photo.id);
        return { ...photo, ...match } as MergedTypes;
      });
  }, []);

  function mouseOver(e: MouseEvent<HTMLDivElement>) {
    e.currentTarget.classList.add(styles.active);
  }

  function mouseLeave(e: MouseEvent<HTMLDivElement>) {
    e.currentTarget.classList.remove(styles.active);
  }

  function mouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const xScreen = window.innerWidth;
    const yScreen = window.innerHeight;

    const child = e.currentTarget.children[1] as HTMLDivElement;

    const modalWidth = child.offsetWidth;
    const modalHeight = child.offsetHeight;

    const xElement = e.clientX - rect.left + 20;
    const yElement = e.clientY - rect.top + 20;
    let translateX = 0;
    let translateY = 0;

    if (e.clientX >= xScreen / 1.5) {
      translateX = -modalWidth - 20;
    }
    if (e.clientY >= yScreen / 2.5) {
      translateY = -modalHeight - 20;
    }

    child.style.left = `${xElement}px`;
    child.style.top = `${yElement}px`;
    child.style.transform = `translate(${translateX}px, ${translateY}px)`;
  }

  return (
    <div className={styles.services} id="services">
      <div className={styles.services_container}>
        {[0, 1, 2].map((num) => (
          <div className={styles.services_slider} aria-hidden={!!num} key={num}>
            {services.map((service) => (
              <div className={styles.service} key={service.name + num}>
                <div
                  className={styles.service_wrapper}
                  onMouseOver={mouseOver}
                  onMouseLeave={mouseLeave}
                  onMouseMove={mouseMove}
                >
                  <p>{service.name}</p>

                  <figure className={styles.service_image}>
                    <Img
                      src={service.src}
                      alt={service.alt}
                      style={{ objectPosition: service.position }}
                    />
                  </figure>
                </div>
                <span className={styles.service_break}>•</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
