"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/navbar/Index.module.scss";

import Container from "@/components/layout/Container";
import Menu from "@/components/Navbar/Menu";
import Logo from "@/components/layout/Logo";
import Link from "next/link";

import { PiInstagramLogo } from "react-icons/pi";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const PathName = usePathname();
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
    if (outDomains.includes(PathName)) return false;
    return true;
  }

  function closeIsOpened() {
    setIsOpened(false);
  }

  function windowWidth() {
    const width = window.innerWidth;

    if (width > 900) closeIsOpened();
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

      <Menu isOpened={isOpened} handleIsOpened={closeIsOpened} />
    </header>
  );
}
