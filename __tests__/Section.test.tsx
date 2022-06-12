import { render } from '@testing-library/react';
import Section from '../components/posts/Section';
import PostType from '../types/Post';
import '@testing-library/jest-dom';

const title = 'Title';
const postsEmpty: PostType[] = [];
const posts: PostType[] = [
  {
    title: 'Post 1',
    cardBody: 'Body 1',
    date: '05/12/2022',
    previewImg: 'example.jpg',
    previewImgAlt: 'alt text',
  },
];

describe('Section', () => {
  it('mounts', () => {
    const { getByTestId } = render(
      <Section
        title={title}
        posts={posts}
      />,
    );
    const section = getByTestId('section');
    expect(section).toBeInTheDocument();
  });
  it('renders the title', () => {
    const { getByText } = render(
      <Section
        title={title}
        posts={posts}
      />,
    );
    expect(getByText(title)).toBeInTheDocument();
  });
  it('renders the post grid when posts are given', () => {
    const { getByTestId } = render(
      <Section
        title={title}
        posts={posts}
      />,
    );
    const grid = getByTestId('grid');
    expect(grid).toBeInTheDocument();
  });
  it('does not render the post grid when posts are not given', () => {
    const { queryByTestId } = render(
      <Section
        title={title}
        posts={postsEmpty}
      />,
    );
    const grid = queryByTestId('grid');
    expect(grid).toBeFalsy();
  });
});
