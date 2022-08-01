import PostType from './Post';
import ButtonType from './Button';

type HomeGrid = {
  title: string;
  cta: ButtonType;
  posts: PostType[];
};

export default HomeGrid;
