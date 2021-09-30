import React from 'react';

import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja-jp">
        <Head />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
