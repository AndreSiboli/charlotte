"use client";

import styles from "@/styles/pages/blog/posts/id.module.scss";
import { PostType } from "@/_types/PostsType";
import { posts } from "@/data/posts";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import DynamicPost from "@/components/layout/blog/DynamicPost";
import Container from "@/components/layout/Container";
import SocialMedia from "@/components/links/SocialMedia";
import PostAuthor from "@/components/layout/blog/post/PostAuthor";
import Divider from "@/components/layout/blog/post/Divider";
import PostPreview from "@/components/layout/blog/PostPreview";
import Link from "next/link";
import SkeletonPost from "@/components/utils/SkeletonPost";

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState<PostType | null>(null);
  const newestPosts = useMemo(() => {
    return posts.filter((post) => post.id !== id).slice(0, 2);
  }, [id]);

  useEffect(() => {
    const foundPost = posts.find((post) => post.id === id);
    if (foundPost) setPost(foundPost);
  }, [id]);

  if (!id || !post) return <SkeletonPost />;

  return (
    <div className={styles.post}>
      <Container>
        <div className={styles.post_container}>
          <article className={styles.post_article}>
            <PostHeader post={post} /> {/* In file */}
            <Divider />
            {post.content.map((cont, i) => (
              <DynamicPost content={cont} key={cont.type + i} />
            ))}
            <Divider />
            <PostFooter post={post} /> {/* In file */}
          </article>

          <section className={styles.post_newest}>
            <header className={styles.newest_title}>
              <h2>Newest posts</h2>
              <Link href="/blog/posts">See more</Link>
            </header>
            <nav className={styles.newest_posts}>
              {newestPosts.map((post) => (
                <PostPreview post={post} key={post.id} />
              ))}
            </nav>
          </section>
        </div>
      </Container>
    </div>
  );
}

function PostHeader({ post }: { post: PostType }) {
  return (
    <header className={styles.post_header}>
      <PostAuthor author={post.author} createdAt={post.createdAt} />

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
          <p>{post.likes}</p>
          <p>Visualization</p>
        </div>
        <div className={styles.views_message}>
          <p>0</p>
          <p>Comments</p>
        </div>
      </div>
    </footer>
  );
}
