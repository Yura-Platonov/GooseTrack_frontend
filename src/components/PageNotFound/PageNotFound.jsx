import GooseRocketSvg from '../../assets/goose-rocket-404.svg';
import {
  BackButton,
  ErrorPageContainer,
  ErrorParagraph,
  ErrorTitleWrap,
  GooseImage,
} from './PageNotFound.styled';

function PageNotFound() {
  return (
    <ErrorPageContainer>
      <ErrorTitleWrap>
        <h1>4</h1>
        <GooseImage src={GooseRocketSvg} alt="Goose on a Rocket" />
        <h1>4</h1>
      </ErrorTitleWrap>
      <ErrorParagraph>
        We&apos;re sorry, the page you requested could not be found. Please go
        back to the homepage.
      </ErrorParagraph>
      <BackButton to="/">Back to home</BackButton>
    </ErrorPageContainer>
  );
}

export default PageNotFound;
