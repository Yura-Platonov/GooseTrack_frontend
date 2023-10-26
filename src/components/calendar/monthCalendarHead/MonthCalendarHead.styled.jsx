import styled from '@emotion/styled';

export const ContainerDays = styled.div`
  display: flex;
  width: calc(100% - 2px);
  height: 50px;
  margin-bottom: 14px;
  border: 1px solid var(--background-table);
  border-radius: 8px;
  background-color: var(--white);
  @media screen and (min-width: 768px) {
    height: 46px;
    margin-bottom: 18px;
  }
`;
export const ItemDay = styled.div`
  width: calc(100% / 7);
  padding: 16px 0;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  text-transform: uppercase;
  color: var(--user-panel-text);
  &:nth-of-type(6) {
    color: var(--blue);
  }
  &:nth-of-type(7) {
    color: var(--blue);
  }
`;
