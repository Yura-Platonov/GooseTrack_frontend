import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicStyle = (props) => css`
  background-color: ${props.currentDay};
`;

export const ContainerDays = styled.div`
  display: flex;
  gap: 19px;
  width: calc(100% - 36px);
  padding: 14px 18px;
  margin-bottom: 14px;
  border: 1px solid #dce3e580;
  border-radius: 8px;
  background-color: var(--white);
  @media screen and (min-width: 768px) {
    gap: 69px;
    width: calc(100% - 64px);
    padding: 10px 32px;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 1440px) {
    gap: 128px;
    width: calc(100% - 92px);
    padding: 10px 46px;
  }
`;
export const ItemDay = styled.a`
  display: flex;
  flex-direction: column;
  width: calc((100% - (19px * 6)) / 7);
  height: 44px;
  text-align: center;
  font-family: Inter;
  color: #343434;
  cursor: pointer;
  &:nth-of-type(6) {
    color: var(--blue);
  }
  &:nth-of-type(7) {
    color: var(--blue);
  }
  @media screen and (min-width: 768px) {
    width: calc((100% - (69px * 6)) / 7);
    height: 46px;
  }
  @media screen and (min-width: 1440px) {
    width: calc((100% - (128px * 6)) / 7);
    height: 46px;
  }
`;

export const ItemDayName = styled.p`
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    margin-bottom: 4px;
    font-size: 14px;
  }
`;

export const ItemDayNum = styled.p`
  ${dynamicStyle};
  display: flex;
  width: 8px;
  height: 14px;
  padding: 4px 6px;
  margin: auto;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  border-radius: 6px;
  color: #343434;
  color: ${(props) => (props.currentDay ? 'var(--white)' : '')};
  background-color: ${(props) => (props.currentDay ? 'var(--blue)' : '')};
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 11px;
    height: 18px;
    padding: 4px 8px;
    font-size: 16px;
  line-height: 18px;
  }
`;
