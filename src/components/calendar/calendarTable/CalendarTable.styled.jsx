import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const dynamicStyle = (props) => css`
  background-color: ${props.currentDay};
  background-color: ${props.high};
  background-color: ${props.medium};
  color: ${props.high};
  color: ${props.medium};
`;

export const ContainerGrid = styled.div`
  display: grid;
  width: 100%;
  height: 470px;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1px;
  border: 1px solid var(--background-table);
  border-radius: 8px;
  background-color: var(--background-table);
  @media screen and (min-width: 768px) {
    height: 720px;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: var(--white);

  &:first-of-type {
    border-top-left-radius: 8px;
  }
  &:nth-of-type(7) {
    border-top-right-radius: 8px;
  }
  &:nth-of-type(36) {
    border-bottom-left-radius: 8px;
  }
  &:nth-of-type(42) {
    border-bottom-right-radius: 8px;
  }
  @media screen and (min-width: 768px) {
    padding: 4px 4px 12px;
  }
`;

export const ItemLink = styled(Link)`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: end;
  cursor: pointer;
`;

export const ItemDate = styled.p`
  ${dynamicStyle};
  display: flex;
  width: 8px;
  height: 14px;
  padding: 4px 6px;
  margin: 6px 2px 8px;
  font-family: Inter;
  font-size: 12px;
  font-weight: 700;
  border-radius: 6px;
  color: ${(props) =>
    props.currentMonth ? 'var(--user-panel-text)' : 'var(--out-month-day)'};
  color: ${(props) => (props.currentDay ? 'var(--white)' : '')};
  background-color: ${(props) => (props.currentDay ? 'var(--blue)' : '')};
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 11px;
    height: 18px;
    padding: 4px 8px;
    margin: 10px 10px 6px;
    font-size: 16px;
    line-height: 18px;
  }
`;

export const TasksWrapper = styled.div`
  width: calc(100% - 4px);
  max-height: 48px;
  position: absolute;
  top: 30px;
  left: 2px;
  overflow-y: scroll;  
  @media screen and (min-width: 768px) {
    width: calc(100% - 8px);
    max-height: 56px;
    top: 50px;
    left: 4px;
  }
  @media screen and (min-width: 1440px) {
    width: calc(100% - 16px);
    top: 50px;
    left: 8px;
  }
`;

export const ItemTask = styled.a`
  display: block;
  width: auto;
  padding: 4px 4px 4px 8px;
  margin-bottom: 2px;
  margin-right: 2px;
  border-radius: 8px;
  background-color: ${(prop) =>
    prop.high
      ? 'var(--month-status-high)'
      : prop.medium
      ? 'var(--month-status-medium)'
      : 'var(--month-status-low)'};
  font-family: Inter;
  font-size: 10px;
  font-weight: 700;
  line-height: 14px;
  color: ${(prop) =>
    prop.high
      ? 'var(--day-status-high)'
      : prop.medium
      ? 'var(--day-status-medium)'
      : 'var(--day-status-low)'};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
  }
`;
