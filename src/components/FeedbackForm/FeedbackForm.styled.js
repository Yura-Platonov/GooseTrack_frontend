import styled from 'styled-components';

export const Container = styled.div`
  height: fit-content;
  padding: 28px 20px 0;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    width: 335px;
  }
`;

export const Button = styled.button`
  display: flex;
  position: absolute;
  right: 14px;
  top: 14px;
  padding: 0px;
  background-color: transparent;
  border: none;
`;
