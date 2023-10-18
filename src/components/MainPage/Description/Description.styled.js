import styled from 'styled-components';

export const Container = styled.section`
  padding: 64px 20px;
  margin: 0 auto;
  max-width: 375px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 64px 32px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1440px;
    padding: 118px 128px;
  }
`;

export const HiddenH2 = styled.h2`
  visibility: hidden;
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-1px, -1px);
`;

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

export const Li = styled.li`
  display: inline-flex;
  flex-direction: column;
  :nth-child(2n) {
    align-items: flex-end;
  }

  @media screen and (min-width: 768px) {
    &:nth-child(2n) {
      margin-left: auto;
    }
  }

  @media screen and (min-width: 1024px) {
    max-width: 1107px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 16vw;

    &:nth-child(2n) {
      flex-direction: row-reverse;
      align-items: center;
    }
    &:nth-child(2n-1) {
      margin-left: auto;
    }
  }
`;

export const TitleH3 = styled.h3`
  display: inline-flex;
  flex-direction: column;
  color: var(--heading-text-color);
  font-size: 32px;
  line-height: 1.25;
  font-family: var(--main-font);
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    width: 275px;
    font-size: 40px;
    line-height: 1.1;
    margin-bottom: 24px;
  }
`;

export const NumberSpan = styled.span`
  color: var(--blue);
  font-size: 80px;
  line-height: 1;
  letter-spacing: -4px;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 104px;
    line-height: 1;
    letter-spacing: -4px;
  }
`;

export const AccentH3 = styled.span`
  color: var(--blue);
  font-size: 32px;
  line-height: 1.25;
  text-transform: uppercase;
  padding: 8px 19px;
  border-radius: 44px;
  background: var(--modal-backdrop);
  margin-bottom: 8px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const Text = styled.p`
  color: var(--description-text-color);
  font-size: 14px;
  line-height: 1.29;
  font-family: var(--main-font);
  font-weight: 500;

  @media screen and (min-width: 768px) {
    max-width: 275px;
  }
`;

export const ThumbDiv = styled.div`
  margin-top: 40px;

  @media screen and (min-width: 1024px) {
    margin-top: 0;
  }
`;
