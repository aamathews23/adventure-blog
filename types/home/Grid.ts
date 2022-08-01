import PostType from '../posts/Post';
import ButtonType from '../global/Button';

type HomeGrid = {
  title: string;
  cta: ButtonType;
  posts: PostType[];
};

export default HomeGrid;
