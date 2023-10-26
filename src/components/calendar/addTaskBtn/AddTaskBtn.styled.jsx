import { AiOutlinePlus } from 'react-icons/ai';
import styled from '@emotion/styled';

export const AddBtnDelimiter = styled.div`
  width: 100%;
  padding-top: 14px;
  @media screen and (min-width: 768px) {
    padding-top: 32px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 18px;
  }
`;

export const AddBtnContainer = styled.button`
  display: flex;
  max-width: 288px;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 1px dashed var(--blue);
  border-radius: 8px;
  color: var(--primary-text-color);
  fill: var(--primary-text-color);
  transition: var(--transition);
  background-color: var(--user-panel-active);
  &:hover {
    background-color: var(--switch-active);
  }
  @media screen and (min-width: 768px) {
    min-height: 52px;
  }
`;

export const IconAdd = styled(AiOutlinePlus)`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  fill: inherit;
`;

export const NameBtn = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
`;
