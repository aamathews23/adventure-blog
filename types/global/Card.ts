import ImageType from './Image';

type Card = {
  title: string;
  cardBody: string;
  image: ImageType;
  type?: string;
  date?: string;
};

export default Card;
