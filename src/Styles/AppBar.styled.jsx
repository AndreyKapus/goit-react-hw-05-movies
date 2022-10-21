import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: block;
  text-align: end;
  margin-top: 30px;
`;

export const StyledNavLink = styled(NavLink)`
  margin-right: 20px;
  text-decoration: none;
  font-size: 24px;
  color: gray;
`;
