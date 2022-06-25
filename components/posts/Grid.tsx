// Styles
import styles from '../../styles/components/posts/grid.module.scss';

// Components
import PostCard from './Post';

// Types
import PostType from '../../types/Post';

type GridType = {
  posts: PostType[];
};

const Grid = ({ posts }: GridType) => (
  <div
    className={styles.grid}
    data-testid="grid"
  >
    {posts.map((post, key) => (
      <PostCard
        key={key}
        title={post.title}
        cardBody={post.cardBody}
        date={post.date}
        previewImg={post.previewImg}
        previewImgAlt={post.previewImgAlt}
      />
    ))}
  </div>
);

export default Grid;
