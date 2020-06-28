import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { prefix, numberFormat } from '../../Helpers/NumbersFormat';
import useI18n from '../../hooks/use-i18n';
const Number = ({ number, title }) => {
  let intValue = parseInt(numberFormat(number));
  const [numbersRef, numbersInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  let countTo = useSpring({
    from: { value: numbersInView ? 1 : 0 },
    to: { value: numbersInView ? intValue : 0 },
    config: { delay: 300, easing: 3 }
  });
  return (
    <div className="statistics-content__item justify-end flex flex-col w-1/2 md:w-1/4">
      <div ref={numbersRef} className="flex flex-col items-center my-3 md:my-0">
        <div>
          <animated.span className="statistics-content__item__value text-center text-c200 text-xl font-light leading-none">
            {countTo.value.interpolate(value => Math.floor(value))}
          </animated.span>
          <span className="statistics-content__item__str text-center text-c200 text-xl font-light leading-none">
            {prefix(number)}
          </span>
        </div>
        <h3 className="statistics-content__item__name capitalize text-c100 text-md whitespace-no-wrap leading-none mt-5">
          {title}
        </h3>
      </div>
    </div>
  );
};

const Numbers = ({ data }) => {
  const i18n = useI18n();
  const numbersText = `${i18n.t('numbersText')}`;
  const {
    speaking_numbers,
    image_background: { url }
  } = data;
  const numbersList = speaking_numbers.map(item => {
    return (
      <Number
        title={item.title}
        number={item.number}
        string={item.string}
        key={item.id}
      />
    );
  });
  return (
    <section className="numbers z-0 relative bg-c800 pb-0">
      <div className="container">
        <div className="statistics-wrapper">
          <div
            className="statistics-wrapper__image bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${url})`
            }}
          ></div>
          <div className="statistics-numbers">
            <div className="statistics-numbers__speak relative text-center">
              <p className="statistics-numbers__speak__text p-4 absolute tracking-wide text-center capitalize text-lg font-body font-light text-c000 bg-c400">
                {numbersText}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="statistics-content bg-c000">
        <div className="container">
          <div className="statistics-content__list bg-c800 flex text-center flex-wrap py-10 md:py-16">
            {numbersList}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Numbers };
