// import Header from "../Header";
import { Footer } from "../Footer";
import { useEffect, useState } from "react";
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
  const [font, setFont] = useState("");

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {currentLocale === "ar" && (
          <link rel="stylesheet" href={`../../static/styles/style-ar.css`} />
        )}
        <link
          href="https://fonts.googleapis.com/css2?family=Freckle+Face&family=Roboto+Slab:wght@100;200;300;700&family=Tangerine:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;700&family=El+Messiri:wght@400;600;700&family=Jomhuria&family=Mirza:wght@400;600&family=Tajawal:wght@200;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div
        style={{
          fontFamily: font,
        }}
      >
        <div>
          <select
            onChange={(evt) => {
              setFont(evt.target.value);
            }}
          >
            <option value="" disabled hidden selected>
              Select the font
            </option>
            <option value="'Freckle Face', cursive">
              Freckle Face', cursive
            </option>
            <option value="'Roboto Slab', serif">'Roboto Slab', serif</option>
            <option value="'Tangerine', cursive">'Tangerine', cursive</option>
            <option value="'Almarai', sans-serif">
              'Almarai', sans-serif;
            </option>
            <option value="'El Messiri', sans-serif">
              'El Messiri', sans-serif;
            </option>
            <option value="'Jomhuria', cursive">'Jomhuria', cursive;</option>
            <option value="'Mirza', cursive">'Mirza', cursive;</option>
            <option value="'Tajawal', sans-serif">
              'Tajawal', sans-serif;
            </option>
          </select>
        </div>
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
      </div>
    </>
  );
};

export default Layout;
