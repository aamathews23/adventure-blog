import ButtonType from '../global/Button';
import ImageType from '../global/Image';

/**
 * The intro component type
 */
type Intro = {
  title: string;
  main: string;
  cta: ButtonType;
  image: ImageType;
};

export default Intro;
