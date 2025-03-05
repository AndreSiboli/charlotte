import styles from "@/styles/pageComponents/root/About.module.scss";

import Container from "@/components/layout/Container";
import Img from "@/components/utils/Img";
import LinkButton from "@/components/links/LinkButton";

import charlotte from "@/assets/photographer/pexels-vario-2149731000-30766044.jpg";
import charlotte2 from "@/assets/photographer/pexels-vario-2149731000-30766043.jpg";

export default function About() {
  return (
    <div className={styles.about} id="about">
      <Container>
        <div className={styles.about_container}>
          <article className={styles.about_info}>
            <div className={styles.info_title}>
              <h1>Charlotte</h1>
            </div>
            <figure className={styles.info_image}>
              <Img src={charlotte} />
            </figure>
            <div className={styles.info_description}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
                quidem laudantium voluptates quo. Sunt, maiores! Modi
                consequuntur ipsum aliquid totam!
              </p>
            </div>
            <nav className={styles.info_link}>
              <LinkButton href="/about" text="More about" variant="v1" />
            </nav>
          </article>

          <div className={styles.about_image}>
            <figure className={styles.image_container}>
              <Img src={charlotte2} />
            </figure>
          </div>
        </div>
      </Container>
    </div>
  );
}
