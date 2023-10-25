import styled from 'styled-components';

export const TasksList = styled.ul`
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: auto;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 0;
  gap: 14px;
  max-height: 301px;
  padding-right: 6px;
  min-height: 1px;
  scrollbar-width: thin;
  scollbar-height: 112px;
  scrollbar-color: rgba(231, 229, 229, 1);
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(242, 242, 242, 1);
    border-radius: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(242, 242, 242, 1);
    border-radius: 12px;
  }

  @media (min-width: 768px) {
    gap: 18px;
    padding-right: 7px;

    &::-webkit-scrollbar {
      width: 8px;
    }
  }
`;
