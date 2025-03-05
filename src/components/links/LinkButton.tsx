import styles from "@/styles/links/LinkButton.module.scss";

import Link from "next/link";
import { ComponentProps, CSSProperties, ReactNode } from "react";

interface PropsType extends ComponentProps<"a"> {
  text: string | ReactNode;
  href: string;
  style?: CSSProperties;
  variant: "v1" | "v2";
}

export default function LinkButton(props: PropsType) {
  const { text, href, variant, style } = props;

  return (
    <Link
      {...props}
      href={href}
      className={`${styles.link} ${styles[variant]}`}
      style={style}
    >
      {text}
    </Link>
  );
}
