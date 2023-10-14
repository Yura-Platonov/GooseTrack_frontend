import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
  height: 812px;
  padding-inline: 20px;
  padding-bottom: 74px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;

  background-color: var(--blue);

  @media screen and (min-width: 768px) {
    min-height: 460px;
    gap: 40px;
  }
`;

export const LogoDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  gap: 2px;
  flex: 2;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex: 0;
  }
`;

export const LogoImg = styled.img`
  display: block;
  width: 142px;
  height: 142px;

  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const Title = styled.h1`
  color: var(--white);
  text-shadow: var(--logo-text-shadow);
  font-family: var(--main-font);
  font-size: 44px;
  line-height: 1.1;

  @media screen and (min-width: 768px) {
    font-size: 120px;
    line-height: 1.25;
  }
`;

export const LogoSpan = styled.span`
  font-style: italic;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  flex: 1.5;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    flex: 0;
    gap: 24px;
  }
`;

export const LoginButton = styled(Link)`
  color: var(--blue);
  font-family: 'Inter';
  font-size: 14px;
  line-height: 1.29;
  font-weight: 600;
  letter-spacing: -0.28px;

  border-radius: 16px;
  background-color: var(--white);
  box-shadow: var(--shadow-btn);
  border: 1px solid transparent;
  padding: 14px 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  transition: var(--transition);

  :hover,
  :focus {
    color: var(--white);
    background-color: transparent;
    border-color: var(--white);
    box-shadow: var(--box-shadow-hover);
  }
`;

export const SignupButton = styled(Link)`
  color: var(--white);
  text-shadow: var(--text-shadow);
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 600;
  line-height: 1.17;
  text-decoration-line: underline;

  border-radius: 16px;
  background-color: transparent;
  box-shadow: none;
  border: 1px solid transparent;
  padding: 14px 32px;

  transition: var(--transition);

  :hover,
  :focus {
    color: var(--white);
    background-color: transparent;
    border-color: var(--white);
    box-shadow: var(--box-shadow-hover);
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  > a {
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;
