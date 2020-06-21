import React from "react";
import cn from "classnames";
import Link from "next/link";

const NavigationLink = ({ url, title, secondaryClassName, linkClassName }) => {
  return (
    <li className={cn("text-center", secondaryClassName)}>
      <Link href={url}>
        <a className={cn("", linkClassName)}>{title}</a>
      </Link>
    </li>
  );
};

export default NavigationLink;
