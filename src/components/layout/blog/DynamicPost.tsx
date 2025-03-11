import { PostType } from "@/_types/PostsType";
import styles from "@/styles/layout/blog/DynamicPost.module.scss";
import Image from "next/image";

interface PropsType {
  content: PostType["content"][number];
}

export default function DynamicPost(props: PropsType) {
  const { content } = props;

  if (content.type === "img") {
    return (
      <figure className={styles.post_image}>
        <Image src={content.property.src} alt={content.property.alt} />
      </figure>
    );
  }
  if (content.type === "title") {
    return (
      <div className={styles.post_title}>
        <h1>{content.property.title}</h1>
      </div>
    );
  }
  if (content.type === "sub-title") {
    return (
      <div className={styles.post_title}>
        <h2>{content.property.title}</h2>
      </div>
    );
  }
  if (content.type === "quote") {
    return (
      <div className={styles.post_quote}>
        <q>{content.property.text}</q>
      </div>
    );
  }
  if (content.type === "text") {
    return (
      <div className={styles.post_text}>
        <p>{content.property.text}</p>
      </div>
    );
  }
}
