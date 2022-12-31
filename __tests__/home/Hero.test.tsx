import { render } from '@testing-library/react';
import Hero from '../../components/home/Hero';
import '@testing-library/jest-dom';

const title = 'Test title';
const body = 'Test body';
const activities = ['software', 'design', 'hockey'];
const cta = {
  label: 'Test cta',
  anchor: 'https://example.com',
};
const image = {
  src: 'example.jpg',
  alt: 'alt text',
};

describe('Hero', () => {
  it('mounts', () => {
    const { getByTestId } = render(
      <Hero
        title={title}
        body={body}
        activities={activities}
        cta={cta}
        image={image}
      />,
    );
    const hero = getByTestId('hero');
    expect(hero).toBeInTheDocument();
  });
  it('has the title', () => {
    const { getByText } = render(
      <Hero
        title={title}
        body={body}
        activities={activities}
        cta={cta}
        image={image}
      />,
    );
    expect(getByText(title)).toBeInTheDocument();
  });
  it('has the body', () => {
    const { getByText } = render(
      <Hero
        title={title}
        body={body}
        activities={activities}
        cta={cta}
        image={image}
      />,
    );
    expect(getByText(body)).toBeInTheDocument();
  });
  it('has the cta', () => {
    const { getByText } = render(
      <Hero
        title={title}
        body={body}
        activities={activities}
        cta={cta}
        image={image}
      />,
    );
    expect(getByText(cta.label)).toBeInTheDocument();
  });
  it('has the image', () => {
    const { getByAltText } = render(
      <Hero
        title={title}
        body={body}
        activities={activities}
        cta={cta}
        image={image}
      />,
    );
    expect(getByAltText(image.alt).getAttribute('src')).toEqual(image.src);
  });
});
