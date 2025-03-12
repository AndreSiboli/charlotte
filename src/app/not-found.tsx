import styles from "@/styles/pages/not-found.module.scss";
import Container from "@/components/layout/Container";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={styles.error}>
      <Container>
        <div className={styles.error_container}>
          <div className={styles.error_text}>
            <p>Page Not Found.</p>
          </div>
          <div className={styles.error_joke}>
            <p>
              Why did the photograph get a 404 error?
              <br />
              Because it couldn’t focus on the right path!
            </p>
            <Link href='/'>Come back</Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
