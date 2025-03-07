import { PostType } from "@/_types/PostsType";
import Img from "@/components/utils/Img";
import styles from "@/styles/layout/blog/post/By.module.scss";

interface PropsType {
  author: PostType["author"];
  createdAt: PostType["createdAt"];
}

export default function By(props: PropsType) {
  const { author, createdAt } = props;

  return (
    <div className={styles.by}>
      <figure className={styles.by_image}>
        <Img src={author.src} />
      </figure>

      <div className={styles.by_info}>
        <p>{author.name}</p>
        <time>{createdAt}</time>
      </div>
    </div>
  );
}
