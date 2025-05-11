import React, { Component } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import I18n from "@/i18n/i18n";

export default class Layout extends Component {
  render() {
    const {
      children,
      title = "青衫 Neuro",
      description = "致力于神经多元的科普、资讯、资源",
    } = this.props;

    return (
      <>
        {/* 页面级 Head */}
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content="ASD,ADHD" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#52b394" />
        </Head>

        <I18n>
          <div className="bg-zinc-50 min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </I18n>
      </>
    );
  }
}
