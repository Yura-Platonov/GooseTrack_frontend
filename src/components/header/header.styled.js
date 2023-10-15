import { styled } from 'styled-components';

export const Section = styled.section`
  padding-top: 24px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 335px;

  .btn {
    padding: 0;
    border: 0;
    background-color: var(--white);
  }
  .burgerBtn {
    margin-right: auto;
  }
  .fedBut {
    display: flex;
    padding: 8px 20px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 10px;
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
    background: var(--blue);
    color: var(--white);
    margin-right: 18px;
  }
  .head-box {
    display: flex;
    justify-content: flex-end;
    align-items: center;
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
`;
