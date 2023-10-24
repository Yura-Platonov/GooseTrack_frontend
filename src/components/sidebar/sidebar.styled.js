import { styled } from 'styled-components';

export const Section = styled.section`
  display: flex;
  /* flex: 1; */
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  width: 225px;
  background-color: var(--white);
  z-index: 2;
  height: 100%;
  background-color: #fff;

  .logo-box {
    display: flex;
    margin-top: 24px;
    margin-left: 20px;
    align-items: center;
    width: 185px;
    height: 35px;
    padding-bottom: 64px;
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
    position: absolute;
    bottom: 0;
    left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    gap: 6px;
    color: var(--white);
    width: 131px;
    height: 46px;
    border-radius: 16px;
    background: #3e85f3;
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.28;
    letter-spacing: -0.28px;
  }

  @media (min-width: 768px) {
    width: 287px;
    .logo-box {
      display: flex;
      align-items: center;
      height: 58px;
      width: 225px;
      margin-top: 24px;
      margin-left: 32px;
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
      position: absolute;
      bottom: 0;
      left: 24px;
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
      font-family: Inter;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 1.33;
      letter-spacing: -0.36px;
    }
  }
  @media (min-width: 1440px) {
    position: relative;
    overflow: hidden;
    width: 289px;
    max-height: 100vh;
    min-height: calc(100vh - 60px);

    .logo-box {
      display: flex;
      align-items: center;
      height: 68px;
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
      position: absolute;
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
      font-family: Inter;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 1.33;
      letter-spacing: -0.36px;
    }
  }
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 185px;

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
    margin-left: 32px;
    width: 225px;
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
    margin-left: 24px;
    width: 241px;
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
