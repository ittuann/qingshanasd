import React, { Component } from "react";
import Head from "next/head";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default class Layout extends Component {
  render() {
    const {
      children,
      title = "青衫 Neuro",
      description = "致力于孤独症谱系权威资讯资源",
    } = this.props;

    return (
      <>
        {/* 页面级 Head */}
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content="ASD,ADHD" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <Script
            src="../utils/detection.js"
            data-website-id="ed6801de-a80a-452f-ab47-a81ddec2904a"
          />
          <Footer />
        </Head>

        <div className="bg-base min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
        </div>
      </>
    );
  }
}
