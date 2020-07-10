import React from 'react';
import cn from 'classnames';
import LinkLocale from '../shared/LinkLocale';

const NavigationLink = ({ url, title, secondaryClassName, linkClassName }) => {
  return (
    <li className={cn('text-center', secondaryClassName)}>
      <LinkLocale href={url}>
        <a className={cn('', linkClassName)}>{title}</a>
      </LinkLocale>
    </li>
  );
};

export default NavigationLink;
