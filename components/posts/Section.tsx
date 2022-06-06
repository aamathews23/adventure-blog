import PostType from '../../types/Post';
import PostGrid from './Grid';
import styles from '../../styles/components/posts/section.module.scss';

type SectionType = {
  title: string;
  posts: PostType[];
};

const Section = ({ title, posts }: SectionType) => {
  const mainClass = 'section';
  return (
    <section className={styles[mainClass]}>
      <h2 className={styles[`${mainClass}__title`]}>{title}</h2>
      <PostGrid posts={posts} />
    </section>
  );
};

export default Section;
