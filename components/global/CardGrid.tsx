import Card from '../global/Card';
import Adventure from '../../types/adventures/Adventure';
import breakpoints from '../../common/breakpoints';

/**
 * The post grid type
 */
type GridProps = {
  items: Adventure[];
  type?: string;
};

/**
 * Creates a grid component
 *
 * @param {Array} items
 * @param {String} type
 * @returns a grid component
 */
const Grid = ({ items, type }: GridProps) => (
  <div
    css={{
      display: 'grid',
      gap: 16,
      [breakpoints.sm]: {
        gridTemplateColumns: '1fr 1fr',
      },
      [breakpoints.lg]: {
        gridTemplateColumns: '1fr 1fr 1fr',
      },
    }}
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
