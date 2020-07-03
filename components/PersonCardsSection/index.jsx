import { PersonCard } from '../PersonCard';
import { animated, useTransition } from 'react-spring';
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
    trail: 250
  });
  return (
    <section
      className="person-cards-section grid gird-cols-1 gap-8 md:grid-cols-4"
      ref={ref}
    >
      {cardsTransition.map(({ item, key, props }) => (
        <div className="col-span-1 md:col-span-2 lg:col-span-1" key={key}>
          <animated.div style={props}>
            <PersonCard data={item} />
          </animated.div>
        </div>
      ))}
    </section>
  );
};
