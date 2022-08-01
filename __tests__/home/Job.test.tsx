import { render } from '@testing-library/react';
import Job from '../../components/home/Job';
import '@testing-library/jest-dom';

const title = 'Test title';
const duration = '1-2';
const description = 'Test description';

describe('Job', () => {
  it('mounts', () => {
    const { getByTestId } = render(
      <Job
        title={title}
        duration={duration}
        description={description}
        isActive={false}
      />,
    );
    const job = getByTestId('job');
    expect(job).toBeInTheDocument();
  });
  it('has the title', () => {
    const { getByText } = render(
      <Job
        title={title}
        duration={duration}
        description={description}
        isActive={false}
      />,
    );
    expect(getByText(title)).toBeInTheDocument();
  });
  it('has the duration', () => {
    const { getByText } = render(
      <Job
        title={title}
        duration={duration}
        description={description}
        isActive={false}
      />,
    );
    expect(getByText(duration)).toBeInTheDocument();
  });
  it('has the description', () => {
    const { getByText } = render(
      <Job
        title={title}
        duration={duration}
        description={description}
        isActive={false}
      />,
    );
    expect(getByText(description)).toBeInTheDocument();
  });
});
