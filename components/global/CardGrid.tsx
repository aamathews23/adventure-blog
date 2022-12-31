import Card from '@/global/Card';
import Adventure from '@/types/Adventure';
import breakpoints from '@/common/breakpoints';

/**
 * The card grid type
 */
type CardGridProps = {
  items: Adventure[];
  type?: string;
};

/**
 * Creates a card grid component
 *
 * @param {Array} items
 * @param {String} type
 * @returns a card grid component
 */
const CardGrid = ({ items, type }: CardGridProps) => (
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

export default CardGrid;
