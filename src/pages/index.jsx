import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import CardCustom from "@/components/CardCustom";
import "remixicon/fonts/remixicon.css";
import { FormattedMessage, useIntl } from "react-intl";

const scales = [
  {
    icon: "ri-brain-line",
    iconColor: "text-orange-700",
    iconBg: "bg-orange-100",
    title: <FormattedMessage id="Index.scales.adhd.title" />,
    description: <FormattedMessage id="Index.scales.adhd.description" />,
    tags: ["ADHD", <FormattedMessage key="adult" id="Index.tag.adult" />],
    link: "/quotients/adhd",
  },
  {
    icon: "ri-user-heart-line",
    iconColor: "text-purple-700",
    iconBg: "bg-purple-100",
    title: <FormattedMessage id="Index.scales.aqa.title" />,
    description: <FormattedMessage id="Index.scales.aqa.description" />,
    tags: [
      <FormattedMessage key="autism" id="Index.tag.autism" />,
      "AQ",
      <FormattedMessage key="adult" id="Index.tag.adult" />,
    ],
    link: "/quotients/aq-a",
  },
  {
    icon: "ri-heart-pulse-line",
    iconColor: "text-red-700",
    iconBg: "bg-red-100",
    title: <FormattedMessage id="Index.scales.bpd.title" />,
    description: <FormattedMessage id="Index.scales.bpd.description" />,
    tags: ["BPD", "BSL-23"],
    link: "/quotients/bpd",
  },
  {
    icon: "ri-hearts-line",
    iconColor: "text-yellow-700",
    iconBg: "bg-yellow-100",
    title: <FormattedMessage id="Index.scales.oaq.title" />,
    description: <FormattedMessage id="Index.scales.oaq.description" />,
    tags: [
      <FormattedMessage key="alexithymia" id="Index.tag.alexithymia" />,
      "OAQ",
    ],
    link: "/quotients/oaq",
  },
  {
    icon: "ri-empathize-line",
    iconColor: "text-blue-700",
    iconBg: "bg-blue-100",
    title: <FormattedMessage id="Index.scales.aqc.title" />,
    description: <FormattedMessage id="Index.scales.aqc.description" />,
    tags: [
      <FormattedMessage key="autism" id="Index.tag.autism" />,
      "AQ",
      <FormattedMessage key="child" id="Index.tag.child" />,
    ],
    link: "/quotients/aq-c",
  },
  {
    icon: "ri-mental-health-line",
    iconColor: "text-green-700",
    iconBg: "bg-green-100",
    title: <FormattedMessage id="Index.scales.aspie.title" />,
    description: <FormattedMessage id="Index.scales.aspie.description" />,
    tags: [
      <FormattedMessage key="autism" id="Index.tag.autism" />,
      "AQ",
      <FormattedMessage key="external" id="Index.tag.external" />,
    ],
    link: "https://www.rdos.net/china/index.php?utm_source=qingshanasd.cn",
  },
  {
    icon: "ri-guide-line",
    iconColor: "text-teal-700",
    iconBg: "bg-teal-100",
    title: <FormattedMessage id="Index.scales.eq.title" />,
    description: <FormattedMessage id="Index.scales.eq.description" />,
    tags: [<FormattedMessage key="empathy" id="Index.tag.empathy" />, "EQ"],
    link: "/quotients/eq60",
  },
];

function Index() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "青衫 Neuro",
    alternateName: "青衫 Aspire",
    description: "致力于神经多元的科普、资讯、资源",
    slogan: "为神经多元群体提供支持",
    keywords: "ADHD, ASD",
    url: "https://qingshanasd.cn",
    logo: "https://qingshanasd.cn/assets/img/logo.webp",
    sameAs: "https://github.com/ittuann/qingshanasd",
    foundingDate: "2016",
    publishingPrinciples:
      "https://github.com/ittuann/qingshanasd/blob/main/LICENSE",
    member: {
      "@type": "Person",
      name: "air wish",
      alternateName: "ittuann",
      url: "https://github.com/ittuann",
      email: "ittuann@outlook.com",
      image: "https://qingshanasd.cn/assets/img/ittuann.png",
      description: "Developer and maintainer.",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "ittuann@outlook.com",
      contactType: "Technical Service",
    },
    knowsLanguage: ["zh-CN", "en-US", "ja-JP"],
  };
  const intl = useIntl();

  return (
    <Layout
      title={intl.formatMessage({ id: "siteName" })}
      description={intl.formatMessage({ id: "Index.description" })}
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      {/* Banner Section */}
      <section
        className="mx-auto w-full max-w-6xl px-4 py-12"
        aria-labelledby="main-heading"
      >
        <div className="container">
          <header className="flex flex-col-reverse items-center md:flex-row md:justify-between">
            {/* Content */}
            <div className="text-center md:text-left">
              <h1 className="text-primary mt-2 pb-2 text-4xl font-extrabold text-pretty md:mt-3 md:text-5xl md:text-balance">
                <FormattedMessage id="siteName" />
              </h1>
              <h2 className="to-accent mt-2 bg-gradient-to-r from-slate-500 via-emerald-500 bg-clip-text pb-2 text-3xl font-bold text-pretty text-transparent md:mt-3 md:text-4xl md:text-balance">
                <FormattedMessage id="subtitle" />
              </h2>
              <h3 className="text-foreground/80 mt-2 pb-2 text-lg font-semibold text-pretty md:mt-3 md:text-xl md:text-balance">
                <FormattedMessage id="slogan" />
              </h3>

              <div className="mt-4 flex flex-wrap justify-center gap-4 md:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full font-medium hover:scale-105"
                >
                  <Link href="/medical-map">
                    <FormattedMessage id="Navbar.medicalMap" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full font-medium hover:scale-105"
                >
                  <Link href="/about">
                    <FormattedMessage id="Navbar.about" />
                  </Link>
                </Button>
              </div>
            </div>

            <figure
              id="logo-index"
              className="flex justify-center md:justify-start"
            >
              <Image
                src="/assets/img/logo.webp"
                alt="Qingshan Neuro Logo index"
                width={128}
                height={128}
                fetchPriority="high"
                className="logo-drop-shadow-glow rounded-full"
              />
            </figure>
          </header>
        </div>
      </section>

      {/* Scales Section */}
      <section className="mx-auto max-w-7xl px-4" aria-labelledby="scales">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {scales.map((scale, index) => (
            <CardCustom key={index} {...scale} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Index;
