"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import styles from "@/styles/navbar/Index.module.scss";

import Container from "@/components/layout/Container";
import Menu from "@/components/Navbar/Menu";
import Logo from "@/components/layout/Logo";
import Link from "next/link";

import { PiInstagramLogo } from "react-icons/pi";

export default function Navbar() {
  const pathname = usePathname();
  const [isOnTop, setIsOnTop] = useState(true);
  const [isOpened, setIsOpened] = useState(false);
  const domains = [
    { to: "/#services", text: "Services" },
    { to: "/#blog", text: "Blog" },
    { to: "/#about", text: "About" },
    { to: "/#photos", text: "Photos" },
    { to: "/#contact", text: "Contact" },
  ];

  function scrolling() {
    setIsOnTop(window.scrollY <= 50);
  }

  function isDomain() {
    const outDomains = ["/"];
    return !outDomains.includes(pathname);
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
    window.addEventListener("scroll", scrolling);

    return () => {
      window.removeEventListener("resize", windowWidth);
      window.removeEventListener("scroll", scrolling);
    };
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <header
      className={clsx(
        styles.header,
        isOnTop && styles["header--onTop"],
        isOpened && styles["header--expanded"],
        isDomain() && styles["header--outDomain"]
      )}
    >
      <Container>
        <div className={styles.header__container}>
          <div className={styles.header_logo}>
            <Logo />
          </div>

          <nav className={styles.header__nav}>
            <div className={styles.header__links}>
              {domains.map((domain) => (
                <Link href={domain.to} key={domain.to}>
                  {domain.text}
                </Link>
              ))}
            </div>
            <div className={styles.header__social}>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                aria-label="Instagram"
              >
                <PiInstagramLogo />
              </Link>
            </div>
          </nav>

          <button
            className={styles.header__menu}
            aria-label="Open menu"
            onClick={() => setIsOpened((prevState) => !prevState)}
          >
            <span className={styles.trace} />
            <span className={styles.trace} />
            <span className={styles.trace} />
          </button>
        </div>
      </Container>

      <Menu isOpened={isOpened} handleIsOpened={closeMenu} />
    </header>
  );
}
