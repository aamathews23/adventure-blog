import CardType from './Card';

interface Post extends CardType {
  location?: string;
  locationUrl?: string;
  distance?: string;
  duration?: string;
  intensity?: string;
}

export default Post;
