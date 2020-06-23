import Document, { Html, Head, Main, NextScript } from "next/document";
import { useState } from "react";
const Body = ({ children }) => {
  // font-family: 'Freckle Face', cursive;
  // font-family: 'Roboto Slab', serif;
  // font-family: 'Tangerine', cursive;
  return (
    <body

    >
      {/* <div>
        <select
          onChange={(evt) => {
            alert(evt)
          }}
        >
          <option value="'Freckle Face', cursive">
            Freckle Face', cursive
          </option>
          <option value="'Roboto Slab', serif">'Roboto Slab', serif</option>
          <option value="'Tangerine', cursive">'Tangerine', cursive</option>
        </select>
      </div> */}
      {children}
    </body>
  );
};

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />

        <Body>
          <Main />
          <NextScript />
        </Body>
      </Html>
    );
  }
}

export default MyDocument;
