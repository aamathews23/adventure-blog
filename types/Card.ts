import ImageType from './Image';

type Card = {
  title: string;
  body: string;
  image: ImageType;
  type?: string;
  date?: string;
};

export default Card;
