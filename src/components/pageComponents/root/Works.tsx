import { photos } from "@/data/photos";
import styles from "@/styles/pageComponents/root/Works.module.scss";
import Container from "@/components/layout/Container";
import Image from "next/image";

export default function Works() {
  const ids = [
    "AAA112",
    "AAA114",
    "AAA611",
    "AAA113",
    "AAA118",
    "AAA119",
    "AAA121",
    "AAA131",
    "AAA141",
    "AAA161",
    "AAA171",
    "AAA181",
  ];

  return (
    <div className={styles.works} id="photos">
      <Container>
        <div className={styles.works_container}>
          <div className={styles.works_photos}>
            {photos
              .filter((photo) => ids.some((id) => id === photo.id))
              .map((work) => (
                <div className={styles.work} key={work.id}>
                  <figure className={styles.work_image}>
                    <Image
                      src={work.src}
                      alt={work.alt}
                      loading="lazy"
                      style={{ objectFit: "cover", width: "100%" }}
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
