import styled from 'styled-components';

export const Text = styled.p`
  padding-left: 24px;
  margin-bottom: 24px;
  color: var(--user-panel-text);
  font-family: var(--main-font);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;

  @media screen and (min-width: 375px) {
    margin-bottom: 20px;
  }
`;

export const Wrapper = styled.p`
  border-radius: 29px;
  border: 0.8px solid var(--user-panel-active);

  @media screen and (min-width: 375px) {
    padding: 40px 14px;
  }
  @media screen and (min-width: 768px) {
    padding: 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 40px;
  }
`;
