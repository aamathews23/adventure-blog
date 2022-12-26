import Card from '../../global/Card';
import GridType from '../../../types/global/CardGrid';
import Adventure from '../../../types/adventures/Adventure';
import style from './style';

/**
 * Creates a grid component
 *
 * @param {Array} items
 * @param {String} type
 * @returns a grid component
 */
const Grid = <T extends Adventure>({ items, type }: GridType<T>) => (
  <div
    css={style}
    data-testid="grid"
  >
    {items.map((item, key) => (
      <Card
        key={key}
        title={item.title}
        description={item.description}
        image={item.image}
        type={type}
      />
    ))}
  </div>
);

export default Grid;
