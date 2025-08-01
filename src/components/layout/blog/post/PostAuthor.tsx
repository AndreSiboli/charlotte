import { PostType } from "@/_types/PostsType";
import styles from "@/styles/layout/blog/post/PostAuthor.module.scss";
import Img from "@/components/utils/Img";

interface PropsType {
  author: PostType["author"];
  createdAt: PostType["createdAt"];
}

export default function PostAuthor(props: PropsType) {
  const { author, createdAt } = props;

  return (
    <div className={styles.postAuthor}>
      <figure className={styles.postAuthor__thumbnail}>
        <Img src={author.src} />
      </figure>

      <div className={styles.postAuthor_info}>
        <p>{author.name}</p>
        <time>{createdAt}</time>
      </div>
    </div>
  );
}
