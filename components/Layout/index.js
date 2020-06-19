import Link from "next/link";
import Head from "next/head";

import Header from "../Header";
import HeaderNavigation from "../HeaderNavigation";

const Layout = ({
  children,
  logoData,
  socialMediasData,
  ContactsData,
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
        <Header socialMediasData={socialMediasData} />
        <HeaderNavigation
          logoData={logoData}
          ContactsData={ContactsData}
          pagesData={pagesData}
        />
      </header>
      <main className="p-12 text-center">{children}</main>
      <footer className="bg-red-500 p-10">
        <h1 className="text-center ">footer content</h1>
      </footer>
    </>
  );
};

export default Layout;
