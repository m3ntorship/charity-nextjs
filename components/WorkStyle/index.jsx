import React from 'react';
import { useSpring } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import WorkStyleCard from '../WorkStyleCard';
import Heading from '../Heading/index';


const WorkStyle = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1
  });
  const fade = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0%)' : 'translateX(50%)'
  });



    const { title_primary, title_complementary, Cards } = data;
    return (
      <section className="work-style relative text-c600 overflow-hidden">
        <div className="container">
          <div ref={ref}>
            <Heading
              primaryTextColor="dark"
              primaryText={title_primary}
              secondaryText={title_complementary}
              primaryClassName="text-center work-style__header"
            />
          </div>
          <div className="work-style__items mx-auto showcase-row flex-col items-center md:flex-row md:items-start">
            {Cards.map((card, index) => (
              <WorkStyleCard key={index} data={card} animation={fade} />
            ))}
          </div>
        </div>
      </section>
    );
  
};

const CardLoader = () => (
  <ContentLoader
    speed={2}
    width={230}
    height={410}
    viewBox="0 0 230 410"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="117" cy="117" r="101" />
    <rect x="51" y="246" rx="0" ry="0" width="150" height="10" />
    <rect x="64" y="347" rx="0" ry="0" width="122" height="4" />
    <rect x="85" y="316" rx="0" ry="0" width="83" height="4" />
    <rect x="84" y="374" rx="0" ry="0" width="83" height="4" />
  </ContentLoader>
);

const TitleLoader = () => (
  <ContentLoader
    speed={2}
    width={250}
    height={35}
    viewBox="0 0 250 50"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="250" height="50" />
  </ContentLoader>
);

export { WorkStyle };
