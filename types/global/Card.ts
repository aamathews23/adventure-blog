import ImageType from './Image';

type Card = {
  title: string;
  description: string;
  image: ImageType;
  collection: string[];
  type?: string;
  date?: string;
};

export default Card;
