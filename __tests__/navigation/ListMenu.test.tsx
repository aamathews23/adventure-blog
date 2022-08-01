import { render } from '@testing-library/react';
import ListMenu from '../../components/navigation/ListMenu';
import '@testing-library/jest-dom';

describe('ListMenu', () => {
  it('mounts', () => {
    const { getByTestId } = render(<ListMenu />);
    const listMenu = getByTestId('list-menu');
    expect(listMenu).toBeInTheDocument();
  });
});
