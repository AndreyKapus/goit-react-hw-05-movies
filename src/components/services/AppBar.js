import { Nav, StyledNavLink } from '../../Styles/AppBar.styled';

const AppBar = () => {
  return (
    <Nav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
    </Nav>
  );
};

export default AppBar;
