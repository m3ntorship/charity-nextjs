import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import cn from 'classnames';

const MainContact = ({ data }) => {
  //Scroll observation
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  const fade = useSpring({
    opacity: inView ? 1 : 0
  });

  return (
    <animated.div style={fade}>
      <div ref={ref} className="contact-info flex items-center justify-end">
        {data.map(({ id, title, sub_title, icon: { url } }, index) => {
          const isLast = index === data.length - 1;

          return (
            <div
              className={cn(
                'contact-info--details flex items-center px-5 lg:px-10',
                {
                  'border-right-header': !isLast,
                  'pr-0': isLast
                }
              )}
              key={id}
            >
              <div className="icon items-center text-c500 w-8 lg:w-10">
                <img className="pr-4 w-full" src={url} alt={title} />
              </div>
              <div className="text text-xxs lg:text-sm">
                <p className="font-bold text-c100">{title}</p>
                <small className="text-c600">{sub_title}</small>
              </div>
            </div>
          );
        })}
      </div>
    </animated.div>
  );
};

export { MainContact };
