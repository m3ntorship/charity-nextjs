import React from "react";
import Link from "next/link";
import useI18n from "../../../hooks/use-i18n";

const Links = ({ links, title }) => {
  const i18n = useI18n();
  const currentLocale = i18n.activeLocale;
  return (
    <div className="footer-card lg:my-0 my-6">
      <h3 className="text-c000 text-lg font-semibold mb-8">{title}</h3>
      <ul className="flex flex-col flex-wrap h-48">
        {links.map(({ id, text, url }) => {
          return (
            <li key={id} className="pb-4">
              <Link href={`/${currentLocale}${url}`} prefetch = {false}>
                <a>{text}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Links;
