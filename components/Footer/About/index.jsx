import React from 'react';
import LinkLocale from '../../shared/LinkLocale';
const About = ({ title, description, url, cta }) => {
  return (
    <div className="footer-card lg:my-0 my-6">
      <h3 className="text-c000 text-lg font-semibold mb-8">{title}</h3>
      <p>{description}</p>
      <LinkLocale href={url}>
        <a className="inline-block text-base mt-8 py-4 px-8 font-bold bg-c400 text-c000 hover:bg-c900">
          {cta}
        </a>
      </LinkLocale>
    </div>
  );
};

export default About;
