import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ErrorPageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  font-family: var(--main-font);
`;

export const ErrorTitleWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleNumber = styled.h1`
  @media (max-width: 767px) {
    font-size: 100px;
    line-height: 1.5;
  }
  @media (min-width: 768px) {
    font-size: 200px;
  }

  font-weight: 700;
  color: rgba(62, 133, 243, 1);
`;

export const GooseImage = styled.img`
  @media (max-width: 767px) {
    max-height: 188px;
    margin: -200px 15px;
  }
  @media (min-width: 768px) {
    max-height: 414px;
    margin: -200px 21px;
  }

  transform: rotate(-31deg);
`;

export const ErrorParagraph = styled.p`
  @media (max-width: 767px) {
    max-width: 281px;
    margin-top: 28px;
  }
  @media (min-width: 768px) {
    max-width: 387px;
    margin-top: 80px;
  }
  font-size: 14px;
  line-height: 1.28;
  color: rgba(17, 17, 17, 0.7);
  text-align: center;
`;

export const BackButton = styled(NavLink)`
  @media (max-width: 767px) {
    margin-top: 24px;
    font-size: 14px;
  }
  @media (min-width: 768px) {
    margin-top: 32px;
    font-size: 18px;
  }
  background-color: #3e85f3;
  color: white;
  padding: 16px 48px;
  border-radius: 16px;
  text-shadow: var(--text-shadow);
  box-shadow: var(--box-shadow);

  &:hover {
    transition: var(--transition);
    color: black;
    box-shadow: var(--box-shadow-hover);
  }
`;
