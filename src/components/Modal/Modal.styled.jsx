import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--modal-backdrop);
  opacity: 1;
  z-index: 999;
  overflow: auto;
  transition: opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 100%;
  background-color: var(--black);
  box-shadow: 1px 1px 14px 4px rgba(255, 107, 8, 0.42);
  border-radius: 16px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
`;
