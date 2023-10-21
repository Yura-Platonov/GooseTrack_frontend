import styled from 'styled-components';
import { BsArrowRightCircle } from 'react-icons/bs';

export const MenuContent = styled.div`
  position: absolute;
  top: 12px;
  right: -64px;
  width: 115px;
  height: 70px;
  padding: 12px;

  background-color: rgba(220, 227, 229, 0.8);
  border: var(--border-modal);
  border-radius: 8px;
  box-shadow: var(--box-shadow);

  @media screen and (min-width: 768px) {
    top: 10px;
    left: -8px;
    width: 147px;
    height: 90px;
    padding: 20px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0;
  padding: 0;
`;

export const Button = styled.button`
  color: rgba(17, 17, 17, 1);
  font-family: var(--main-font);
  font-size: 12px;
  font-weight: 500;

  padding: 0;
  display: flex;
  justify-content: center;
  background-color: transparent;

  &:hover,
  &:focus {
    color: var(--blue);
    transition: color var(--transition);
  }

  &:hover > svg,
  &:focus > svg {
    fill: currentColor;
    transition: fill var(--transition);
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const ArrowSvg = styled(BsArrowRightCircle)`
  width: 14px;
  height: 14px;
  margin-left: 10px;
  fill: rgba(17, 17, 17, 1);

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;
