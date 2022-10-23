import { Outlet } from 'react-router-dom';
import { Nav, StyledNavLink } from '../../Styles/AppBar.styled';

const AppBar = () => {
  return (
    <Nav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>

      <Outlet />
    </Nav>
  );
};

export default AppBar;
