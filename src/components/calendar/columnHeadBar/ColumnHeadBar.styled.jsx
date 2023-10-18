import { IoMdAddCircleOutline } from 'react-icons/io';
import styled from '@emotion/styled';

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 38px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px; //якщо немає тасок, якщо є 24px
`;
export const Title = styled.h2`
  font-family: Inter;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #111111;
`;
export const AddTaskBtn = styled.a`
  fill: #111111;
  &:hover {
    fill: var(--blue);
  }
`;

export const IconAdd = styled(IoMdAddCircleOutline)`
  width: 22px;
  height: 22px;
  fill: inherit;
  &:hover {
    fill: inherit;
  }
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
