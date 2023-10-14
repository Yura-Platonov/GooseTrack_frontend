import logo1x from '../../../images/side-head/GOOSE1.png';

import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import {
  Container,
  LogoDiv,
  Title,
  LogoSpan,
  LogoImg,
  Nav,
  LoginButton,
  SignupButton,
  Wrapper,
} from './AuthSection.styled';

export const AuthSection = () => {
  return (
    <Container>
      <LogoDiv>
        <Wrapper>
          <Link to="/">
            <LogoImg src={`${logo1x}`} srcSet={`${logo1x} 1x`} alt="Logo" />
          </Link>
        </Wrapper>
        <Title>
          G<LogoSpan>oo</LogoSpan>seTrack
        </Title>
      </LogoDiv>
      <Nav>
        <LoginButton to="/login">
          Log in <FiLogIn size={18} />
        </LoginButton>
        <SignupButton to="/register">Sign up</SignupButton>
      </Nav>
    </Container>
  );
};
