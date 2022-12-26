import Text from '../../global/Text';
import CardGrid from '../../global/CardGrid';
import Button from '../../global/Button';
import AdventuresType from '../../../types/home/Adventures';
import style from './style';

/**
 * Creates a grid component to be used on the home page
 *
 * @param {String} title
 * @param {Button} cta
 * @param {Array<Card>} cards
 * @returns a grid component
 */
const Adventures = ({ title, cta, cards }: AdventuresType) => {
  return (
    <section
      css={style.section}
      data-testid="adventures"
    >
      <Text
        tag="h2"
        style={style.title}
        data-testid="adventures-title"
      >
        {title}
      </Text>
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
};

export default Adventures;
