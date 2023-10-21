import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f7f6f9;
  height: 100vh;
  padding-top: 95px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;

  @media (min-width: 768px) {
    padding-top: 64px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 38px;
  }

  @media (min-width: 1440px) {
    //padding-top: 64px;
    padding-bottom: 32px;
  }
`;
