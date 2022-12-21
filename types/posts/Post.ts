import ImageType from '../global/Image';

/**
 * The post type
 */
type Post = {
  title: string;
  description: string;
  image: ImageType;
  collection: string[];
  date?: string;
  type?: string;
};

export default Post;
