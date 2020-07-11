import LinkNoPrefetch from '../shared/LinkNoPrefetch';
import { useSpring, animated } from 'react-spring';
import useI18n from '../../hooks/use-i18n';
import LanguageSwitcher from '../LanguageSwitcher';

const ContactTop = ({ data, settings }) => {
  const i18n = useI18n();
  const followUs = `${i18n.t('followus.follow')}`;
  const welcome = `${i18n.t('welcome.message')}`;
  const lovims = `${i18n.t('welcome.lovims')}`;
  const platform = `${i18n.t('welcome.platform')}`;
  const donationBtnText = `${i18n.t('donationButton.text')}`;
  const donationBtnUrl = `${i18n.t('donationButton.url')}`;

  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 }
  });
  if (data) {
    return (
      <animated.div style={fade}>
        <section className="contact-top p-0 items-center bg-c100 hidden md:flex">
          <div className="container px-20 w-full max-w-full md:flex justify-between">
            <div className="welcome-text text-sm">
              {welcome}{' '}
              <span className="text-c300 underline italic">{lovims}</span>{' '}
              {platform}
            </div>
            {}
            <ul className="flex languag__selector_wrapper">
              {!settings.statusCode && <LanguageSwitcher />}
            </ul>
            <div className="social flex text-sm">
              <div>{followUs}</div>
              <div className="ml-1 flex items-center">
                <ul className="inline-block ">
                  {!data.statusCode &&
                    data.map(({ id, url, fontawesome_icons }) => {
                      return (
                        <li key={id} className="inline px-3 hover:text-c000">
                          <a href={url}>
                            <i className={fontawesome_icons}></i>
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
          <LinkNoPrefetch href={donationBtnUrl}>
            <button className="btn w-2/12 h-full text-c100 text-sm font-bold bg-c300">
              {donationBtnText}
            </button>
          </LinkNoPrefetch>
        </section>
      </animated.div>
    );
  }
  return 'Generic Error';
};
export { ContactTop };
