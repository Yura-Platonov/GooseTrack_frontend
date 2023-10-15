import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicStyle = (props) => css`
  color: ${props.color};
  background-color: ${props.currentDay};
`;

export const ContainerGrid = styled.div`
  display: grid;
  width: 100%;
  height: 470px;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1px;
  border: 1px solid #dce3e580;
  border-radius: 8px;
  background-color: #dce3e580;
  @media screen and (min-width: 768px) {
    height: 720px;
  }
`;

export const ItemLink = styled.a`
  display: flex;
  justify-content: end;
  padding: 2px 2px;
  background-color: var(--white);
  cursor: pointer;
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
  @media screen and (min-width: 768px){
    padding: 4px 4px;
  }
`;

export const ItemDate = styled.p`
  ${dynamicStyle};
  display: flex;
  width: 20px;
  height: 20px;
  padding: 4px 6px;
  margin: 6px 2px 8px;
  font-family: Inter;
  font-size: 12px;
  font-weight: 700;
  border-radius: 6px;
  color: ${(props) => (props.currentMonth ? '#343434' : '#34343450')};
  color: ${(props) => (props.currentDay ? 'var(--white)' : '')};
  background-color: ${(props) => (props.currentDay ? 'var(--blue)' : '')};
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
    margin: 10px 10px 6px;
    font-size: 16px;
    line-height: 18px;
  }
`;
