import { ReviewsSlider } from '../ReviewsSlider/ReviewsSlider';
import { AuthSection } from './AuthSection/AuthSection';
import { Description } from './Description/Description';

function MainPage() {
  return (
    <>
      <AuthSection />
      <Description />
      <ReviewsSlider />
    </>
  );
}

export default MainPage;
