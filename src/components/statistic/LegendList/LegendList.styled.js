import styled from 'styled-components';

const ListWrapper = styled.ul`
  display: flex;

  list-style: none;
  padding: 0;
  font-family: var(--main-font);
  color: var(--user-panel-text);
  font-style: 'normal';
  font-weight: '400';

  @media (max-width: 375px) {
    font-size: 14px;
  }

  @media (min-width: 375px) {
    font-size: 16px;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: 20px;
  flex-wrap: nowrap;
`;

const Dot = styled.span`
  user-select: none;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ByDateDot = styled(Dot)`
  background-color: var(--pink);
`;

const ByMonthDot = styled(Dot)`
  background-color: var(--blue);
`;

const Text = styled.span`
  user-select: none;
  font-size: 16px;
`;

export { ListWrapper, ListItem, ByDateDot, ByMonthDot, Text };
