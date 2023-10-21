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
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
              <div key={review.id + review.name}>
                <WrapperReviewCommon>
                  <WrapperName>
                    <AvatarReview src={avatar} alt={review.name} />

                    <div>
                      <ReviewName>{review.name}</ReviewName>
                      <div>Rating</div>
                      <ReviewComment> {review.comment}</ReviewComment>
                    </div>
                  </WrapperName>
                </WrapperReviewCommon>
              </div>
            ))}
          </Slider>
        </ContainerWrapper>
      </Section>
    </>
  );
};
