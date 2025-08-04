import styles from "@/styles/links/SocialMedia.module.scss";
import Link from "next/link";
import { CSSProperties } from "react";
import {
  PiInstagramLogo,
  PiPinterestLogo,
  PiFacebookLogo,
} from "react-icons/pi";

interface PropsType {
  style?: CSSProperties;
}

export default function SocialMedia({ style }: PropsType) {
  const social = [
    {
      icon: <PiFacebookLogo />,
      to: "https://www.facebook.com",
      label: "Facebook",
    },
    {
      icon: <PiPinterestLogo />,
      to: "https://www.pinterest.com",
      label: "Pinterest",
    },
    {
      icon: <PiInstagramLogo />,
      to: "https://www.instagram.com",
      label: "Instagram",
    },
  ];

  return (
    <nav className={styles.media} style={style}>
      {social.map((s) => (
        <Link href={s.to} aria-label={s.label} target="_blank" key={s.to}>
          {s.icon}
        </Link>
      ))}
    </nav>
  );
}
