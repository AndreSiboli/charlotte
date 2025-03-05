import styles from "@/styles/pageComponents/root/Hero.module.scss";
import Img from "@/components/utils/Img";
import Container from "@/components/layout/Container";

import heroImage from "@/assets/camila-cordeiro-PTLZBm56obg-unsplash.jpg";

export default function Hero() {
  return (
    <main className={styles.hero}>
      <figure className={styles.hero_wallpaper}>
        <Img src={heroImage} />
      </figure>

      <Container>
        <div className={styles.hero_title}>
          <h1>
            <span>C</span>
            <span>h</span>
            <span>a</span>
            <span>r</span>
            <span>l</span>
            <span>o</span>
            <span>t</span>
            <span>t</span>
            <span>e</span>
          </h1>
          <p>Capturing Moments, Framing Memories.</p>
        </div>
      </Container>
    </main>
  );
}
