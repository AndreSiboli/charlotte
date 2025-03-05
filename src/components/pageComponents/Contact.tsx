import styles from "@/styles/pageComponents/root/Contact.module.scss";
import Container from "../layout/Container";
import FormContact from "../form/FormContact";
import Img from "../utils/Img";

import image from '@/assets/camila-cordeiro-PTLZBm56obg-unsplash.jpg'
import image2 from '@/assets/photos/pexels-beccacorreiaph-20401301.jpg'
import image3 from '@/assets/photographer/pexels-vario-2149731000-30766043.jpg'

export default function Contact() {
  return (
    <div className={styles.contact} id="contact">
      <Container>
        <div className={styles.contact_container}>
          <FormContact />
          <div className={styles.contact_image}>
            <figure className={styles.image_container}>
                <Img src={image}/>
                <Img src={image2}/>
                <Img src={image3}/>
            </figure>
          </div>
        </div>
      </Container>
    </div>
  );
}
