import { render } from '@testing-library/react';
import Grid from '../../components/home/Grid';
import CardType from '../../types/global/Card';
import '@testing-library/jest-dom';

const title = 'Test title';
const cta = {
  label: 'Test cta',
};
const cards: CardType[] = [
  {
    title: 'Test title card',
    description: 'Test body card',
    image: {
      src: 'example.jpg',
      alt: 'example alt',
    },
    collection: ['2022'],
  },
];

describe('Grid', () => {
  it('mounts', () => {
    const { getByTestId } = render(
      <Grid
        title={title}
        cards={cards}
        cta={cta}
      />,
    );
    const grid = getByTestId('home-grid');
    expect(grid).toBeInTheDocument();
  });
  it('has the title', () => {
    const { getByText } = render(
      <Grid
        title={title}
        cards={cards}
        cta={cta}
      />,
    );
    expect(getByText(title)).toBeInTheDocument();
  });
  it('has the cta', () => {
    const { getByText } = render(
      <Grid
        title={title}
        cards={cards}
        cta={cta}
      />,
    );
    expect(getByText(cta.label)).toBeInTheDocument();
  });
  it('has the post', () => {
    const { getByText } = render(
      <Grid
        title={title}
        cards={cards}
        cta={cta}
      />,
    );
    expect(getByText(cards[0].title)).toBeInTheDocument();
  });
});
