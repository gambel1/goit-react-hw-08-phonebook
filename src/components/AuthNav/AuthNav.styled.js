import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const AuthNavLink = styled(NavLink)`
  color: #212121;
  font-weight: bold;

  :hover {
    color: #2828ac;
  }

  :active{
    color: green;
  }
`;
