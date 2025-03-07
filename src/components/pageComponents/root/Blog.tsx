import BlogCard from "@/components/layout/blog/BlogCard";
import Container from "@/components/layout/Container";
import LinkButton from "@/components/links/LinkButton";
import { posts } from "@/data/posts";
import styles from "@/styles/pageComponents/root/Blog.module.scss";

export default function Blog() {
  return (
    <div className={styles.blog} id="blog">
      <Container>
        <div className={styles.blog_container}>
          <div className={styles.blog_posts}>
            {posts.slice(0, 4).map((post) => (
              <BlogCard post={post} key={post.id} />
            ))}
          </div>

          <div className={styles.blog_button}>
            <LinkButton href="/blog/posts" text='More posts' variant="v1"/>
          </div>
        </div>
      </Container>
    </div>
  );
}
