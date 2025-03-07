import styles from "@/styles/pageComponents/root/Contact.module.scss";
import { photos } from "@/data/photos";
import Container from "../layout/Container";
import FormContact from "../form/FormContact";
import Img from "../utils/Img";

export default function Contact() {
  const idImages = ["AAA911", "AAA116", "AAA811"];

  return (
    <div className={styles.contact} id="contact">
      <Container>
        <div className={styles.contact_container}>
          <FormContact />
          <div className={styles.contact_image}>
            <figure className={styles.image_container}>
              {photos
                .filter((photo) => idImages.some((id) => photo.id === id))
                .map((photo) => (
                  <Img src={photo.src} alt={photo.alt} key={photo.id}/>
                ))}
            </figure>
          </div>
        </div>
      </Container>
    </div>
  );
}
