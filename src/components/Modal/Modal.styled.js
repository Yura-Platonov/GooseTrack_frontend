import styled, { keyframes } from 'styled-components';
import { IoMdClose } from 'react-icons/io';

const fadeInAnimation = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--modal-backdrop);
  animation: ${fadeInAnimation} 500ms linear;
  opacity: 1;
  z-index: 1000;
  overflow: auto;
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 100%;
  animation: ${fadeInAnimation} 1500ms linear;
  opacity: 1;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  max-width: 335px;
  min-height: 290px;
  width: 100%;
  padding: 20px;
  background-color: var(--white);
  border: var(--border-modal);
  border-radius: 8px;
  box-shadow: 0px 4px 57px 0px #1111110d;

  @media screen and (min-width: 768px) {
    max-width: 396px;
    min-height: 360px;
    padding: 32px;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0;
  display: flex;
  justify-content: center;
  background-color: var(--white);
  border: none;
`;

export const CloseSvg = styled(IoMdClose)`
  width: 24px;
  height: 24px;

  fill: var(--primary-text-color);
  transition: fill var(--transition);
  background-color: var(--white);

  &:hover,
  &:focus {
    fill: var(--blue);
  }
`;
