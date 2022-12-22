import PostType from './Post';

/**
 * The collection type
 */
type Collection = {
  title: string;
  posts: PostType[];
};

export default Collection;
