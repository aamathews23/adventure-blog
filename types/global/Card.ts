import ImageType from './Image';

/**
 * The card type
 */
type Card = {
  title: string;
  description: string;
  image: ImageType;
  type?: string;
};

export default Card;
