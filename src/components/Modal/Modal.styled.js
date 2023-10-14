import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--modal-backdrop);
  opacity: 1;
  z-index: 1000;
  overflow: auto;
  transition: opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 100%;
  border-radius: 16px;
  z-index: 1000;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
`;
