import { render } from '@testing-library/react';
import Intro from '../components/home/Intro';
import '@testing-library/jest-dom';

const title = 'Test title';
const body = 'Test body';
const cta = {
  label: 'Test cta',
};

describe('Intro', () => {
  it('mounts', () => {
    const { getByTestId } = render(
      <Intro
        title={title}
        body={body}
        cta={cta}
      />,
    );
    const intro = getByTestId('intro');
    expect(intro).toBeInTheDocument();
  });
  it('has the title', () => {
    const { getByText } = render(
      <Intro
        title={title}
        body={body}
        cta={cta}
      />,
    );
    expect(getByText(title)).toBeInTheDocument();
  });
  it('has the body', () => {
    const { getByText } = render(
      <Intro
        title={title}
        body={body}
        cta={cta}
      />,
    );
    expect(getByText(body)).toBeInTheDocument();
  });
  it('has the cta', () => {
    const { getByText } = render(
      <Intro
        title={title}
        body={body}
        cta={cta}
      />,
    );
    expect(getByText(cta.label)).toBeInTheDocument();
  });
});
