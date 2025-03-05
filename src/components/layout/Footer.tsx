import styles from "@/styles/layout/Footer.module.scss";
import Container from "./Container";
import Logo from "./Logo";
import SocialMedia from "@/components/links/SocialMedia";
import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    { text: "FAQ", href: "/faq" },
    { text: "License", href: "/license" },
    { text: "Contact", href: "/#projects" },
  ];

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_container}>
          <div className={styles.footer_logo}>
            <Logo />
          </div>
          <nav className={styles.footer_links}>
            {footerLinks.map((link) => (
              <Link href={link.href} key={link.href}>{link.text}</Link>
            ))}
          </nav>
          <nav className={styles.footer_media}>
            <SocialMedia />
          </nav>
          <div className={styles.footer_rights}>
            <p>Copyright &copy; Charlotte {new Date().getFullYear()}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
