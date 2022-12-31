import { render } from '@testing-library/react';
import Grid from '../../components/home/Adventures';
import AdventureType from '../../types/adventures/Adventure';
import '@testing-library/jest-dom';

const title = 'Test title';
const cta = {
  label: 'Test cta',
  anchor: 'https://example.com',
};
const cards: AdventureType[] = [
  {
    title: 'Test title card',
    description: 'Test body card',
    image: {
      src: 'example.jpg',
      alt: 'example alt',
    },
    trail: 'Trail',
    link: 'https://example.com',
    rating: 4.5,
    date: '1/1/2022',
    year: '2022',
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
    const grid = getByTestId('adventures');
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
