import styles from "@/styles/utils/SkeletonPost.module.scss";
import Container from "../layout/Container";
import Divider from "../layout/blog/post/Divider";

export default function SkeletonPost() {
  return (
    <div className={styles.skeleton}>
      <Container>
        <div className={styles.skeleton_article}>
          <SkeletonPostHeader />
          <Divider />
          <SkeletonPostArticle />
          <Divider />
          <SkeletonPostFooter />
        </div>
      </Container>
    </div>
  );
}

function SkeletonPostHeader() {
  return (
    <div className={styles.skeleton_header}>
      <div className={styles.header_by}>
        <div className={styles.by_image} />

        <div className={styles.by_info}>
          <div className={styles.info_name} />
          <div className={styles.info_time} />
        </div>
      </div>

      <div className={styles.header_time} />
    </div>
  );
}

function SkeletonPostFooter() {
  return (
    <div className={styles.skeleton_footer}>
      <div className={styles.footer_media}>
        {[0, 1, 2].map((n) => (
          <div className={styles.media} key={n} />
        ))}
      </div>

      <Divider />

      <div className={styles.footer_views}>
        <div className={styles.views_eye}>
          <div className={styles.text} />
        </div>
        <div className={styles.views_message}>
          <div className={styles.text} />
        </div>
      </div>
    </div>
  );
}

function SkeletonPostArticle() {
  return (
    <div className={styles.skeleton_post}>
      <div className={styles.post_title} />
      <div className={styles.post_image} />
      <div className={styles.post_text}>
        {Array.from({ length: 5 }, (_, i) => i).map((i) => (
          <div className={styles.line} key={i} />
        ))}
      </div>
    </div>
  );
}
