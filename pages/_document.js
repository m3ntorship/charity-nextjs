import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    let lng = this.props.__NEXT_DATA__.query.lng;
    return (
      <Html dir={lng === 'en' ? 'ltr' : 'rtl'}>
        <Head />
        <body className={lng === 'en' ? 'font-en' : 'font-ar'}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
