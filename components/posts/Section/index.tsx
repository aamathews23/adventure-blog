import PostGrid from '../Grid';
import Text from '../../global/Text';
import SectionType from '../../../types/posts/Section';
import style from './style';

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
