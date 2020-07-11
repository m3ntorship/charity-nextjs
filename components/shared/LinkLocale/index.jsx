import React from 'react';
import Link from 'next/link';
import useI18n from '../../../hooks/use-i18n';

const LinkLocale = ({ children, ...props }) => {
  const { activeLocale } = useI18n();
  const localized = Object.assign({}, props, {
    href: `/[lng]${props.href}`,
    as: props.as
      ? `/${activeLocale}${props.as}`
      : `/${activeLocale}${props.href}`
  });
  return <Link {...localized}>{children}</Link>;
};

export default LinkLocale;
