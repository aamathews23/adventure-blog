import { render } from '@testing-library/react';
import Grid from '../components/home/Grid';
import PostType from '../types/Post';
import '@testing-library/jest-dom';

const title = 'Test title';
const cta = {
  label: 'Test cta',
};
const posts: PostType[] = [
  {
    title: 'Test title card',
    cardBody: 'Test body card',
    date: '07/30/2022',
    image: {
      src: 'example.jpg',
      alt: 'example alt',
    },
  },
];

describe('Grid', () => {
  it('mounts', () => {
    const { getByTestId } = render(
      <Grid
        title={title}
        posts={posts}
        cta={cta}
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
        cta={cta}
      />,
    );
    expect(getByText(title)).toBeInTheDocument();
  });
  it('has the cta', () => {
    const { getByText } = render(
      <Grid
        title={title}
        posts={posts}
        cta={cta}
      />,
    );
    expect(getByText(cta.label)).toBeInTheDocument();
  });
  it('has the post', () => {
    const { getByText } = render(
      <Grid
        title={title}
        posts={posts}
        cta={cta}
      />,
    );
    expect(getByText(posts[0].title)).toBeInTheDocument();
  });
});
