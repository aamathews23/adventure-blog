import { render } from '@testing-library/react';
import Card from '../../components/global/Card';
import '@testing-library/jest-dom';

const title = 'Post 1';
const description = 'Body 1';
const date = '05/12/2022';
const image = {
  src: 'example.jpg',
  alt: 'alt text',
};
const collection = ['2022'];

describe('Card', () => {
  it('mounts', () => {
    const { getByTestId } = render(
      <Card
        title={title}
        description={description}
        date={date}
        image={image}
        collection={collection}
      />,
    );
    const card = getByTestId('card');
    expect(card).toBeInTheDocument();
  });
  it('renders the title', () => {
    const { getByText } = render(
      <Card
        title={title}
        description={description}
        date={date}
        image={image}
        collection={collection}
      />,
    );
    expect(getByText(title)).toBeInTheDocument();
  });
  it('render the body', () => {
    const { getByText } = render(
      <Card
        title={title}
        description={description}
        date={date}
        image={image}
        collection={collection}
      />,
    );
    expect(getByText(description)).toBeInTheDocument();
  });
  it('renders the date', () => {
    const { getByText } = render(
      <Card
        title={title}
        description={description}
        date={date}
        image={image}
        collection={collection}
      />,
    );
    expect(getByText(date)).toBeInTheDocument();
  });
  it('renders the image', () => {
    const { getByAltText } = render(
      <Card
        title={title}
        description={description}
        date={date}
        image={image}
        collection={collection}
      />,
    );
    const img = getByAltText(image.alt);
    expect(img).toBeInTheDocument();
    expect(img.getAttribute('src')).toEqual(image.src);
  });
});
