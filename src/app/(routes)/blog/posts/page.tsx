import styles from "@/styles/pages/blog/posts/posts.module.scss";
import { posts } from "@/data/posts";
import Container from "@/components/layout/Container";
import PostPreview from "@/components/layout/blog/PostPreview";

export default function Posts() {
  const newestPosts = posts.sort((a, b) => {
    const aDate = new Date(b.createdAt).getTime();
    const bDate = new Date(a.createdAt).getTime();

    if (aDate > bDate) return 1;
    if (aDate < bDate) return -1;
    return 0;
  });

  return (
    <div className={styles.posts}>
      <Container>
        <div className={styles.posts_container}>
          <div className={styles.posts_title}>
            <h1>Blog</h1>
          </div>
          <div className={styles.posts_post}>
            {newestPosts.map((post) => (
              <PostPreview post={post} key={post.id} column />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
