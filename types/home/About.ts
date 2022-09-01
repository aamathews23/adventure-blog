import ImageType from '../global/Image';

/**
 * The about component type
 */
type About = {
  title: string;
  main: string;
  skills: string[];
  image?: ImageType;
};

export default About;
