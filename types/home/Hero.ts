import ButtonType from '../global/Button';
import ImageType from '../global/Image';

/**
 * The hero component type
 */
type Hero = {
  title: string;
  body: string;
  activities: string[];
  cta: ButtonType;
  image: ImageType;
};

export default Hero;
