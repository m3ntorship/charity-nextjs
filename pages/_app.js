import I18n from '../lib/i18n';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <I18n lngDict={pageProps.lngDict} locale={pageProps.lng}>
      <Component {...pageProps} />
    </I18n>
  );
}

export default MyApp;
