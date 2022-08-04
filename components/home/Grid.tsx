import styles from '../../styles/components/home/grid.module.scss';
import Text from '../global/Text';
import Card from '../global/Card';
import HomeGridType from '../../types/home/Grid';
import Button from '../global/Button';

const Grid = ({ title, cta, cards }: HomeGridType) => {
  const mainClass = 'grid';
  return (
    <section
      className={styles[mainClass]}
      data-testid={mainClass}
    >
      <Text
        tag="h2"
        className={styles[`${mainClass}__title`]}
        data-testid={`${mainClass}-title`}
      >
        {title}
      </Text>
      <div
        className={styles[`${mainClass}__grid`]}
        data-testid={`${mainClass}-grid`}
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
