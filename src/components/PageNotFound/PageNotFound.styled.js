import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ErrorPageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  font-family: var(--main-font);

  /* @media (min-width: 375px) { */
  /* padding: 47px; */
  /* } */

  /* @media (min-width: 768px) {
    height: 100vh;
  } */
`;

export const ErrorTitleWrap = styled.div`
  @media (max-width: 767px) {
    font-size: 100px;
    line-height: 1.5;
    padding: 0 62px;
  }
  /* @media (min-width: 768px) {
    font-size: 200px;
  } */

  font-weight: 700;
  color: #3e85f3;
  display: flex;
  align-items: center;
`;

export const GooseImage = styled.img`
  @media (max-width: 767px) {
    max-height: 214px;
  }
  /* @media (min-width: 768px) {
    max-height: 414px;
  } */
  transform: rotate(-31deg);

  margin: -31px 31px;
`;

export const ErrorParagraph = styled.p`
  /* @media (max-width: 767px) {
    padding: 0 20px;
  } */
  font-size: 14px;
  line-height: 1.28;
  color: rgba(17, 17, 17, 0.7);
  text-align: center;
`;

export const BackButton = styled(NavLink)`
  background-color: #3e85f3;
  color: white;
  padding: 16px 48px;
  border-radius: 16px;
  margin-top: 32px;
  text-shadow: var(--text-shadow);
  box-shadow: var(--box-shadow);

  &:hover {
    transition: var(--transition);
    color: black;
    box-shadow: var(--box-shadow-hover);
  }
`;
