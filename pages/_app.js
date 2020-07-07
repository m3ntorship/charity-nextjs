import I18n from '../lib/i18n';
import '../styles/index.css';
import { charityAPI } from '../clients';
import Layout from '../components/Layout';

function MyApp({
  Component,
  pageProps,
  contactsData,
  logoData,
  socialMediasData,
  pagesData,
  footerData,
  settings,
  lngDict,
  lng
}) {
  return (
    <I18n lngDict={lngDict} locale={lng}>
      <Layout
        footerData={footerData}
        contactsData={contactsData}
        logoData={logoData}
        socialMediasData={socialMediasData}
        pagesData={pagesData}
        settings={settings}
      >
        <Component {...pageProps} />
      </Layout>
    </I18n>
  );
}

export default MyApp;

MyApp.getInitialProps = async ({
  ctx,
  ctx: {
    query: { lng }
  }
}) => {
  if (lng !== 'ar' && lng !== 'en') {
    return ctx.res.writeHeader(303, { Location: '/ar' }).end();
  }
  const { default: lngDict = {} } = await import(`../locales/${lng}.json`);

  const getCharityAPI = charityAPI(lng);
  return Promise.all([
    getCharityAPI('/main-contacts'),
    getCharityAPI('/logo'),
    getCharityAPI('/socialmedias'),
    getCharityAPI('/pages'),
    getCharityAPI('/footer'),
    getCharityAPI('/site-settings')
  ]).then(
    ([
      { data: contactsData },
      { data: logoData },
      { data: socialMediasData },
      { data: pagesData },
      { data: footerData },
      { data: settings }
    ]) => {
      return {
        contactsData,
        logoData,
        socialMediasData,
        pagesData,
        footerData,
        settings,
        lngDict,
        lng
      };
    }
  );
};
