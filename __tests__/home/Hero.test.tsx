import { render } from '@testing-library/react';
import Hero from '../../components/home/Hero';
import '@testing-library/jest-dom';

const title = 'Test title';
const main = 'Test body';
const cta = {
  label: 'Test cta',
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
        main={main}
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
        main={main}
        cta={cta}
        image={image}
      />,
    );
    expect(getByText(title)).toBeInTheDocument();
  });
  it('has the main', () => {
    const { getByText } = render(
      <Hero
        title={title}
        main={main}
        cta={cta}
        image={image}
      />,
    );
    expect(getByText(main)).toBeInTheDocument();
  });
  it('has the cta', () => {
    const { getByText } = render(
      <Hero
        title={title}
        main={main}
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
        main={main}
        cta={cta}
        image={image}
      />,
    );
    expect(getByAltText(image.alt).getAttribute('src')).toEqual(image.src);
  });
});
