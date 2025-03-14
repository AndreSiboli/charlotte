"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "@/styles/navbar/Index.module.scss";

import Container from "@/components/layout/Container";
import Menu from "@/components/Navbar/Menu";
import Logo from "@/components/layout/Logo";
import Link from "next/link";

import { PiInstagramLogo } from "react-icons/pi";

export default function Navbar() {
  const pathname = usePathname();
  const [isOnTop, setIsOnTop] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const domains = [
    { to: "/#services", text: "Services" },
    { to: "/#blog", text: "Blog" },
    { to: "/#about", text: "About" },
    { to: "/#photos", text: "Photos" },
    { to: "/#contact", text: "Contact" },
  ];

  function scrolling() {
    const scroll = window.scrollY;
    if (!scroll) return setIsOnTop(true);
    setIsOnTop(false);
  }

  function isDomain() {
    const outDomains = ["/"];
    if (outDomains.includes(pathname)) return false;
    return true;
  }

  function closeMenu() {
    setIsOpened(false);
  }

  function windowWidth() {
    const width = window.innerWidth;

    if (width > 900) closeMenu();
  }

  useEffect(() => {
    scrolling();
    window.addEventListener("resize", windowWidth);

    return () => {
      window.removeEventListener("resize", windowWidth);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrolling);

    return () => {
      window.removeEventListener("scroll", scrolling);
    };
  }, [isOnTop]);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <header
      className={`${styles.header} ${isOnTop && styles.onTop} 
      ${isDomain() && styles.out_domain} ${isOpened && styles.opened}`}
    >
      <Container>
        <div className={styles.header_container}>
          <div className={styles.header_wrapper}>
            <div className={styles.header_logo}>
              <Logo />
            </div>
          </div>

          <nav className={styles.header_navigation}>
            <div className={styles.navigation_links}>
              {domains.map((domain) => (
                <Link href={domain.to} key={domain.to}>
                  {domain.text}
                </Link>
              ))}
            </div>
            <div className={styles.navigation_action}>
              <Link
                href="https://www.instagram/"
                target="_blank"
                aria-label="Instagram"
              >
                <PiInstagramLogo />
              </Link>
            </div>
          </nav>

          <div
            className={styles.header_menu}
            onClick={() => setIsOpened((prevState) => !prevState)}
          >
            <span className={styles.trace} />
            <span className={styles.trace} />
            <span className={styles.trace} />
          </div>
        </div>
      </Container>

      <Menu isOpened={isOpened} handleIsOpened={closeMenu} />
    </header>
  );
}
