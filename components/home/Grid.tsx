import styles from '../../styles/components/home/grid.module.scss';
import Text from '../global/Text';
import Post from '../posts/Post';
import HomeGridType from '../../types/HomeGrid';

const Grid = ({ title, posts }: HomeGridType) => {
  const mainClass = 'grid';
  return (
    <section
      className={styles[mainClass]}
      data-testid={mainClass}
    >
      <Text
        tag="h2"
        className={styles[`${mainClass}__title`]}
        data-testid={`${mainClass}-title`}
      >
        {title}
      </Text>
      <div
        className={styles[`${mainClass}__grid`]}
        data-testid={`${mainClass}-grid`}
      >
        {posts &&
          posts.length > 0 &&
          posts.map((post, index) => (
            <Post
              key={index}
              title={post.title}
              cardBody={post.cardBody}
              date={post.date}
              previewImg={post.previewImg}
              previewImgAlt={post.previewImgAlt}
            />
          ))}
      </div>
    </section>
  );
};

export default Grid;
