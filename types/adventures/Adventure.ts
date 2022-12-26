import ImageType from '../global/Image';

/**
 * The adventure type
 */
type Adventure = {
  title: string;
  description: string;
  trail: string;
  link: string;
  rating: number;
  date: string;
  image: ImageType;
  year: string;
};

export default Adventure;
