import { ComponentProps, ReactNode } from "react";
import styles from "@/styles/buttons/Button.module.scss";

interface PropsType extends ComponentProps<"button"> {
  children: ReactNode;
  variant?: "v1" | "v2" | 'v3';
}

export default function Button(props: PropsType) {
  const { children, variant = "v1", ...rest } = props;

  return (
    <button
      {...rest}
      className={`${styles.button} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}
