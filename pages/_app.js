import Document, { Html, Head, Main, NextScript } from "next/document";

import I18n from "../lib/i18n";
import "../styles/index.scss";
// import "../styles/widget.scss";
// import "../styles/listItemWithThumbnail.scss";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

function MyApp({ Component, pageProps }) {
  return (
    <I18n lngDict={pageProps.lngDict} locale={pageProps.lng}>
      <Component {...pageProps} />
    </I18n>
  );
}

export default MyApp;
