import styled from '@emotion/styled';

export const ColumnContainer = styled.li`
  display: flex;
  flex-direction: column;
  min-width: calc(100% - 38px);
  width: 100%;
  max-height: 394px;
  padding: 18px 18px 20px;
  border: 1px solid var(--background-table);
  border-radius: 8px;
  background-color: var(--white);
  @media screen and (min-width: 768px) {
    min-width: 302px;
    max-height: 512px;
    padding: 20px 20px 36px;
  }
`;
