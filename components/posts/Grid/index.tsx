import Card from '../../global/Card';
import GridType from '../../../types/posts/Grid';
import style from './style';

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
