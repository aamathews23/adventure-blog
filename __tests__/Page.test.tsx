import { render } from '@testing-library/react';
import Page from '../components/layout/Page';
import '@testing-library/jest-dom';

describe('Page', () => {
  it('mounts', () => {
    const { getByTestId } = render(<Page />);
    const page = getByTestId('page');
    expect(page).toBeInTheDocument();
  });
  it('renders a child', () => {
    const { getByTestId, getByText } = render(
      <Page>
        <h1>Hello</h1>
      </Page>,
    );
    const body = getByTestId('page-body');
    const child = getByText('Hello');
    expect(body).toBeInTheDocument();
    expect(child).toBeInTheDocument();
  });
});
