import PostAuthor from "./post/PostAuthor";
import { PostType } from "@/_types/PostsType";
import { dateInFull } from "@/utils/formatDate";
import styles from "@/styles/layout/blog/PostPreview.module.scss";
import Img from "@/components/utils/Img";
import Image from "next/image";
import Link from "next/link";

import { LuHeart, LuMessageCircle } from "react-icons/lu";

interface PropsType {
  post: PostType;
  column?: boolean;
}

export default function PostPreview(props: PropsType) {
  const { post, column = false } = props;

  return (
    <Link
      href={`/blog/posts/${post.id}`}
      className={`${styles.postPreviewLink} ${
        column ? styles.postPreviewColumn : ""
      }`}
    >
      <article className={styles.postPreview}>
        <figure className={styles.postPreview__thumbnail}>
          {column ? (
            <Image
              src={post.thumbnail}
              alt={`Thumbnail for ${post.author.name}`}
              sizes="100vw"
            />
          ) : (
            <Img
              src={post.thumbnail}
              alt={`Thumbnail for ${post.author.name}`}
            />
          )}
        </figure>

        <div className={styles.postPreview__content}>
          <header className={styles.postPreview__header}>
            <div className={styles.postPreview__meta}>
              <div className={styles.postPreview__stats}>
                <div className={styles.postPreview__stat}>
                  <LuHeart />
                  <p>{post.likes}</p>
                </div>
                <div className={styles.postPreview__stat}>
                  <LuMessageCircle />
                  <p>0</p>
                </div>
              </div>
              <time className={styles.postPreview__readingTime}>
                {post.readingTime}
              </time>
            </div>
            <h2 className={styles.postPreview__title}>{post.title}</h2>
          </header>

          <p className={styles.postPreview__description}>{post.description}</p>

          <footer className={styles.postPreview__footer}>
            <PostAuthor
              author={post.author}
              createdAt={dateInFull(new Date(post.createdAt), false)}
            />
          </footer>
        </div>
      </article>
    </Link>
  );
}
