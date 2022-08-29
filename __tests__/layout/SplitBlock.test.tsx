import { render } from '@testing-library/react';
import SplitBlock from '../../components/layout/SplitBlock';
import '@testing-library/jest-dom';

const left = (
  <>
    <p>Left</p>
  </>
);
const right = (
  <>
    <p>Right</p>
  </>
);

describe('SplitBlock', () => {
  it('mounts', () => {
    const { getByTestId } = render(
      <SplitBlock
        left={left}
        right={right}
        data-testid="section"
      />,
    );
    const splitBlock = getByTestId('section');
    expect(splitBlock).toBeInTheDocument();
  });
  it('has the left column', () => {
    const { getByText } = render(
      <SplitBlock
        left={left}
        right={right}
        data-testid="section"
      />,
    );
    expect(getByText('Left')).toBeInTheDocument();
  });
  it('has the right column', () => {
    const { getByText } = render(
      <SplitBlock
        left={left}
        right={right}
        data-testid="section"
      />,
    );
    expect(getByText('Right')).toBeInTheDocument();
  });
});
