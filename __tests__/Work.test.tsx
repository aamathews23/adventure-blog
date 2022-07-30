import { render } from '@testing-library/react';
import Work from '../components/home/Work';
import '@testing-library/jest-dom';

const title = 'Test title';
const jobs = [
  {
    title: 'Test Job',
    duration: '1 - 2',
    description: 'This is a test job',
  },
];

describe('Work', () => {
  it('mounts', () => {
    const { getByTestId } = render(
      <Work
        title={title}
        jobs={jobs}
      />,
    );
    const work = getByTestId('work');
    expect(work).toBeInTheDocument();
  });
  it('has the title', () => {
    const { getByText } = render(
      <Work
        title={title}
        jobs={jobs}
      />,
    );
    expect(getByText(title)).toBeInTheDocument();
  });
  it('has the job', () => {
    const { getByText } = render(
      <Work
        title={title}
        jobs={jobs}
      />,
    );
    expect(getByText(jobs[0].title)).toBeInTheDocument();
  });
});
