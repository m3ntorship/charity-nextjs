import React from 'react';
import useI18n from '../../hooks/use-i18n';
import Heading from '../Heading';
import { FeaturedCause } from '../FeaturedCause';
import { parseISO, format } from 'date-fns';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import LinkLocale from '../shared/LinkLocale';
import { useDirectionalValue } from '../../hooks/useDirectionalValue';

// Function to get add dates needed
function getDate(myDate) {
  const theDate = parseISO(myDate);

  return {
    time: format(theDate, 'hh:mm a').toLowerCase(),
    day: format(theDate, 'dd'),
    month: format(theDate, 'MMM'),
    year: format(theDate, 'yyyy')
  };
}

const Event = ({ data }) => {
  if (data) {
    const {
      id,
      title,
      user: { username },
      address,
      date,
      image: { url, name }
    } = data;
    return (
      <div key={id} className="event-card-wrapper flex mb-4 lg:mb-0">
        <div className="event-card-wrapper_image w-1/3 sm:w-full lg:w-1/4 ">
          <img src={url} alt={name} />
        </div>
        <div className="event-card-wrapper__details relative self-center p-6 pl-16 sm:pl-6 lg:pl-16 flex flex-col justify-between h-full w-2/3 md:w-3/4 lg:py-10">
          <div className="event-card-wrapper__timing text-c200 flex items-center leading-none">
            <span className="tracking-wide">{username}</span>
            &nbsp; &nbsp;
            <span>{getDate(date).time}</span>
          </div>
          <LinkLocale href={`/events/[id]`} as={`/events/${id}`}>
            <a className="event__title">
              <div className="event-card-wrapper__topic">
                <p className="text-c100 font-bold">{title}</p>
              </div>
            </a>
          </LinkLocale>

          <div className="event-card-wrapper__location">
            <p className="text-c600 text-base flex items-center leading-none">
              {address}
            </p>
          </div>
          <div className="event-card-wrapper__date">
            <div className="event_date">
              <span> {getDate(date).day} </span>
              <span> {getDate(date).month} </span>
              <span> {getDate(date).year} </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const Events = ({ data, slideStart }) => {
  return (
    <animated.div
      className="col-start-1 articles-component col-end-8 flex flex-col justify-between lg:pr-8"
      style={slideStart}
    >
      {data.map(eventData => {
        return <Event data={eventData} key={eventData.id} />;
      })}
    </animated.div>
  );
};

const UpcomingEventsText = ({ data, slideTop }) => {
  const primaryText = data.Heading[0].heading_primary;
  const secondaryText = data.Heading[0].heading_secondary;
  return (
    <animated.div className="upcoming-events " style={slideTop}>
      <Heading
        primaryText={primaryText}
        secondaryText={secondaryText}
        primaryTextColor="dark"
        primaryClassName="upcoming-events__header"
      />
      <p className="upcoming-events_description text-c600">
        {data.description}
      </p>
    </animated.div>
  );
};

const UpcomingEventsSection = ({ data, cardData, lng, lngDict }) => {
  //Scroll observation
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  const leftContent = useDirectionalValue(-50);
  //Animation
  const slideTop = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0%)' : 'translateY(-50%)'
  });

  const slideStart = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0%)' : `translateX(${leftContent}%)`,
    delay: 200
  });

  const fade = useSpring({
    opacity: inView ? 1 : 0,
    delay: 600
  });

  //Data Error Handling

  //Main component
  const i18n = useI18n();
  const urgentCuase = `${i18n.t('causes.urgentCause')}`;
  const { upcoming_events } = data;
  return (
    <section className="upcoming-events-section">
      <div className="upcoming-events-section__container lg:grid gap-8 grid-cols-12 container">
        <div className="mb-8 col-start-1 col-end-8 pr-8" ref={ref}>
          <UpcomingEventsText data={data} slideTop={slideTop} />
        </div>
        <Events data={upcoming_events} slideStart={slideStart} />
        <animated.div
          className="vertical-text  text-c100 lg:text-c800  font-hairline text-xxl "
          style={fade}
        >
          {urgentCuase}
        </animated.div>
        <div className=" col-start-8 col-end-13 row-start-1 row-end-3 h-full w-full flex">
          <FeaturedCause data={cardData} lng={lng} lngDict={lngDict} />
        </div>
      </div>
    </section>
  );
};
export { UpcomingEventsSection, Event };
