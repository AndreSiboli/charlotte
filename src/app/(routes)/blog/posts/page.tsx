import styles from "@/styles/pages/blog/posts/posts.module.scss";
import { posts } from "@/data/posts";
import Container from "@/components/layout/Container";
import BlogCard from "@/components/layout/blog/BlogCard";

export default function Posts() {
  return (
    <div className={styles.posts}>
      <Container>
        <div className={styles.posts_container}>
          <div className={styles.posts_title}>
            <h1>Blog</h1>
          </div>
          <div className={styles.posts_post}>
            {posts.map((post) => (
              <BlogCard post={post} key={post.id} column />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
