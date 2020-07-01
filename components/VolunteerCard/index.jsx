import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
export const VolunteerCard = ({ data }) => {
  const { icon_links, name, role } = data;
  const [isHoverd, setIsHoverd] = useState(false);
  const backgroundFade = useSpring({
    opacity: isHoverd ? 0.3 : 0
  });
  const iconFadeIn = useSpring({
    opacity: isHoverd ? 1 : 0
  });
  return (
    <div
      className="volunteer-card w-full h-full text-center"
      onMouseEnter={() => setIsHoverd(true)}
      onMouseLeave={() => setIsHoverd(false)}
    >
      <div className="w-full volunteer-card__image-container relative">
        <animated.div
          className="absolute w-full h-full bg-c100 left-0 top-0 pointer-events-none"
          style={backgroundFade}
        ></animated.div>
        <div className="volunteer-card__image-container__social-icons absolute  h-full flex flex-col justify-center items-start transform -translate-x-1/2">
          {icon_links.map(({ icon_url, icon_font }, index) => (
            <animated.div
              style={iconFadeIn}
              className="my-1 flex justify-center items-center"
            >
              <CircularLink url={icon_url} fontClass={icon_font} key={index} />
            </animated.div>
          ))}
        </div>
        <img
          className="volunteer-card__image-container__img w-full object-cover"
          style={{ height: '21rem' }}
          src="https://s3.m3ntorship.net/charity-cms-dev/small_children_5a459dcc62_5bedae5d8e.jpeg"
        />
      </div>
      <div className="volunteer-card__info my-8">
        <h4 className="volunteer-card__info__name text-md text-c100 font-bold leading-tighter">
          {name}
        </h4>
        <h6 className="volunteer-card__info__role mt-1 text-sm text-light text-c600 leading-relaxed">
          {role}
        </h6>
      </div>
    </div>
  );
};

const CircularLink = ({ url, fontClass }) => {
  return (
    <a
      href={url}
      className="rounded-full p-5 text-c100 bg-c000 hover:bg-c200 hover:text-c000"
    >
      <div className="w-3 h-3 flex justify-center items-center">
        <i className={`fab fa-${fontClass}`}></i>
      </div>
    </a>
  );
};
