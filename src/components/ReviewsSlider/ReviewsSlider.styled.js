import { styled } from 'styled-components';

export const Section = styled.section`
  margin-top: 64px;
  margin-bottom: 118px;

  @media (min-width: 1440px) {
    margin-top: 100px;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  font-family: Inter;
  font-weight: 700;
  line-height: 1.1429;
  color: var(--blue);
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
    margin-bottom: 50px;
  }
`;

export const ContainerWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 335px;

  @media (min-width: 768px) {
    width: 580px;
  }
  @media (min-width: 1440px) {
    width: 1184px;
  }
`;

export const WrapperReviewCommon = styled.div`
  height: 100%;
  /* position: relative; */
  border: 1px solid rgba(17, 17, 17, 0.7);
  border-radius: 8px;
  padding: 24px;
  max-width: 100%;
  display: flex;
  margin-right: 12px;
  margin-left: 12px;
`;

export const WrapperName = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
`;

export const AvatarReview = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const ReviewName = styled.h3`
  font-family: 'Inter';
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  color: var(--user-panel-text);
`;

export const ReviewComment = styled.p`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 14px;
  line-height: 1.3;
  margin-top: 24px;
  color: rgba(17, 17, 17, 0.7);
`;

export const LeftArrowBtn = styled.button`
  border: none;

  background-color: transparent;
  position: absolute;
  z-index: 9999;

  top: 85%;
  right: 27%;
  @media (min-width: 768px) {
    top: 105%;
    left: 42%;
  }
  @media (min-width: 1440px) {
    top: 110%;
    right: 35%;
  }
`;

export const RightArrowBtn = styled.button`
  border: none;

  background-color: transparent;

  position: absolute;
  z-index: 9999;

  top: 85%;
  left: 27%;
  @media (min-width: 768px) {
    top: 105%;
    left: 36%;
  }

  @media (min-width: 1440px) {
    top: 110%;
    left: 44%;
  }
`;

export const Svg = styled.svg`
  fill: transparent;
  stroke: #000000;
`;
