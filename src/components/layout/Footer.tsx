import styles from "@/styles/layout/Footer.module.scss";
import Container from "./Container";
import Logo from "./Logo";
import SocialMedia from "@/components/links/SocialMedia";
import Link from "next/link";
import Divider from "./blog/post/Divider";

export default function Footer() {
  const footerLinks = [
    { text: "FAQ", href: "/faq" },
    { text: "Mentions", href: "/mentions" },
    { text: "License", href: "/license" },
    { text: "Contact", href: "/#contact" },
  ];

  return (
    <footer className={styles.footer}>
      <Container>
        <section className={styles.footer__container}>
          <div className={styles.footer__brand}>
            <Logo />
          </div>

          <nav className={styles.footer__nav}>
            {footerLinks.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className={styles.footer__link}
              >
                {link.text}
              </Link>
            ))}
          </nav>

          <div className={styles.footer__social}>
            <SocialMedia style={{ fontSize: ".85em" }} />
          </div>

          <Divider style={{ width: 225 }} />

          <div className={styles.footer__rights}>
            <p>
              All rights reserved &copy; Charlotte {new Date().getFullYear()}
            </p>
          </div>
        </section>
      </Container>
    </footer>
  );
}
