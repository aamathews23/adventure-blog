import Text from '../../global/Text';
import Card from '../../global/Card';
import Button from '../../global/Button';
import GridType from '../../../types/home/Grid';
import style from './style';

/**
 * Creates a grid component to be used on the home page
 *
 * @param {String} title
 * @param {Button} cta
 * @param {Array<Card>} cards
 * @returns a grid component
 */
const Grid = ({ title, cta, cards }: GridType) => {
  return (
    <section
      css={style.section}
      data-testid="home-grid"
    >
      <Text
        tag="h2"
        style={style.title}
        data-testid="home-grid-title"
      >
        {title}
      </Text>
      <div
        css={style.grid}
        data-testid="home-grid-grid"
      >
        {cards &&
          cards.length > 0 &&
          cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              date={card.date}
              type={card.type}
              image={card.image}
              collection={card.collection}
            />
          ))}
      </div>
      <Button
        label={cta.label}
        tag={cta.tag}
        anchor={cta.anchor}
      />
    </section>
  );
};

export default Grid;
