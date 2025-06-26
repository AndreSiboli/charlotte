import styles from "@/styles/pageComponents/root/Contact.module.scss";
import FormContact from "../form/FormContact";
import Img from "../utils/Img";

import wallpaper from "@/assets/photos/nick-pliahas-pcMboyJs0Xo-unsplash.jpg";

export default function Contact() {
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.contact_container}>
        <figure className={styles.contact_wallpaper}>
          <Img src={wallpaper}  style={{objectPosition: 'center 35%'}}/>
        </figure>
        <div className={styles.contact_form}>
          <FormContact />
        </div>
      </div>
    </div>
  );
}
