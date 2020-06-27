import React from "react";
import useI18n from "../../../hooks/use-i18n";
const About = ({ title, description, url, cta }) => {
  const i18n = useI18n();
  const currentLocale = i18n.activeLocale;
  return (
    <div className="footer-card lg:my-0 my-6">
      <h3 className="text-c000 text-lg font-semibold mb-8">{title}</h3>
      <p>{description}</p>
      <a
        className="inline-block text-base mt-8 py-4 px-8 font-bold bg-c400 text-c000 hover:bg-c900"
        href={`${currentLocale}${url}`}
      >
        {cta}
      </a>
    </div>
  );
};

export default About;
