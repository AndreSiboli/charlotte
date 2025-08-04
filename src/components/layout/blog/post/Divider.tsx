import styles from "@/styles/layout/blog/post/Divider.module.scss";
import { CSSProperties } from "react";

interface PropsType {
  style?: CSSProperties;
}

export default function Divider({ style }: PropsType) {
  return <div className={styles.divider} style={style} />;
}
