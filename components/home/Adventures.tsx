import CardGrid from '../global/CardGrid';
import Button from '../global/Button';
import Adventure from '../../types/adventures/Adventure';
import breakpoints from '../../common/breakpoints';

type AdventuresProps = {
  title: string;
  cta: {
    label: string;
    anchor: string;
    tag?: 'a' | 'button';
  };
  cards: Adventure[];
};

/**
 * Creates a grid component to be used on the home page
 *
 * @param {String} title
 * @param {Object} cta
 * @param {Array} cards
 * @returns a grid component
 */
const Adventures = ({ title, cta, cards }: AdventuresProps) => (
  <section
    css={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      marginBottom: 128,
      [breakpoints.sm]: { alignItems: 'center' },
      [breakpoints.lg]: {
        alignItems: 'flex-start',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 1440,
      },
    }}
    data-testid="adventures"
  >
    <h2
      css={{
        fontFamily: 'Karla, sans-serif',
        fontSize: 32,
        marginBottom: 32,
        [breakpoints.lg]: { fontSize: 48 },
      }}
      data-testid="adventures-title"
    >
      {title}
    </h2>
    {cards && cards.length > 0 && (
      <CardGrid
        items={cards}
        type="adventures"
      />
    )}
    <br />
    <Button
      label={cta.label}
      tag={cta.tag}
      anchor={cta.anchor}
    />
  </section>
);

export default Adventures;
