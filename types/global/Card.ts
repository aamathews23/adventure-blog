import ImageType from './Image';

/**
 * The card type
 */
type Card = {
  title: string;
  description: string;
  image: ImageType;
  collection: string[];
  type?: string;
};

export default Card;
