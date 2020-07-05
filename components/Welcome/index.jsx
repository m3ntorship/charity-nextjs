import React from 'react';
import LinkNoPrefetch from '../shared/LinkNoPrefetch';
import { Fragment } from 'react';
import { animated, useSpring } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import useI18n from '../../hooks/use-i18n';
import { useDirectionalValue } from '../../hooks/useDirectionalValue';
import useMedia from '../../Helpers/useMedia';

export const Welcome = ({ data }) => {
  const isMobile = useMedia(['(min-width: 768px)'], [false], true);

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  const imageStartPosition = useDirectionalValue(-50);
  const textStartPosition = useDirectionalValue(50);
  const slideStart = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0%)' : `translateX(${imageStartPosition}%)`
  });

  const slideText = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? 'translateX(0%)'
      : isMobile
      ? 'translateY(-50%)'
      : `translateX(${textStartPosition}%)`
  });

  let {
    image: { url },
    Heading: { heading_primary, heading_secondary },
    description,
    link,
    WelcomeActions
  } = data;
  return (
    <Fragment>
      <section className="welcome py-0 text-c600 pt-16 md:pt-0" ref={ref}>
        <div
          className="welcome_wrap container grid grid-cols-1 sm:grid-cols-2 sm:gap-8
            md:grid-rows-2 md:grid-cols-12"
          style={{ gridTemplateRows: '.6fr .4fr' }}
        >
          <WelcomeImage url={url} slideStart={slideStart} />

          <WelcomeHeader
            header={heading_primary}
            title_complementary={heading_secondary}
            desc={description}
            slideText={slideText}
          />
          <animated.div
            style={slideText}
            className="col-span-1 sm:col-span-2 md:col-start-7 md:col-span-6"
          >
            <ul
              className="welcome_list sm:text-center 
              sm:flex md:flex-col md:text-left 
              lg:flex-row "
            >
              <MiniCard cardInfo={WelcomeActions} />
            </ul>

            <div className="welcome_btn w-full block text-center md:text-left">
              <WelcomeBtn link={link || {}} />
            </div>
          </animated.div>
        </div>
      </section>
    </Fragment>
  );
};

// left side card DONE

const WelcomeImage = ({ url, slideStart }) => {
  return (
    <animated.div
      className="welcome__start hidden sm:block sm:col-span-1 md:row-span-2 md:col-span-5"
      style={slideStart}
    >
      <div className="welcome__start__img h-full relative ">
        <span className="welcome__start__img--before"></span>
        <img
          src={url}
          alt="childern smiling"
          className="object-cover object-center w-full h-full"
        />
        <span
          className="welcome__start__img--after"
          style={{ transform: `scaleX(${useDirectionalValue(1)})` }}
        ></span>
        <div className="welcome__start__side absolute top-0 h-full bg-c200 w-12"></div>
      </div>
    </animated.div>
  );
};

// right side card in done

const WelcomeHeader = ({ header, title_complementary, desc, slideText }) => {
  return (
    <Fragment>
      <animated.div
        className="md:row-span-1 md:col-start-7 md:col-span-6 md:pt-32"
        style={slideText}
      >
        <h2
          className="welcome_header text-c100 leading-tighter text-large text-center md:text-left font-bold  mb-8 lg:mb-12
          md:text-xl"
        >
          {header}
          <span className="text-c200 font-hairline underline border-b-2">
            {title_complementary}
          </span>
        </h2>
        <p className="welcome_description tracking-wide  text-center md:text-left">
          {desc}
        </p>
      </animated.div>
    </Fragment>
  );
};

// loop over two cards
const MiniCard = ({ cardInfo }) => {
  return cardInfo.map(card => {
    return (
      <li key={card.id} className="welcome__list__item pl-4">
        <h3 className="welcome__list__item__title relative mb-6 sm:my-4 text-md font-bold text-c100 lg:my-10">
          {card.title}
        </h3>
        <p className="mb-8">{card.description}</p>
      </li>
    );
  });
};

// card btn
const WelcomeBtn = ({ link }) => {
  const i18n = useI18n();
  const currentLocale = i18n.activeLocale;
  return (
    <LinkNoPrefetch href={`${currentLocale}/about`}>
      <a className=" btn btn-lg bg-c300 hover:text-c100 inline-block">
        {link.text}
      </a>
    </LinkNoPrefetch>
  );
};
