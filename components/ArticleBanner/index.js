import React from 'react';
import { useInView } from 'react-intersection-observer';
import NavigationLink from '../NavigationLink';
import { useSpring, animated } from 'react-spring';
import Heading from '../Heading';
import useI18n from '../../hooks/use-i18n';

const Banner = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  //Animation

  const fade = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0%)' : 'translateY(-25%)'
  });

  const i18n = useI18n();
  const home = `${i18n.t('homePage.text')}`;
  const {
    Banner: { image_bg, title, sub_title },
    link: { text: pageName, url: pageUrl }
  } = data;
  return (
    <section
      className="articles__banner__wrapper py-0 bg-cover bg-center h-64"
      ref={ref}
    >
      <div
        className=" articles__banner grid h-full"
        style={{
          background: `linear-gradient(0deg, #203b4cb5, #203b4cb5), url(${image_bg[0].url}) no-repeat center/cover`
        }}
      >
        <animated.div
          style={fade}
          className="text text-center self-end text-c000"
        >
          <div className="main flex items-center justify-center">
            <Heading
              primaryText={title}
              size="xxl"
              align="center"
              primaryClassName="heading_banner text-banner"
            />
          </div>
          <div className="flex items-center justify-center ">
            <p className="text-c000 text-md article__banner_desc font-light">
              {sub_title}
            </p>
          </div>
        </animated.div>
        <div className=" articles__banner__links self-end text-center">
          <ul className=" nav__ul__items inline-flex justify-around relative px-10 bg-c200 text-c000 items-center">
            <NavigationLink
              title={home}
              url="/"
              key="1"
              linkClassName="p-7 block font-bold"
            />
            <div className="nav__ul__items__dot w-2 h-2 bg-c000 rounded-full"></div>
            <NavigationLink
              title={pageName}
              url={pageUrl}
              key="2"
              linkClassName="p-7 block font-bold"
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Banner };
