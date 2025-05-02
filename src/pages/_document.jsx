import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import React, { Component } from "react";

export default class Document extends Component {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Script
            id="cfa"
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token":"88bd8ee90d8f430f83c854149b786eb7"}'
            strategy="afterInteractive"
          />
          <Script
            src="/assets/lib/detection.min.js"
            data-website-id="ed6801de-a80a-452f-ab47-a81ddec2904a"
          />
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
