import { render } from '@testing-library/react';
import Details from '../components/posts/Details';
import '@testing-library/jest-dom';

const title = 'Post 1';
const date = '05/12/2022';
const location = 'A random location';
const locationUrl = 'https://example.com';
const distance = '9 miles';
const duration = '5 hours';
const intensity = 'Easy';

describe('Details', () => {
  it('mounts', () => {
    const { getByTestId } = render(
      <Details
        title={title}
        date={date}
        location={location}
        locationUrl={locationUrl}
        distance={distance}
        duration={duration}
        intensity={intensity}
      />,
    );
    const details = getByTestId('details');
    expect(details).toBeInTheDocument();
  });
  it('renders the title', () => {
    const { getByText } = render(
      <Details
        title={title}
        date={date}
        location={location}
        locationUrl={locationUrl}
        distance={distance}
        duration={duration}
        intensity={intensity}
      />,
    );
    expect(getByText(title)).toBeInTheDocument();
  });
  it('renders the date', () => {
    const { getByText } = render(
      <Details
        title={title}
        date={date}
        location={location}
        locationUrl={locationUrl}
        distance={distance}
        duration={duration}
        intensity={intensity}
      />,
    );
    expect(getByText(date)).toBeInTheDocument();
  });
  it('renders the location', () => {
    const { getByText } = render(
      <Details
        title={title}
        date={date}
        location={location}
        locationUrl={locationUrl}
        distance={distance}
        duration={duration}
        intensity={intensity}
      />,
    );
    const el = getByText(location);
    expect(el).toBeInTheDocument();
    expect(el.getAttribute('href')).toEqual(locationUrl);
  });
  it('renders the distance', () => {
    const { getByText } = render(
      <Details
        title={title}
        date={date}
        location={location}
        locationUrl={locationUrl}
        distance={distance}
        duration={duration}
        intensity={intensity}
      />,
    );
    expect(getByText(distance)).toBeInTheDocument();
  });
  it('renders the duration', () => {
    const { getByText } = render(
      <Details
        title={title}
        date={date}
        location={location}
        locationUrl={locationUrl}
        distance={distance}
        duration={duration}
        intensity={intensity}
      />,
    );
    expect(getByText(duration)).toBeInTheDocument();
  });
  it('renders the intensity', () => {
    const { getByText } = render(
      <Details
        title={title}
        date={date}
        location={location}
        locationUrl={locationUrl}
        distance={distance}
        duration={duration}
        intensity={intensity}
      />,
    );
    expect(getByText(intensity)).toBeInTheDocument();
  });
});
