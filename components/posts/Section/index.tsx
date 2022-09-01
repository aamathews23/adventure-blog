import PostGrid from '../Grid';
import Text from '../../global/Text';
import SectionType from '../../../types/posts/Section';
import style from './style';

/**
 * Creates a section component to be used on the blog page
 *
 * @param {String} title
 * @param {Array<Card>} posts
 * @returns a section component
 */
const Section = ({ title, posts }: SectionType) => {
  return (
    <section
      css={style.section}
      data-testid="section"
    >
      <Text
        tag="h2"
        style={style.title}
      >
        {title}
      </Text>
      {posts && posts.length > 0 && <PostGrid posts={posts} />}
    </section>
  );
};

export default Section;
