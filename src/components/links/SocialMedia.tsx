import styles from "@/styles/links/SocialMedia.module.scss";
import Link from "next/link";
import {
  PiInstagramLogo,
  PiPinterestLogo,
  PiFacebookLogo,
} from "react-icons/pi";

export default function SocialMedia() {
  const social = [
    {
      icon: <PiFacebookLogo />,
      to: "https://www.pexels.com",
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
    <div className={styles.media}>
      {social.map((s) => (
        <Link href={s.to} aria-label={s.label} target="_blank" key={s.to}>
          {s.icon}
        </Link>
      ))}
    </div>
  );
}
