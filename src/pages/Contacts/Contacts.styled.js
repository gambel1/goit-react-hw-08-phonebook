import styled from '@emotion/styled';

export const Main = styled.main`
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid rgb(0, 0, 0);
  border-radius: var(--border-margin-padding);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.14) 0px 1px 1px,
    rgba(0, 0, 0, 0.2) 0px 2px 1px;

  @media screen and (min-width: 768px /*от 768px и выше*/) {
    width: 600px;
    padding: 100px 15px;
  }
`;
