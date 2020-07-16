import React from 'react';
import Links from './Links/index';
import Articles from './Articles/index';
import About from './About/index';
import Newsletter from './NewsLetter/index';
import CustomPagesLinks from '../CustomPagesLinks';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { useDirectionalValue } from '../../hooks/useDirectionalValue';

const Footer = ({ data, customPages }) => {
  const [refLeft, inViewLeft] = useInView({
    triggerOnce: true
  });
  const [refRight, inViewRight] = useInView({ triggerOnce: true });
  const leftContent = useDirectionalValue(-50);
  const rightContent = useDirectionalValue(50);

  const fadeLeft = useSpring({
    opacity: inViewLeft ? 1 : 0,
    transform: inViewLeft ? 'translateX(0%)' : `translateX(${leftContent}%)`
  });

  const fadeRight = useSpring({
    opacity: inViewRight ? 1 : 0,
    transform: inViewRight ? 'translateX(0%)' : `translateX(${rightContent}%)`
  });

  if (data) {
    const {
      About_title,
      about_description,
      about_button: { url: about_button_url, text: about_button_text },
      news_title,
      newsletter_description,
      newsletter_title,
      articles,
      links,
      Disclaimer,
      links_title
    } = data;
    return (
      <footer className="footer bg-c100 text-c700">
        <div className="container w-9/12 grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 py-16 text-sm font-hairline">
          <div className="ref-container" ref={refLeft}>
            <animated.div
              style={fadeLeft}
              className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-8"
            >
              <About
                title={About_title}
                description={about_description}
                Right
                url={about_button_url}
                cta={about_button_text}
              />
              <Articles title={news_title} articles={articles} />
            </animated.div>
          </div>
          <div className="ref-container" ref={refRight}>
            <animated.div
              style={fadeRight}
              className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-8"
            >
              <Links title={links_title} links={links} />
              <Newsletter
                title={newsletter_title}
                description={newsletter_description}
              />
              {!customPages.statusCode && (
                <CustomPagesLinks data={customPages} />
              )}
            </animated.div>
          </div>
        </div>

        <div>
          <p className="text-center py-8 text-sm border-t border-c700 bg-c100">
            {Disclaimer}
          </p>
        </div>
      </footer>
    );
  }
  return 'generic error';
};

export { Footer };
