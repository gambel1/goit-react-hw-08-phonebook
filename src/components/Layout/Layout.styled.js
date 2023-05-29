import styled from '@emotion/styled';

export const ContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;

  @media screen and (min-width: 480px /*от 480px и выше*/) {
    width: 480px;
  }

  @media screen and (min-width: 768px /*от 768px и выше*/) {
    width: 768px;
  }

  @media screen and (min-width: 1200px /*от 1200px и выше*/) {
    width: 1200px;
  }
`;
