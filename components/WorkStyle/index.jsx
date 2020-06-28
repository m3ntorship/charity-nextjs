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
        <div className="work-style__items showcase-row flex-col items-center md:flex-row md:items-start md:justify-evenly">
          {Cards.map((card, index) => (
            <WorkStyleCard key={index} data={card} animation={fade} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { WorkStyle };
