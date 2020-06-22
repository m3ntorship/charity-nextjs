import React from "react";
import cn from "classnames";
import Link from "next/link";
import useI18n from "../../hooks/use-i18n";

const NavigationLink = ({ url, title, secondaryClassName, linkClassName }) => {
  const i18n = useI18n()
  const currentLocale = i18n.activeLocale
  return (
    <li className={cn("text-center", secondaryClassName)}>
      <Link href={`/${currentLocale}${url}`}>
        <a className={cn("", linkClassName)}>{title}</a>
      </Link>
    </li>
  );
};

export default NavigationLink;
