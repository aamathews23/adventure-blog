// Styles
import styles from '../../styles/components/posts/section.module.scss';

// Components
import PostGrid from './Grid';
import Text from '../global/Text';
// Types
import PostType from '../../types/Post';

type SectionType = {
  title: string;
  posts: PostType[];
};

const Section = ({ title, posts }: SectionType) => {
  const mainClass = 'section';
  return (
    <section
      className={styles[mainClass]}
      data-testid="section"
    >
      <Text
        tag={'h2'}
        className={styles[`${mainClass}__title`]}
      >
        {title}
      </Text>
      {posts && posts.length > 0 && <PostGrid posts={posts} />}
    </section>
  );
};

export default Section;
