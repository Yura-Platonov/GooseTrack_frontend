import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import avatar from '../../images/ReviewSlider/avatarReview.jpg';
import leftArrow from '../../images/ReviewSlider/sprite-arrow.svg';
import rightArrow from '../../images/ReviewSlider/sprite-arrow.svg';

// import reviews from '../../components/ReviewsSlider/reviews.json';
import {
  AvatarReview,
  ContainerWrapper,
  LeftArrowBtn,
  ReviewComment,
  ReviewName,
  RightArrowBtn,
  Section,
  Svg,
  Title,
  WrapperName,
  WrapperRatingName,
  WrapperReviewCommon,
} from './ReviewsSlider.styled';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllReviewsThunk } from '../../redux/feedback/operationsF';
import { Rating, Star } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';
import { useState } from 'react';

function LeftArrow(props) {
  const { onClick } = props;

  return (
    <LeftArrowBtn onClick={onClick}>
      <Svg width="50" height="8">
        <use href={`${rightArrow}#right-arrow`} />
      </Svg>
    </LeftArrowBtn>
  );
}

function RightArrow(props) {
  const { onClick } = props;

  return (
    <RightArrowBtn onClick={onClick}>
      <Svg width="50" height="8">
        <use href={`${leftArrow}#left-arrow`} />
      </Svg>
    </RightArrowBtn>
  );
}

export const ReviewsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
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

  const myStyles = {
    itemShapes: Star,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9',
  };

  const dispatch = useDispatch();
  const reviewData = useSelector((state) => state.reviews.reviews);
  // console.log(reviewData);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    dispatch(getAllReviewsThunk());
  }, [dispatch]);

  return (
    <>
      <Section>
        <Title> REVIEWS </Title>
        <ContainerWrapper>
          <Slider {...settings}>
            {reviewData.map((review) => (
              <div key={review.id + review.name}>
                <WrapperReviewCommon>
                  <WrapperName>
                    <AvatarReview src={review.avatar} alt={review.name} />

                    <WrapperRatingName>
                      <ReviewName>{review.name}</ReviewName>
                      <Rating
                        value={review.stars}
                        onChange={(newRating) => setRating(newRating)}
                        itemStyles={myStyles}
                        style={{ maxWidth: 110 }}
                      />
                      <ReviewComment> {review.comment}</ReviewComment>
                    </WrapperRatingName>
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
