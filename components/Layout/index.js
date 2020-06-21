// import Header from "../Header";
import { Footer } from "../Footer";
import Head from "next/head";
import HeaderTop from "../HeaderTop";
import HeaderNavigation from "../HeaderNavigation";

const Layout = ({
  children,
  footerData,
  logoData,
  socialMediasData,
  contactsData,
  pagesData,
}) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
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
