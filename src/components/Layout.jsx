import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Noto_Sans_SC } from "next/font/google";

const noto = Noto_Sans_SC({
  subsets: ["latin"],
  fallback: ["Noto_Sans_Mono", "Noto_Sans_JP"],
});

console.log(
  "%c 青衫 Neuro %c 因为你我 这个世界终将丰富多彩",
  "background: #52b394; color: white; padding:4px 8px; border-radius:4px 0 0 4px; font-weight:bold;",
  "background: #1eb88e; color: black; padding:4px 8px; border-radius:0 4px 4px 0; font-weight:bold;",
);

export default function Layout({
  children,
  title = "青衫 Neuro",
  description = "致力于神经多元的科普、资讯、资源",
}) {
  return (
    <>
      {/* 页面级 Head */}
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="desc" />
        <meta
          name="keywords"
          content="青衫, 青衫 Neuro, 青衫 Aspie, ADHD 自测, 量表, 测试, 青衫 ADHD, ASD, ADHD"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="ittuann" />
        <meta name="theme-color" content="#52b394" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="青衫 Neuro" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="青衫 Neuro" />
        <meta property="og:title" content="青衫 Neuro" />
        <meta
          property="og:description"
          content="致力于神经多元的科普、资讯、资源"
        />
        <meta property="og:url" content="https://qingshanasd.cn" />
        <meta property="og:locale" content="zh-CN" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:locale:alternate" content="ja_JP" />
        <meta
          property="og:image"
          content="https://qingshanasd.cn/assets/img/ogp.jpeg"
        />
        <meta property="og:image:alt" content="青衫 Neuro" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ittuann" />
        <meta name="twitter:creator" content="@ittuann" />
        <meta name="twitter:title" content="青衫 Neuro" />
        <meta name="twitter:url" content="https://qingshanasd.cn" />
        <meta
          name="twitter:description"
          content="致力于神经多元的科普、资讯、资源"
        />
        <meta
          name="twitter:image"
          content="https://qingshanasd.cn/assets/img/ogp.jpeg"
        />
        <meta name="twitter:image:alt" content="青衫 Neuro" />
        <meta
          name="google-site-verification"
          content="0KtvMLWoVy32ZzcomvBYl0OS1C-keRSH7G8pSaDjJtQ"
        />
        <meta name="msvalidate.01" content="E73984A8E6A62AB2E04103B41EF00802" />
      </Head>

      <div
        className={`${noto.className} bg-zinc-50 min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
