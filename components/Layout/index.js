import { Footer } from '../Footer';
import Head from 'next/head';
import HeaderNavigation from '../HeaderNavigation';
import { ContactTop } from '../ContactTop';
import { ContactInfo } from '../ContactInfo';

const Layout = ({
  children,
  footerData,
  logoData,
  socialMediasData,
  contactsData,
  pagesData,
  customPages,
  settings,
  articlesData
}) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:image"
          content="https://s3.m3ntorship.net/charity-cms-dev/Artboard_1_0900f76203.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <link
          rel="shortcut icon"
          type="image/svg"
          href="../../static/favicon/favicon.ico"
        ></link>
      </Head>
      <header>
        <ContactTop settings={settings} data={socialMediasData} />
        <HeaderNavigation
          logoData={logoData}
          contactsData={contactsData}
          pagesData={pagesData}
          settings={settings}
        />
      </header>
      <main>{children}</main>
      <ContactInfo contactData={contactsData} socialData={socialMediasData} />
      {!footerData.statusCode && (
        <Footer
          customPages={customPages}
          articlesData={articlesData}
          data={footerData}
        />
      )}
    </>
  );
};

export default Layout;
