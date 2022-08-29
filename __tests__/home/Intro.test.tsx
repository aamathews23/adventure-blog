import { render } from '@testing-library/react';
import Intro from '../../components/home/Intro';
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

describe('Intro', () => {
  it('mounts', () => {
    const { getByTestId } = render(
      <Intro
        title={title}
        main={main}
        cta={cta}
        image={image}
      />,
    );
    const intro = getByTestId('intro');
    expect(intro).toBeInTheDocument();
  });
  it('has the title', () => {
    const { getByText } = render(
      <Intro
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
      <Intro
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
      <Intro
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
      <Intro
        title={title}
        main={main}
        cta={cta}
        image={image}
      />,
    );
    expect(getByAltText(image.alt).getAttribute('src')).toEqual(image.src);
  });
});
