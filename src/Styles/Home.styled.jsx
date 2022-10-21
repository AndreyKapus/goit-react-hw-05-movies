import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1`
  display: block;
  text-align: center;
  margin-top: 30px;
  font-size: 46px;
  font-family: sans-serif;
  text-shadow: 2px 2px 4px #000000;
`;

export const MovieList = styled.li`
  font-family: sans-serif;
  margin-top: 10px;
  font-size: 20px;
  list-style: none;
  text-decoration: none;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  text-align: center;
  color: gray;
`;

export const StyledUl = styled.ul`
  display: block;
  margin-top: 30px;
`;
