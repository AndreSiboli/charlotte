import styles from "@/styles/layout/blog/BlogCard.module.scss";
import Img from "@/components/utils/Img";
import Image from "next/image";
import Link from "next/link";

import { PiEye } from "react-icons/pi";
import { FaRegMessage } from "react-icons/fa6";
import { PostType } from "@/_types/PostsType";
import By from "./post/By";

interface PropsType {
  post: PostType;
  column?: boolean;
}

export default function BlogCard(props: PropsType) {
  const { post, column = false } = props;

  return (
    <Link
      href={`/blog/posts/${post.id}`}
      className={`${styles.card} ${column && styles.column}`}
    >
      <figure className={styles.card_image}>
        {column ? (
          <Image src={post.thumbnail} alt="" sizes="100vw" />
        ) : (
          <Img src={post.thumbnail} alt="" />
        )}
      </figure>

      <div className={styles.card_info}>
        <div className={styles.info_views}>
          <div className={styles.views_eye}>
            <PiEye />
            <p>{post.visualization}</p>
          </div>
          <div className={styles.views_message}>
            <FaRegMessage />
            <p>{post.visualization - 54}</p>
          </div>
        </div>

        <div className={styles.info_middle}>
          <div className={styles.middle_title}>
            <h2>{post.title}</h2>
          </div>
          <div className={styles.middle_time}>
            <p>{post.readingTime}</p>
          </div>
        </div>

        <By author={post.author} createdAt={post.createdAt} />
      </div>
    </Link>
  );
}
