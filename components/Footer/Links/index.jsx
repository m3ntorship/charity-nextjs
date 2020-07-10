import React from 'react';
import LinkLocale from '../../shared/LinkLocale';

const Links = ({ links, title }) => {
  return (
    <div className="footer-card lg:my-0 my-6">
      <h3 className="text-c000 text-lg font-semibold mb-8">{title}</h3>
      <ul className="flex flex-col flex-wrap h-48">
        {links.map(({ id, text, url }) => {
          return (
            <li key={id} className="pb-4">
              <LinkLocale href={url}>
                <a>{text}</a>
              </LinkLocale>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Links;
