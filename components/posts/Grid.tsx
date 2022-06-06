import PostType from '../../types/Post';
import PostCard from './Post';
import styles from '../../styles/components/posts/grid.module.scss';

type GridType = {
  posts: PostType[];
};

const Grid = ({ posts }: GridType) => (
  <div className={styles.grid}>
    {posts.map((post, key) => (
      <PostCard
        key={key}
        title={post.title}
        body={post.body}
        date={post.date}
        previewImg={post.previewImg}
      />
    ))}
  </div>
);

export default Grid;
