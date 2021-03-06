import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import LinkLocale from '../shared/LinkLocale';
import { useDirectionalValue } from '../../hooks/useDirectionalValue';

import Heading from '../Heading';
import {
  CarouselProvider,
  Slide,
  Slider,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';
const HeaderCarousel = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const headerCarouseDesc = useDirectionalValue(-50);
  const headerCarouselBtn = useDirectionalValue(50);
  const fadeScale = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0)'
  });
  const fadeLeft = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : `translateX(${headerCarouseDesc}%)`
  });
  const fadeRight = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : `translateX(${headerCarouselBtn}%)`
  });
  let numberOfSlides = data.length;
  let enableSliding = numberOfSlides > 1;
  let enableButtons = numberOfSlides > 1;
  return (
    <section className="slider py-0 bg-cover bg-center relative" ref={ref}>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        isIntrinsicHeight={true}
        totalSlides={numberOfSlides}
        dragEnabled={enableSliding}
        touchEnabled={enableSliding}
        className="h-full header__carousel"
      >
        <Slider className="h-full" style={{ transform: `scaleX(1)` }}>
          {data.map((slide, index) => {
            let {
              heading: { heading_primary, heading_secondary },
              intro,
              link: { url, text },
              image: { url: image_url }
            } = slide;
            return (
              <Slide key={slide.id} index={{ index }} className="h-full">
                <div
                  className="header__carousel__slide h-full flex items-center justify-center bg-cover"
                  style={{
                    background: `linear-gradient(0deg, #203b4cb5, #203b4cb5), url(${image_url}) no-repeat center/cover`,
                    transform: `scaleX(${useDirectionalValue(1)})`
                  }}
                >
                  <div className="header__carouser__slide__textContent text text-center text-c000">
                    <animated.p
                      style={fadeLeft}
                      className="header__carouser__slide__intro italic tracking-wider font-hairline"
                    >
                      {intro}
                    </animated.p>
                    <animated.div
                      style={fadeScale}
                      className="main flex items-center justify-center"
                    >
                      <Heading
                        primaryText={`${heading_primary}  `}
                        secondaryText={heading_secondary}
                        secondaryTextColor="yellow"
                        size="xxxl"
                        align="center"
                      />
                    </animated.div>
                    <animated.div style={fadeRight}>
                      <LinkLocale href={url}>
                        <a className="mainHeader_fix_mb btn btn-md bg-c200 text-c000 inline-block">
                          {text}
                        </a>
                      </LinkLocale>
                    </animated.div>
                  </div>
                </div>
              </Slide>
            );
          })}
        </Slider>
        {enableButtons && (
          <div className="header__carousel__arrows absolute w-full flex text-c000 border-c000 justify-between px-16">
            <ButtonBack className="rounded-full">
              <div class="justify-center items-center flex rounded-full border-solid  p-4 border-2 cursor-pointer">
                <i
                  className={`fas fa-arrow-${useDirectionalValue(
                    'left',
                    'direction'
                  )}`}
                ></i>
              </div>
            </ButtonBack>
            <ButtonNext className="rounded-full  ">
              <div class="justify-center items-center flex rounded-full border-solid  p-4 border-2 cursor-pointer">
                <i
                  className={`fas fa-arrow-${useDirectionalValue(
                    'right',
                    'direction'
                  )}`}
                ></i>
              </div>
            </ButtonNext>
          </div>
        )}
      </CarouselProvider>
    </section>
  );
};

export { HeaderCarousel };
