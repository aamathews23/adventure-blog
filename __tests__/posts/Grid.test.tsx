import { render } from '@testing-library/react';
import Grid from '../../components/posts/Grid';
import PostType from '../../types/posts/Post';
import '@testing-library/jest-dom';

const posts: PostType[] = [];

describe('Grid', () => {
  it('mounts', () => {
    const { getByTestId } = render(<Grid posts={posts} />);
    const grid = getByTestId('grid');
    expect(grid).toBeInTheDocument();
  });
});
