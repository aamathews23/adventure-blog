import { render } from '@testing-library/react';
import TrailInfo from '@/adventures/TrailInfo';
import '@testing-library/jest-dom';

const trail = 'Trail';
const link = 'https://example.com';
const rating = 4.5;
const date = '1/1/2022';

describe('TrailInfo', () => {
  it('mounts', () => {
    const { getByTestId } = render(
      <TrailInfo
        trail={trail}
        link={link}
        rating={rating}
        date={date}
      />,
    );
    expect(getByTestId('trail-info')).toBeInTheDocument();
  });
  it('has the trail and link', () => {
    const { getByText } = render(
      <TrailInfo
        trail={trail}
        link={link}
        rating={rating}
        date={date}
      />,
    );
    const trailLink = getByText(trail);
    expect(trailLink).toBeInTheDocument();
    expect(trailLink).toHaveAttribute('href', link);
  });
  it('has the rating', () => {
    const { getByText } = render(
      <TrailInfo
        trail={trail}
        link={link}
        rating={rating}
        date={date}
      />,
    );
    expect(getByText(rating)).toBeInTheDocument();
  });
  it('has the date', () => {
    const { getByText } = render(
      <TrailInfo
        trail={trail}
        link={link}
        rating={rating}
        date={date}
      />,
    );
    expect(getByText(date)).toBeInTheDocument();
  });
});
