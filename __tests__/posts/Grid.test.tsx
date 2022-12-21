import { render } from '@testing-library/react';
import Grid from '../../components/posts/Grid';
import CardType from '../../types/global/Card';
import '@testing-library/jest-dom';

const posts: CardType[] = [];

describe('Grid', () => {
  it('mounts', () => {
    const { getByTestId } = render(<Grid posts={posts} />);
    const grid = getByTestId('grid');
    expect(grid).toBeInTheDocument();
  });
});
