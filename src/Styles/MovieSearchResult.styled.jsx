import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const SearchResultList = styled.ul`
  list-style: none;
  margin-top: 30px;
  dicplay: block;
  text-align: center;
`;

export const List = styled.li``;

export const ListItem = styled(NavLink)`
  text-decoration: none;
  color: gray;
  font-family: sans-serif;
  margin-top: 10px;
  font-size: 20px;
`;
