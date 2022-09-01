import CardType from '../global/Card';
import ButtonType from '../global/Button';

/**
 * The home grid component type
 */
type Grid = {
  title: string;
  cta: ButtonType;
  cards: CardType[];
};

export default Grid;
