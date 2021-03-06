import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import LinkLocale from '../shared/LinkLocale';
import { useDirectionalValue } from '../../hooks/useDirectionalValue';

export const SecondaryBanner = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });
  const volunteeringDesc = useDirectionalValue(50);
  const volunteeringBtn = useDirectionalValue(-50);

  const fade1 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0%)' : `translateX(${volunteeringDesc}%)`
  });
  const fade2 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0%)' : `translateX(${volunteeringBtn}%)`
  });

  const {
    secondary_banner: {
      description,
      banner_button: { text, url }
    }
  } = data;
  return (
    <div ref={ref} className="volunte bg-c200 py-32">
      <div className="container flex flex-col md:flex-row items-center">
        <animated.div
          style={fade2}
          className="description text-c000 w-full md:w-3/5 text-center md:text-left"
        >
          <p className="font-bold leading-tighter">{description}</p>
        </animated.div>
        <animated.div style={fade1} className="mx-auto md:mr-0">
          <LinkLocale href={url}>
            <a className="btn btn-md bg-c300 text-c100 mt-10 md:mt-0 hover:text-c100 block">
              {text}
            </a>
          </LinkLocale>
        </animated.div>
      </div>
    </div>
  );
};
