import { styled } from 'styled-components';

export const Section = styled.section`
  margin-left: 15px;
  margin-right: 15px;
  /* background-color: var(--blue); */
  .logo-box{
    display: flex;
    max-width: 185px;
    max-height: 35px;
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
    background-color: transparent;
    border: none;
  }
`;
export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  .button-8 {
    background-color: #e1ecf4;
    border-radius: 3px;
    border: 1px solid #7aa7c7;
    box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;
    box-sizing: border-box;
    color: #39739d;
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system, system-ui, 'Segoe UI', 'Liberation Sans',
      sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.15385;
    margin: 0;
    outline: none;
    padding: 8px 0.8em;
    position: relative;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    white-space: nowrap;
    margin-right: 10px;
  }

  .button-8:hover,
  .button-8:focus {
    background-color: #b3d3ea;
    color: #2c5777;
  }

  .button-8:focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
  }

  .button-8:active {
    background-color: #a0c7e4;
    box-shadow: none;
    color: #2c5777;
  }

  .active {
    background-color: #cecece;
  }
`;
