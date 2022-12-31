import { render, fireEvent } from '@testing-library/react';
import DrawerMenu from '@/navigation/DrawerMenu';
import '@testing-library/jest-dom';

describe('DrawerMenu', () => {
  it('mounts', () => {
    const { getByTestId } = render(<DrawerMenu />);
    const drawerMenu = getByTestId('drawer-menu');
    expect(drawerMenu).toBeInTheDocument();
  });
  it('displays the hamburger when closed', () => {
    const { getByTestId } = render(<DrawerMenu />);
    const hamburger = getByTestId('drawer-menu-button');
    expect(hamburger).toBeInTheDocument();
  });
  it('displays the drawer when open', () => {
    const { getByTestId } = render(<DrawerMenu />);
    const hamburger = getByTestId('drawer-menu-button');
    fireEvent.click(hamburger);
    const aside = getByTestId('drawer-menu-aside');
    expect(aside).toBeInTheDocument();
  });
});
