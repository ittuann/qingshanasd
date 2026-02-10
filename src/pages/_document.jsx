import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import React, { Component } from "react";

export default class Document extends Component {
  render() {
    return (
      /* @case-police-disable */
      <Html lang="en">
        <Head>
          <Script id="msc" src="/assets/lib/msc.min.js" />
          <Script
            id="cfa"
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token":"88bd8ee90d8f430f83c854149b786eb7"}'
          />
          <Script
            id="umamiis"
            src="/assets/lib/detection.min.js"
            data-website-id="ed6801de-a80a-452f-ab47-a81ddec2904a"
          />
          <Script id="gtm" src="/assets/lib/gtm.min.js" />
        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-MQP9L9FC"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
