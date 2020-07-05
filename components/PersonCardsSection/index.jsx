import { PersonCard } from '../PersonCard';
import { animated, useTransition, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';
export const PersonCardsSection = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true
  });
  const cardsTransition = useTransition(data, data => data.id, {
    from: { transform: 'translateY(-50%)', opacity: 0 },
    update: {
      transform: inView ? 'translateY(0)' : 'translateY(-50%)',
      opacity: inView ? 1 : 0
    },
    trail: 200,
    config: config.gentle
  });
  return (
    <section
      className="person-cards-section grid gird-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
      ref={ref}
    >
      {cardsTransition.map(({ item, key, props }) => (
        <div key={key}>
          <animated.div className="flex justify-center" style={props}>
            <PersonCard data={item} />
          </animated.div>
        </div>
      ))}
    </section>
  );
};
