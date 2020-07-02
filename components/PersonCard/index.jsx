import { useState } from 'react';
import { useSpring, animated, useTransition } from 'react-spring';
import { CircularLink } from '../shared/CircularLink';

export const PersonCard = ({ data }) => {
  const [isHoverd, setIsHoverd] = useState(false);
  const backgroundFade = useSpring({
    opacity: isHoverd ? 0.3 : 0
  });
  const iconsTransition = useTransition(data.social_icons, data => data.id, {
    from: { transform: 'translateX(-30%)', opacity: 0 },
    update: {
      transform: isHoverd ? 'translateX(0)' : 'translateX(-30%)',
      opacity: isHoverd ? 1 : 0
    },
    trail: 150
  });
  console.log(iconsTransition);
  //Data destructuring
  const {
    member_name,
    member_role,
    member_img: { url: imgUrl }
  } = data;
  return (
    <div
      className="person-card w-full h-full text-center"
      onMouseEnter={() => setIsHoverd(true)}
      onMouseLeave={() => setIsHoverd(false)}
    >
      <div className="w-full person-card__image-container relative">
        <animated.div
          className="absolute w-full h-full bg-c100 left-0 top-0 pointer-events-none"
          style={backgroundFade}
        ></animated.div>
        <div className="person-card__image-container__social-icons absolute  h-full flex flex-col justify-center items-start">
          {iconsTransition.map(({ item: { url, fa_icon, id }, key, props }) => (
            <animated.div
              style={props}
              className="my-1 flex justify-center items-center"
              key={key}
            >
              <CircularLink url={url} fontClass={fa_icon} />
            </animated.div>
          ))}
        </div>
        <img
          className="person-card__image-container__img w-full object-cover"
          style={{ height: '21rem' }}
          src={imgUrl}
        />
      </div>
      <div className="person-card__info my-8">
        <h4 className="person-card__info__name text-md text-c100 font-bold leading-tighter">
          {member_name}
        </h4>
        <h6 className="person-card__info__role mt-1 text-sm text-light text-c600 leading-relaxed">
          {member_role}
        </h6>
      </div>
    </div>
  );
};
