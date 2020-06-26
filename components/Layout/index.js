// import Header from "../Header";
import { Footer } from "../Footer";
import Head from "next/head";
import HeaderTop from "../HeaderTop";
import HeaderNavigation from "../HeaderNavigation";
import useI18n from "../../hooks/use-i18n";

const Layout = ({
  children,
  footerData,
  logoData,
  socialMediasData,
  contactsData,
  pagesData,
}) => {
  const i18n = useI18n();
  const currentLocale = i18n.activeLocale;
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {currentLocale === "ar" && (
          <link rel="stylesheet" href={`../../static/styles/style-ar.css`} />
        )}
        {currentLocale === "ar" && (
          <link
            href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700&display=swap"
            rel="stylesheet"
          />
        )}
        <link rel="shortcut icon" type="image/svg" href="../../static/favicon/favicon-16x16.png"></link>
      </Head>
      <header>
        <HeaderTop socialMediasData={socialMediasData} />
        <HeaderNavigation
          logoData={logoData}
          contactsData={contactsData}
          pagesData={pagesData}
        />
      </header>
      <main>{children}</main>
      <Footer data={footerData} />
    </>
  );
};

export default Layout;
