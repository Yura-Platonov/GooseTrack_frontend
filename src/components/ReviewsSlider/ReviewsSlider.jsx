import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import avatar from '../../images/ReviewSlider/avatarReview.jpg';

import reviews from '../../components/ReviewsSlider/reviews.json';
import {
  AvatarReview,
  ContainerWrapper,
  ReviewComment,
  ReviewName,
  Section,
  Title,
  WrapperName,
  WrapperReviewCommon,
} from './ReviewsSlider.styled';

export const ReviewsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Section>
        <Title> REVIEWS </Title>
        <ContainerWrapper>
          <Slider {...settings}>
            {reviews.map((review) => (
              <div key={review.id}>
                <WrapperReviewCommon>
                  <WrapperName>
                    <AvatarReview src={avatar} alt={review.name} />

                    <div>
                      <ReviewName>{review.name}</ReviewName>
                      <div>Rating</div>
                    </div>
                  </WrapperName>
                  <ReviewComment> {review.comment}</ReviewComment>
                </WrapperReviewCommon>
              </div>
            ))}
          </Slider>
        </ContainerWrapper>
      </Section>
    </>
  );
};
