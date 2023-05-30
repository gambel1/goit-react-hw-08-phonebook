import styled from '@emotion/styled';

export const ContactListUl = styled.ul`
  /* width: 400px;
  list-style: none;
  margin-left: auto;
  margin-right: auto; */
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContactListLi = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* justify-content: space-between; */
  /* text-align: left; */
  gap: 20px;

  @media screen and (min-width: 768px /*от 768px и выше*/) {
    /* display: flex; */
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
    margin-left: auto;
    margin-right: auto;
    width: 400px;
  }
`;

export const ContactListSpan = styled.span`
  font-size: var(--font-size-subtitle);
  font-weight: bold;
  color: #3b327d;
`;

export const ContactListButton = styled.button`
  font-size: var(--font-size-buttons);
  padding: 4px 10px;

  cursor: pointer;
  border: solid 2px #000;
  border-radius: var(--border-margin-padding);
  background-color: #9b94ce;

  :hover {
    color: #e02121;
  }
`;
