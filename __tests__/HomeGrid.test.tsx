import { render } from '@testing-library/react';
import Grid from '../components/home/Grid';
import PostType from '../types/Post';
import '@testing-library/jest-dom';

const title = 'Test title';
const posts: PostType[] = [
  {
    title: 'Test title card',
    cardBody: 'Test body card',
    date: '07/30/2022',
  },
];

describe('Grid', () => {
  it('mounts', () => {
    const { getByTestId } = render(
      <Grid
        title={title}
        posts={posts}
      />,
    );
    const grid = getByTestId('grid');
    expect(grid).toBeInTheDocument();
  });
  it('has the title', () => {
    const { getByText } = render(
      <Grid
        title={title}
        posts={posts}
      />,
    );
    expect(getByText(title)).toBeInTheDocument();
  });
  it('has the post', () => {
    const { getByText } = render(
      <Grid
        title={title}
        posts={posts}
      />,
    );
    expect(getByText(posts[0].title)).toBeInTheDocument();
  });
});
