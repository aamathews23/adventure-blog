import ButtonType from '../global/Button';
import Adventure from '../adventures/Adventure';

/**
 * The home grid component type
 */
type Adventures = {
  title: string;
  cta: ButtonType;
  cards: Adventure[];
};

export default Adventures;
