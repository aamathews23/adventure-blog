import { render } from '@testing-library/react';
import CardGrid from '@/global/CardGrid';
import Adventure from '@/types/Adventure';
import '@testing-library/jest-dom';

const adventures: Adventure[] = [];

describe('CardGrid', () => {
  it('mounts', () => {
    const { getByTestId } = render(<CardGrid items={adventures} />);
    const grid = getByTestId('grid');
    expect(grid).toBeInTheDocument();
  });
});
