import Card from '../../global/Card';
import GridType from '../../../types/posts/Grid';
import style from './style';

/**
 * Creates a grid component to be used on the blog page
 *
 * @param {Array<Card>} posts
 * @returns a grid component
 */
const Grid = ({ posts }: GridType) => (
  <div
    css={style}
    data-testid="grid"
  >
    {posts.map((post, key) => (
      <Card
        key={key}
        title={post.title}
        description={post.description}
        date={post.date}
        type={post.type}
        image={post.image}
        collection={post.collection}
      />
    ))}
  </div>
);

export default Grid;
