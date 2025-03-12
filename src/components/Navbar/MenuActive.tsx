"use client";

import styles from "@/styles/navbar/MenuActive.module.scss";
import Container from "@/components/layout/Container";
import Link from "next/link";
import SocialMedia from "@/components/links/SocialMedia";

import {
  PiX,
  PiHouseLine,
  PiUser,
  PiPaperclip,
  PiNotebook,
} from "react-icons/pi";
import { VscSend } from "react-icons/vsc";
import { TbPhoto } from "react-icons/tb";

interface PropsType {
  handleMenu: VoidFunction;
}

export default function MenuActive(props: PropsType) {
  const { handleMenu } = props;
  const domains = [
    { to: "/#home", text: "Home", icon: <PiHouseLine /> },
    { to: "/#services", text: "Services", icon: <PiPaperclip /> },
    { to: "/#blog", text: "Blog", icon: <PiNotebook /> },
    { to: "/#about", text: "About", icon: <PiUser /> },
    { to: "/#photos", text: "Photos", icon: <TbPhoto /> },
    { to: "/#contact", text: "Contact", icon: <VscSend /> },
  ];

  return (
    <div className={`${styles.menu_wrapper}`}>
      <header className={styles.menu_header}>
        <button aria-label="close menu" onClick={handleMenu}>
          <PiX />
        </button>
      </header>

      <div className={`${styles.menu} `}>
        <Container>
          <div className={styles.menu_container}>
            <nav className={styles.menu_navigation}>
              {domains.map((domain) => (
                <div className={styles.navigation_link} key={domain.to}>
                  <Link href={domain.to} key={domain.to}>
                    {domain.icon}
                    {domain.text}
                  </Link>
                </div>
              ))}
            </nav>

            <footer className={styles.menu_footer}>
              <div className={styles.footer_media}>
                <SocialMedia />
              </div>
              <div className={styles.footer_rights}>
                <p>Charlotte &copy; All rights reserved.</p>
              </div>
            </footer>
          </div>
        </Container>
      </div>
    </div>
  );
}
