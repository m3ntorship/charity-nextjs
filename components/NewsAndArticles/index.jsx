import React from 'react';
import Heading from '../Heading/index';
import useMedia from '../../Helpers/useMedia';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import Article from '../Article';
import LinkNoPrefetch from '../shared/LinkNoPrefetch';
import { useDirectionalValue } from '../../hooks/useDirectionalValue';

const ArticlesList = ({ articles, animationDelay }) => {
  return articles.map(
    (
      { title, link: { text, url: linkURL }, thumbnail: { url: imageURL }, id },
      index
    ) => (
      <Article
        title={title}
        linkText={text}
        linkURL={linkURL}
        imageURL={imageURL}
        key={id}
        id={id}
        index={index}
        animationDelay={animationDelay}
      />
    )
  );
};

const News = ({ data }) => {
  console.log(data);
  // //Meida query
  const isMobile = useMedia(['(min-width: 768px)'], [false], true);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  const rightContent = useDirectionalValue(-50);

  const slideHead = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? 'translateX(0%)'
      : isMobile
      ? 'translateY(-50%)'
      : `translateX(${rightContent}%)`
  });
  const slideP = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0%)' : 'translateY(-50%)',
    delay: isMobile ? 0 : 200
  });
  const btnTransform = useDirectionalValue(50);

  const slideBtn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? 'translateX(0%)'
      : isMobile
      ? 'translateY(-50%)'
      : `translateX(${btnTransform}%)`,
    delay: isMobile ? 0 : 400
  });

  const {
    description,
    heading: { heading_primary, heading_secondary },
    link: { text, url }
  } = data.newsData;
  console.log(text);
  return (
    <section className="news font-body bg-c800 mb-20 md:mb-64 pt-18 pb-1 md:pb-48 relative">
      <div className="container">
        <div className=" md:col-span-5 head-section text-center md:text-left grid grid-cols-1 md:grid-cols-12 ">
          <animated.div
            style={slideHead}
            className="md:col-span-5 text-center md:text-left"
          >
            <div ref={ref}>
              <Heading
                primaryText={`${heading_primary}`}
                secondaryText={`${heading_secondary}`}
                primaryTextColor="dark"
                primaryClassName="text-center md:text-left"
              />
            </div>
          </animated.div>

          <animated.p
            style={slideP}
            className="mb-8  news_description text-c600  md:col-span-4 text-base leading-loose"
          >
            {description}
          </animated.p>
          <animated.div style={slideBtn} className="btn-div md:col-span-3">
            <LinkNoPrefetch href={url}>
              <a className="btn btn-sm text-sm bg-c300 my-8 md:float-right md:mt-3 cursor-pointer hover:text-c100">
                {text}
              </a>
            </LinkNoPrefetch>
          </animated.div>
        </div>
      </div>
      <div className="container relative">
        <div className="articles grid grid-cols-1 mt-12 md:mt-auto md:grid-cols-3 gap-8 md:gap-4 md:absolute w-full sm:grid-cols-2 ">
          <ArticlesList articles={data.homeArticles} animationDelay={true} />
        </div>
      </div>
    </section>
  );
};

export { News, ArticlesList };
