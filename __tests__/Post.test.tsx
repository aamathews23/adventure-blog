import { render } from '@testing-library/react';
import Post from '../components/posts/Post';
import '@testing-library/jest-dom';

const title = 'Post 1';
const body = 'Body 1';
const date = '05/12/2022';
const previewImg = 'example.jpg';
const previewImgAlt = 'alt text';

describe('Post', () => {
  it('mounts', () => {
    const { getByTestId } = render(
      <Post
        title={title}
        body={body}
        date={date}
        previewImg={previewImg}
        previewImgAlt={previewImgAlt}
      />,
    );
    const post = getByTestId('post');
    expect(post).toBeInTheDocument();
  });
  it('renders the title', () => {
    const { getByText } = render(
      <Post
        title={title}
        body={body}
        date={date}
        previewImg={previewImg}
        previewImgAlt={previewImgAlt}
      />,
    );
    expect(getByText(title)).toBeInTheDocument();
  });
  it('render the body', () => {
    const { getByText } = render(
      <Post
        title={title}
        body={body}
        date={date}
        previewImg={previewImg}
        previewImgAlt={previewImgAlt}
      />,
    );
    expect(getByText(body)).toBeInTheDocument();
  });
  it('renders the date', () => {
    const { getByText } = render(
      <Post
        title={title}
        body={body}
        date={date}
        previewImg={previewImg}
        previewImgAlt={previewImgAlt}
      />,
    );
    expect(getByText(date)).toBeInTheDocument();
  });
  it('renders the image', () => {
    const { getByAltText } = render(
      <Post
        title={title}
        body={body}
        date={date}
        previewImg={previewImg}
        previewImgAlt={previewImgAlt}
      />,
    );
    const image = getByAltText(previewImgAlt);
    expect(image).toBeInTheDocument();
    expect(image.getAttribute('src')).toEqual(previewImg);
  });
});
