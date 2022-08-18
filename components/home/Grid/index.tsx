import Text from '../../global/Text';
import Card from '../../global/Card';
import Button from '../../global/Button';
import HomeGridType from '../../../types/home/Grid';
import style from './style';

const Grid = ({ title, cta, cards }: HomeGridType) => {
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
