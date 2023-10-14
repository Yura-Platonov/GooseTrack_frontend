import logo1x from '../../../images/AuthSection/logo_goose1x.png';
import logo2x from '../../../images/AuthSection/logo_goose2x.png';

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
            <LogoImg
              src={`${logo1x}`}
              srcSet={`${logo1x} 1x, ${logo2x} 2x`}
              alt="Logo"
            />
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
