"use client";

import styles from "@/styles/pages/blog/posts/id.module.scss";
import { PostType } from "@/_types/PostsType";
import { posts } from "@/data/posts";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import DynamicPost from "@/components/layout/blog/DynamicPost";
import Container from "@/components/layout/Container";
import SocialMedia from "@/components/links/SocialMedia";
import By from "@/components/layout/blog/post/By";
import Divider from "@/components/layout/blog/post/Divider";
import Loading from "@/components/utils/Loading";
import BlogCard from "@/components/layout/blog/BlogCard";
import Link from "next/link";

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState<PostType | null>(null);

  useEffect(() => {
    const foundPost = posts.find((post) => post.id === id);
    if (foundPost) setPost(foundPost);
  }, [id]);

  return (
    <div className={styles.post}>
      <Container>
        {post ? (
          <div className={styles.post_container}>
            <article className={styles.post_article}>
              <PostHeader post={post} /> {/* Inline */}
              <Divider />
              {post.content.map((cont) => (
                <DynamicPost content={cont} />
              ))}
              <Divider />
              <PostFooter post={post} /> {/* Inline */}
            </article>

            <div className={styles.post_newest}>
              <div className={styles.newest_title}>
                <h2>Newest posts</h2>
                <Link href='/blog/posts'>See more</Link>
              </div>
              <div className={styles.newest_posts}>
                {posts
                  .filter((post) => post.id !== id)
                  .slice(0, 2)
                  .map((post) => (
                    <BlogCard post={post} />
                  ))}
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.post_loading}>
            <div className={styles.loading_container}>
              <Loading />
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

function PostHeader({ post }: { post: PostType }) {
  return (
    <header className={styles.post_header}>
      <By author={post.author} createdAt={post.createdAt} />

      <div className={styles.header_time}>
        <p>{post?.readingTime}</p>
      </div>
    </header>
  );
}

function PostFooter({ post }: { post: PostType }) {
  return (
    <footer className={styles.post_footer}>
      <div className={styles.footer_media}>
        <SocialMedia />
      </div>

      <Divider />

      <div className={styles.footer_views}>
        <div className={styles.views_eye}>
          <p>{post?.vizualization}</p>
          <p>Visualization</p>
        </div>
        <div className={styles.views_message}>
          <p>{post?.vizualization}</p>
          <p>Comments</p>
        </div>
      </div>
    </footer>
  );
}
