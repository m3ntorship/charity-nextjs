import I18n from '../lib/i18n';
import '../styles/index.css';
import { charityAPI } from '../clients';
import Layout from '../components/Layout';
import Router from 'next/router';
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
  console.log(ctx);
  console.log('top', lng);
  let location;
  if (lng && lng !== 'ar' && lng !== 'en') {
    return ctx.res.writeHead(301, { Location: '/ar' }).end();
  }
  if (!lng && ctx.pathname === '/_error') {
    console.log('insied errror', ctx.pathname);
    location = `/ar/404`;
    ctx.res.writeHead(301, { Location: location }).end();
    return {};
  }
  // } else if (ctx.pathname.includes('/[lng]')) {
  //   location = ctx.pathname.replace('/[lng]', '/ar');
  //   return ctx.res.writeHead(301, { Location: location }).end();
  // }
  // } else {
  //   location = ctx.pathname.replace('/[lng]', '/ar');
  //   return ctx.res.writeHead(301, { Location: location }).end();
  //   //     console.log('insied else', location, ctx.pathname);
  // }

  // {
  //   console.log('gggggg', lng);
  //   if (ctx.pathname === '/_error') {
  //     console.log('insied errror', ctx.pathname);
  //     location = '/ar/404';
  //   } else {
  //     location = ctx.pathname.replace('/[lng]', '/ar');
  //     console.log('insied else', location, ctx.pathname);
  //     return typeof window !== 'undefined'
  //       ? Router.push(location)
  //       : ctx.res.writeHead(301, { Location: location }).end();
  //   }
  // }
  console.log('outside', lng);

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
