import { styled } from 'styled-components';

export const Section = styled.section`
  margin-top: 24px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 185px;
  /* background-color: var(--blue); */
  .logo-box {
    display: flex;
    align-items: center;
    max-height: 35px;
    margin-bottom: 64px;
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
  }
  .space-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
`;
