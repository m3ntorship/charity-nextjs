import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import Heading from '../Heading';
import Link from 'next/link';
import useI18n from '../../hooks/use-i18n';

const FeaturedBanner = ({ data }) => {
  const i18n = useI18n();
  const currentLocale = i18n.activeLocale;
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  const fade = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(10rem)'
  });

  const {
    text_primary,
    text_complementary,
    button_text,
    button_url,
    image_top: { url: image_url },
    image_background: { url: image_background_url }
  } = data;
  const backgroundStyle = {
    backgroundImage: `linear-gradient( rgba(41, 68, 85, 0.5), rgba(41, 68, 85, 0.7) ), url('${image_background_url}')`
  };

  return (
    <section
      ref={ref}
      className="donation-banner flex bg-cover bg-center bg-no-repeat relative py-4 md:py-8 lg:py-28  mt-12"
      style={backgroundStyle}
    >
      <div className="donation-banner__icon bg-c000 rounded-full absolute flex items-center justify-center">
        <img className="" src={image_url} alt="Charity is hope" />
      </div>
      <div className="container self-center">
        <animated.div style={fade}>
          <div className="mt-16 donation-banner__wrapper flex flex-col justify-center items-center">
            <Heading
              primaryText={text_primary}
              secondaryText={text_complementary}
              align="center"
              primaryClassName="donation-banner-desc"
            />
            <Link href={`${currentLocale}${button_url}`}>
              <a className="donation-banner__btn btn btn-lg bg-c300">
                {button_text}
              </a>
            </Link>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export { FeaturedBanner };
