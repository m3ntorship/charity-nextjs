import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    let lng = this.props.__NEXT_DATA__.query.lng;
    return (
      <Html dir={lng === "ar" ? "rtl" : "ltr"}>
        <Head />
        <body className={lng === "ar" ? "font-ar" : "font-en"}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
