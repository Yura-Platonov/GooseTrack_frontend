import { styled } from 'styled-components';

export const Section = styled.section`
/* display: flex; */
  position: absolute;
  max-width: 185px;
  background-color: var(--white);
  .logo-box {
    display: flex;
    align-items: center;
    max-height: 35px;
    padding-bottom: 64px;
    /* padding-top: 10px; */
    background-color: var(--white);
  }
  .goosetrack {
    font-family: var(--main-font);
    font-size: 16px;
    font-style: italic;
    font-weight: 700;
    line-height: 1.375;
    letter-spacing: 0em;
    text-align: left;
    color: var(--blue);
    box-shadow:
      0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.035),
      0px 47px 355px 0px rgba(0, 0, 0, 0.07);
    margin-right: 25px;
    margin-left: 6px;
  }
  .icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
    color: black;
  }
  .icon-x-close {
    width: 0.9599609375em;
  }
  .x-button {
    display: flex;
    padding: 0px;
    background-color: transparent;
    border: none;
  }
  .button-out {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    color: var(--white);
    width: 131px;
    height: 46px;
    border-radius: 16px;
    background: #3e85f3;
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
    position: fixed;
    bottom: 24px;
    left: 20px;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.28; /* 128.571% */
    letter-spacing: -0.28px;
  }
  /* .container {
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
  } */
  @media (min-width: 768px) {
    max-width: 225px;
    .logo-box {
      display: flex;
      align-items: center;
      max-height: 58px;
      padding-bottom: 50px;
      background-color: var(--white);
    }
    .goosetrack {
      font-family: var(--main-font);
      font-size: 16px;
      font-style: italic;
      font-weight: 700;
      line-height: 1.5;
      letter-spacing: 0em;
      text-align: left;
      color: var(--blue);
      box-shadow:
        0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.035),
        0px 47px 355px 0px rgba(0, 0, 0, 0.07);
      margin-right: 31px;
      margin-left: 6px;
    }
    .x-button {
      display: flex;
      padding: 0px;
      background-color: transparent;
      border: none;
    }
    .button-out {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 11px;
      color: var(--white);
      width: 141px;
      height: 56px;
      border-radius: 16px;
      background: #3e85f3;
      box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
      position: fixed;
      bottom: 24px;
      left: 32px;
      font-family: Inter;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 1.33; /* 128.571% */
      letter-spacing: -0.36px;
    }
  }
  @media (min-width: 1440px) {
    position: relative;
    max-width: 241px;
    .logo-box {
      display: flex;
      align-items: center;
      max-height: 68px;
      padding-bottom: 32px;
      background-color: var(--white);
    }
    .goosetrack {
      font-family: var(--main-font);
      font-size: 24px;
      font-style: italic;
      font-weight: 700;
      line-height: 1;
      letter-spacing: 0em;
      text-align: left;
      color: var(--blue);
      box-shadow:
        0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.035),
        0px 47px 355px 0px rgba(0, 0, 0, 0.07);

      margin-left: 10px;
    }
    .button-out {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 11px;
      color: var(--white);
      width: 141px;
      height: 56px;
      border-radius: 16px;
      background: #3e85f3;
      box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
      position: fixed;
      bottom: 24px;
      left: 24px;
      font-family: Inter;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 1.33; /* 128.571% */
      letter-spacing: -0.36px;
    }
  }
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;

  .nav-box {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .user-title {
    color: var(--user-panel-text);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 24px;
  }
  .button-8 {
    color: var(--user-panel-text);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    display: flex;
    padding: 10px 65px 10px 12px;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    border-radius: 8px;
  }

  .button-8:hover,
  .button-8:focus {
    box-shadow: 0 0 0 1px var(--user-panel-active);
  }

  .button-8:active {
    color: var(--blue);
  }

  .active {
    background-color: var(--user-panel-active);
    color: var(--blue);
    stroke: var(--blue);
  }
  @media (min-width: 768px) {
    .nav-box {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .user-title {
      color: var(--user-panel-text);
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 32px;
    }
    .button-8 {
      color: var(--user-panel-text);
      display: flex;
      padding: 16px 80px 16px 20px;
      align-items: center;
      gap: 10px;
      border-radius: 8px;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }

    .button-8:hover,
    .button-8:focus {
      box-shadow: 0 0 0 1px var(--user-panel-active);
    }

    .button-8:active {
      color: var(--blue);
    }

    .active {
      background-color: var(--user-panel-active);
      color: var(--blue);
      stroke: var(--blue);
    }
  }
  @media (min-width: 1440px) {
    .nav-box {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .user-title {
      color: var(--user-panel-text);
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 32px;
    }
    .button-8 {
      color: var(--user-panel-text);
      display: flex;
      padding: 16px 96px 16px 20px;
      align-items: center;
      gap: 10px;
      border-radius: 8px;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }

    .button-8:hover,
    .button-8:focus {
      box-shadow: 0 0 0 1px var(--user-panel-active);
    }

    .button-8:active {
      color: var(--blue);
    }

    .active {
      background-color: var(--user-panel-active);
      color: var(--blue);
      stroke: var(--blue);
    }
  }
`;
