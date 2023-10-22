import styled from 'styled-components';

export const Box = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  //width: 100%;
  //min-height: 100vh;
  padding: 24px 20px 20px;

  transition: 250ms ease-in-out;
  background-color: #f7f6f9;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 40px 32px 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1151px;
    height: 700px;

    overflow-y: auto;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background-color: #e7e5e5;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #f2f2f2;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #cac8c8;
  }
`;

export const Wrapper = styled.div`
  max-width: 1680px;
  margin: 0 auto;
`;

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
`;

export const Main = styled.div`
  flex-grow: 1;
  padding-top: 32px;
`;
