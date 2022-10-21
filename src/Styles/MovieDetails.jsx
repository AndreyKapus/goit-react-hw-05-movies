import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  padding-left: 50px;
  padding-right: 50px;
`;

export const Img = styled.div`
  margin-top: 50px;
  margin-right: 30px;
`;

export const MovieDetailsContainer = styled.div`
  margin-top: 50px;
`;

export const StyledLink = styled(NavLink)`
  margin-right: 20px;
  color: gray;
  font-size: 24px;
`;

export const Genre = styled.p`
  margin-bottom: 30px;
`;

export const LinkList = styled.div`
  margin-bottom: 30px;
`;
