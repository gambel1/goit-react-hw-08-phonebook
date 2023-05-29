import styled from '@emotion/styled';

export const UserMenuDiv = styled.div`
  @media screen and (max-width: 768px) {
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const UserMenuP = styled.p`
  margin-right: 5px;
`;
export const UserMenuButton = styled.button`
  font-size: 14px;
  padding: 4px 10px;

  cursor: pointer;
  border: solid 2px #000;
  border-radius: var(--border-margin-padding);
  background-color: #9b94ce;

  :hover {
    color: #e02121;
  }
`;
