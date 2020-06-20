import React from 'react';
import cn from 'classnames';
import  Link  from 'next/link';

const NavigationLink = ({ url, title, secondaryClassName, linkClassName }) => {
  return (
    <li className={cn('text-center', secondaryClassName)}>
      <Link className={cn('', linkClassName)} href={url}>
        <a>{title}</a>
      </Link>
    </li>
  );
};

export default NavigationLink;
