import { photos } from "@/data/photos";
import styles from "@/styles/pages/mentions.module.scss";
import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";

import AAA111 from "@/assets/photographer/pexels-vario-2149731000-30766043.jpg";
import AAA112 from "@/assets/photographer/pexels-vario-2149731000-30766044.jpg";

export default function Mention() {
  const photographies = [
    {
      id: "AAA111",
      author: {
        name: "VARIO",
        href: "https://www.pexels.com/pt-br/@vario-2149731000/",
      },
      src: AAA111,
      alt: "Beautiful woman posing on snow",
      tags: ["human", "female", "woman", "snow", "cold", "sweater"],
    },
    {
      id: "AAA112",
      author: {
        name: "VARIO",
        href: "https://www.pexels.com/pt-br/@vario-2149731000/",
      },
      src: AAA112,
      alt: "Beautiful woman standing on snow",
      tags: ["human", "female", "woman", "snow", "cold", "sweater"],
    },
  ].concat(photos);

  return (
    <div className={styles.mentions}>
      <Container>
        <div className={styles.mentions_container}>
          <div className={styles.mentions_title}>
            <h1>Mentions</h1>
          </div>
          <div className={styles.mentions_authors}>
            {photographies.map((photo) => (
              <Link
                href={photo.author.href}
                target="_blank"
                className={styles.author}
                key={photo.id}
              >
                <figure className={styles.author_image}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    sizes="100vw"
                    loading="lazy"
                  />
                </figure>
                <div>
                  <h2>{photo.author.name}</h2>
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.mention_thank}>
            <p>Thanks for all creators ❤️</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
