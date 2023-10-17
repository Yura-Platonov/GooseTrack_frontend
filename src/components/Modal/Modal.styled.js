import styled, { keyframes } from 'styled-components';

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
