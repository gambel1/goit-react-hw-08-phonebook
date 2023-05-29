import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 5px;
`;

export const LinkNav = styled(NavLink)`
  color: #212121;
  font-weight: bold;

  :hover {
    color: #2828ac;
  }
  :active {
    color: green;
  }
`;
