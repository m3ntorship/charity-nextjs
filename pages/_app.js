import I18n from '../lib/i18n';
import '../styles/index.css';
import { charityAPI } from '../clients';
import Layout from '../components/Layout';
import Router from 'next/router';
import redirect from '../Helpers/redirect';
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
    query: { lng = 'ar' }
  }
}) => {
  let location;
  if (lng && lng !== 'ar' && lng !== 'en') {
    location = '/ar';
    return redirect({ Router, ctx, location });
  }

  let lngDict = {};
  if (lng) {
    lngDict = await import(`../locales/${lng}.json`);
  }

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
