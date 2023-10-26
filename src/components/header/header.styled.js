import { styled } from 'styled-components';
import { variables } from '../../Styles/GlobalStyle';

export const Section = styled.section`
  /* margin-top: 24px;
  margin-left: 20px;
  margin-right: 20px; */
  width: 335px;
  /* display: flex; */
  .currentTitle {
    color: #111;
    /* margin-right: auto; */

    text-shadow:
      0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
      0px 47px 355px rgba(0, 0, 0, 0.07);
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 1;
  }
  .btn {
    padding: 0;
    border: 0;
    background-color: transparent;
  }
  .burgerBtn {
    margin-right: auto;
  }

  .head-box {
    /* width: 335px; */
    display: flex;
    justify-content: space-between;
    /* margin-bottom: 64px; */
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
    /* margin-top: 24px;
    margin-left: 20px;
    margin-right: 20px; */
    width: 704px;

    .head-box {
      /* width: 704px; */
      /* margin-bottom: 64px; */
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
      color: ${(props) => props.theme.title};
      font-family: Inter;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 1;
    }
  }
  @media (min-width: 1440px) {
    width: 1087px;
    .head-box {
      /* width: 1151px; */
      align-items: center;
      /* margin-bottom: 64px; */
    }
  }
`;

export const HeaderTitle = styled.div`
  width: 400px;
  display: flex;
`;

export const HeaderImg = styled.img`
  margin-right: 8px;
`;

export const HeaderWrapper = styled.div``;

export const HeaderText = styled.p`
  display: inline-block;
  margin-top: 8px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  color: var(--primary-text-color);
`;
export const HeaderSpan = styled.span`
  color: var(--blue);
`;
