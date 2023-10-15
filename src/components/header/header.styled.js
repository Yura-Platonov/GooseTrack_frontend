import { styled } from 'styled-components';

export const Section = styled.section`
  margin-top: 24px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 335px;
   /* display: flex; */

.btn {
    padding: 0;
    border: 0;
    background-color: var(--white);
  }
  .burgerBtn {
    margin-right: auto;
  }
  .fedBut {
  }
  .head-box {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-items: flex-start;
  }
  .avi {
    border-radius: 32px;
    border: 1.8px solid #3e85f3;
    width: 32px;
    height: 32px;
  }
  .user-box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .user-name {
    color: var(--user-panel-text);

    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.28;
  }
  @media (min-width: 768px) {
    margin-top: 24px;
    margin-left: 20px;
    margin-right: 20px;
    max-width: 704px;

    .head-box {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .avi {
      border-radius: 44px;
      border: 1.8px solid #3e85f3;
      width: 44px;
      height: 44px;
    }
    .user-box {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 14px;
    }
    .user-name {
      color: var(--user-panel-text);
      font-family: Inter;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 1;
    }
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;
