import styled from '@emotion/styled';

export const ColumnContainer = styled.li`
  display: flex;
  flex-direction: column;
  min-width: calc(100% - 36px);
  width: 100%;
  padding: 18px 18px 20px;
  border: 1px solid var(--border-modal);
  border-radius: 8px;
  background-color: var(--white);
  overflow-y: auto;
  scroll-snap-align: start;
  @media screen and (min-width: 768px) {
    min-width: 302px;
    padding: 20px 20px;
  }
`;
