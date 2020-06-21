import React from "react";
import cn from "classnames";

export const ContactInfo = ({ socialData, contactData }) => {
  return (
    <section className="contact-section py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-around items-center mx-0 text-c000">
          <Socialmedia socialData={socialData} />
          <Contact contactData={contactData} />
        </div>
      </div>
    </section>
  );
};

const Socialmedia = ({ socialData }) => {
  return (
    <div className="contact-section__social flex justify-start text-xxs mb-6 md:mb-0">
      {socialData.map(({ _id, url, fontawesome_icons }) => (
        <div
          key={_id}
          className="contact-section__social-icon hover:bg-c200 ml-0"
        >
          <a
            className="full-width-click"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={fontawesome_icons}></i>
          </a>
        </div>
      ))}
    </div>
  );
};

const Contact = ({ contactData }) => {
  return (
    <div className="contact-section__contacts flex flex-no-wrap flex-col lg:flex-row justify-end text-sm mx-6">
      {contactData.map(
        (
          {
            _id,
            title,
            url,
            sub_title,
            icon: { url: iconUrl, name: IconName },
          },
          index
        ) => {
          const isLast = index === contactData.length - 1;
          return (
            <div
              key={_id}
              className={cn(
                "contact",
                "my-1",
                "lg:my-0",
                "w-64",
                "mt-2",
                "md:mt-0",
                {
                  "border-right": !isLast,
                }
              )}
            >
              <div className="contact-icon">
                <img className="h-auto" src={iconUrl} alt={IconName} />
              </div>
              <div className="information">
                <a
                  className="block"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {title}
                </a>
                <small className="information-small leading-normal">
                  {sub_title}
                </small>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
