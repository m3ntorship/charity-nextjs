import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { timeElapsed } from '../../../Helpers/Helpers';
import useI18n from '../../../hooks/use-i18n';
import Link from 'next/link';

export const ListItemWithThumbnail = ({ data }) => {
  // Finding the active Locale
  const i18n = useI18n();
  const currentLocale = i18n.activeLocale;

  //Animation
  const [isHover, setHover] = useState();
  const hovered = useSpring({
    transform: isHover ? 'translateX(15px)' : 'translateX(0px)'
  });

  //Destructring Data
  const {
    id,
    createdAt,
    thumbnail: { url: imgUrl, alternativeText },
    description
  } = data;

  return (
    <Link href={`/${currentLocale}/articles/${id}`}>
      <animated.a
        className="listItem cursor-pointer flex flex-col"
        style={hovered}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <article className="flex">
          <div className="listItem__image-container w-1/3">
            <img
              className="listItem__image w-full h-full"
              src={imgUrl}
              alt={alternativeText}
            />
          </div>
          <div className="pl-4 flex flex-col w-2/3">
            <p className="text-c200 text-sm leading-loose mb-1">
              {timeElapsed(createdAt)}
            </p>
            <p className="font-bold text-c100 leading-relaxed">{description}</p>
          </div>
        </article>
      </animated.a>
    </Link>
  );
};
