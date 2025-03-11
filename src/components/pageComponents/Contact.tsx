import styles from "@/styles/pageComponents/root/Contact.module.scss";
import Container from "../layout/Container";
import FormContact from "../form/FormContact";

export default function Contact() {
  return (
    <div className={styles.contact} id="contact">
      <Container>
        <div className={styles.contact_container}>
          <FormContact />
        </div>
      </Container>
    </div>
  );
}
