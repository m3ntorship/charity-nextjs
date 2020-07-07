import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Slide,
  Slider
} from 'pure-react-carousel';
import React from 'react';
import Heading from '../Heading';
import { useDirectionalValue } from '../../hooks/useDirectionalValue';

const Testimonials = ({ data, loading, error }) => {
  let {
    Description,
    Heading: { heading_primary, heading_secondary },
    testimonials,
    background: { url: backgroundUrl }
  } = data;

  let numbersOfSlides = testimonials.length;
  return (
    <section
      className="feedback relative"
      style={{
        background: `linear-gradient(0deg, #203b4cb5, #203b4cb5), url(${backgroundUrl}) no-repeat center/cover`
      }}
    >
      <div className="container">
        <FeedBackHeader
          heading_primary={heading_primary}
          heading_secondary={heading_secondary}
          description={Description}
        />
        <CarouselProvider
          naturalSlideWidth={170}
          naturalSlideHeight={100}
          totalSlides={numbersOfSlides}
          className="feedback__carousel grid absolute container"
          isIntrinsicHeight={true}
        >
          <Slider
            className="sliderWrapper feedback__carousel__quote text-c100"
            style={{ transform: `scaleX(1)` }}
          >
            {testimonials.map(
              (
                {
                  id,
                  body,
                  author,
                  link: { url: linkUrl, text: linkText },
                  image: { url: imageUrl }
                },
                index
              ) => {
                return (
                  <Slide key={id} index={{ index }}>
                    <figure
                      className="text-c100 bg-c000 flex flex-col items-center px-12"
                      style={{ transform: `scaleX(${useDirectionalValue(1)})` }}
                    >
                      <img
                        className="feedback__carousel__avatar"
                        src={imageUrl}
                        alt={author}
                        style={{ objectFit: 'cover' }}
                      />
                      <blockquote className="feedback__quote__text mt-8 mb-4 text-center">
                        <p className="mb-8 font-hairline">{body}</p>
                        <h4 className="text-c200 font-medium text-md font-semibold mb-2">
                          {author}
                        </h4>
                        <p className="leading-normal text-c600 text-base">
                          <a
                            target="_blank"
                            rel="noreferrer noopener"
                            href={linkUrl}
                          >
                            {linkText}
                          </a>
                        </p>
                      </blockquote>
                    </figure>
                  </Slide>
                );
              }
            )}
          </Slider>
          <div className="feedback__carousel__back-arrow feedback__carousel__arrow lg:bg-c800 flex items-center justify-center text-lg">
            <ButtonBack className="text-c100  rounded-full">
              <div className="justify-center items-center flex rounded-full border-c100 border-solid p-4 border-2 cursor-pointer">
                <i
                  className={`fas fa-arrow-${useDirectionalValue(
                    'left',
                    'direction'
                  )}`}
                ></i>
              </div>
            </ButtonBack>
          </div>
          <div className="feedback__carousel__forward-arrow feedback__carousel__arrow lg:bg-c800 flex items-center justify-center text-lg">
            <ButtonNext className="text-c100  rounded-full">
              <div className="justify-center items-center flex rounded-full border-c100 border-solid p-4 border-2 cursor-pointer">
                <i
                  className={`fas fa-arrow-${useDirectionalValue(
                    'right',
                    'direction'
                  )}`}
                ></i>
              </div>
            </ButtonNext>
          </div>
          <div className="feedback__carousel__picker flex items-center justify-center text-lg lg:bg-c800">
            <DotGroup className="testimonials_dots_group" />
          </div>
        </CarouselProvider>
      </div>
    </section>
  );
};

const FeedBackHeader = ({
  heading_primary,
  heading_secondary,
  description
}) => {
  return (
    <div className="feedback__heading">
      <div className="grid grid-cols-3 ">
        <Heading
          primaryText={heading_primary}
          secondaryText={heading_secondary}
          primaryClassName="col-span-3 text-center lg:col-span-1 lg:text-left"
        />
        <div className="text-c000 font-hairline text-center col-span-3 lg:col-span-1 col-start-1 lg:col-start-3 lg:text-left">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export { Testimonials };
