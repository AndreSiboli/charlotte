import { posts } from "@/data/posts";
import styles from "@/styles/pageComponents/root/Blog.module.scss";
import BlogCard from "@/components/layout/blog/BlogCard";
import Container from "@/components/layout/Container";
import LinkButton from "@/components/links/LinkButton";

export default function Blog() {
  const newestPosts = posts
    .sort((a, b) => {
      const aDate = new Date(b.createdAt).getTime();
      const bDate = new Date(a.createdAt).getTime();

      if (aDate > bDate) return 1;
      if (aDate < bDate) return -1;
      return 0;
    })
    .slice(0, 4);

  return (
    <div className={styles.blog} id="blog">
      <Container>
        <div className={styles.blog_container}>
          <div className={styles.blog_posts}>
            {newestPosts.map((post) => (
              <BlogCard post={post} key={post.id} />
            ))}
          </div>

          <div className={styles.blog_button}>
            <LinkButton href="/blog/posts" text="More posts" variant="v1" />
          </div>
        </div>
      </Container>
    </div>
  );
}
