import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import useI18n from '../../hooks/use-i18n';
import LinkNoPrefetch from '../shared/LinkNoPrefetch';

export const VolunteeringBanner = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });
  const fade1 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0%)' : 'translateX(50%)'
  });
  const fade2 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0%)' : 'translateX(-50%)'
  });

  const {
    secondary_banner: {
      description,
      banner_button: { text, url }
    }
  } = data;
  const i18n = useI18n();
  const currentLocale = i18n.activeLocale;
  return (
    <div ref={ref} className="volunte bg-c200 py-32">
      <div className="container flex flex-col md:flex-row items-center">
        <animated.div
          style={fade2}
          className="description text-c000 w-3/5 text-center md:text-left"
        >
          <p className="font-bold leading-tighter">{description}</p>
        </animated.div>
        <animated.div style={fade1} className="mx-auto md:mr-0">
          {/* <button className="btn btn-md bg-c300 text-c100 mt-10 md:mt-0">
            {' '}
            <a href={url}>{text}</a>{' '}
          </button> */}
          <LinkNoPrefetch href={`/${currentLocale}${url}`}>
            <a className="btn btn-md bg-c300 text-c100 mt-10 md:mt-0 hover:text-c100 ">{text}</a>
          </LinkNoPrefetch>
        </animated.div>
      </div>
    </div>
  );
};
