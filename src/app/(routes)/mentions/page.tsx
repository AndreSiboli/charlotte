import { photos } from "@/data/photos";
import styles from "@/styles/pages/mentions.module.scss";
import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";

export default function Mention() {
  return (
    <div className={styles.mentions}>
      <Container>
        <div className={styles.mentions_container}>
          <div className={styles.mentions_title}>
            <h1>Mentions</h1>
          </div>
          <div className={styles.mentions_authors}>
            {photos.map((photo) => (
              <Link
                href={photo.author.href}
                target="_blank"
                className={styles.author}
                key={photo.id}
              >
                <figure className={styles.author_image}>
                  <Image src={photo.src} alt={photo.alt} sizes="100vw" loading="lazy"/>
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
