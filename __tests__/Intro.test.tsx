import { render } from '@testing-library/react';
import Intro from '../components/home/Intro';
import '@testing-library/jest-dom';

const title = 'Test title';
const body = 'Test body';

describe('Intro', () => {
  it('mounts', () => {
    const { getByTestId } = render(
      <Intro
        title={title}
        body={body}
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
      />,
    );
    expect(getByText(title)).toBeInTheDocument();
  });
  it('has the body', () => {
    const { getByText } = render(
      <Intro
        title={title}
        body={body}
      />,
    );
    expect(getByText(body)).toBeInTheDocument();
  });
});
