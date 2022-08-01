import { render } from '@testing-library/react';
import Jobs from '../../components/home/Jobs';
import '@testing-library/jest-dom';

const jobs = [
  {
    title: 'Test Job',
    duration: '1 - 2',
    description: 'This is a test job',
    isActive: false,
  },
];

describe('Jobs', () => {
  it('mounts', () => {
    const { getByTestId } = render(<Jobs jobs={jobs} />);
    const el = getByTestId('jobs');
    expect(el).toBeInTheDocument();
  });
  it('has the job', () => {
    const { getByText } = render(<Jobs jobs={jobs} />);
    expect(getByText(jobs[0].title)).toBeInTheDocument();
  });
});
