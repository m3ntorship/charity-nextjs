import React from 'react';
import useI18n from '../../../hooks/use-i18n';

const Links = ({ title, description }) => {
  const i18n = useI18n();
  const emailPlaceHolder = `${i18n.t('email.placeholder')}`;

  return (
    <div className="footer-card lg:my-0 my-6">
      <h3 className="text-c000 text-lg font-semibold mb-8">{title}</h3>
      <p className="mb-8">{description}</p>
      <div>
        <form action="">
          <div className="flex justify-between bg-c900 py-4 px-6">
            <input
              className="bg-c900 w-8/12 flex-grow newsletter_email_input "
              type="email"
              name=""
              id=""
              placeholder={emailPlaceHolder}
            />
            <button className="w-8" type="submit">
              <span className="newsLetter_send_icon">
                <i className="fab fa-telegram-plane"></i>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Links;
