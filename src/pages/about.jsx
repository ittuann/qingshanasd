import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import "remixicon/fonts/remixicon.css";
import { ChevronDown } from "lucide-react";
import { FormattedMessage, useIntl } from "react-intl";
import Head from "next/head";
import cooperationData from "@/_data/cooperationData";

const contributors = [
  {
    name: "青衫",
    role: <FormattedMessage id="About.contributorFounder" />,
    icon: "/assets/img/qingshan_150.png",
    link: "#",
    email: "qingshan.aspire@gmail.com",
    alternateName: "",
  },
  {
    name: "air wish",
    role: <FormattedMessage id="About.contributorDeveloper" />,
    icon: "/assets/img/ittuann.png",
    link: "https://github.com/ittuann",
    email: "ittuann@outlook.com",
    alternateName: "ittuann",
  },
  {
    name: "H-MALGANIS",
    role: <FormattedMessage id="About.contributorDeveloper" />,
    icon: "/assets/img/zealot.png",
    link: "#",
    email: "#",
    alternateName: "",
  },
  {
    name: "GLOOMYGHOST",
    role: <FormattedMessage id="About.contributorDeveloper" />,
    icon: "/assets/img/G-150x150.png",
    link: "https://github.com/YuzukiTsuru",
    email: "#",
    alternateName: "",
  },
  {
    name: "SPACEDUCK",
    role: <FormattedMessage id="About.contributorMaintainer" />,
    icon: "/assets/img/SpaceDuck.png",
    link: "#",
    email: "#",
    alternateName: "",
  },
];

const CooperationItem = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-lg border bg-white transition-all duration-200 ${
        isOpen
          ? `border-green-800 shadow-sm ring-1 ring-green-50`
          : `border-slate-100 hover:border-green-600`
      }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        className="group flex w-full items-center justify-between p-4 text-left select-none"
      >
        <div className="flex min-w-0 items-center gap-3">
          <div
            className={`flex-shrink-0 rounded-md p-2 ${
              data.type === "research"
                ? "bg-indigo-50 text-indigo-600"
                : "bg-emerald-50 text-emerald-600"
            }`}
          >
            <i
              className={
                data.type === "research"
                  ? "ri-graduation-cap-line"
                  : "ri-article-line"
              }
            ></i>
          </div>

          <div className="flex min-w-0 flex-col">
            <span className="text-base font-bold text-slate-800 group-hover:text-slate-900">
              {data.name}
            </span>
            <span className="flex items-center gap-1 text-xs font-medium text-slate-400">
              <FormattedMessage id="About.cooperation.readDetail" />
            </span>
          </div>
        </div>

        <ChevronDown
          className={`h-5 w-5 text-slate-300 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-slate-500" : "group-hover:text-slate-400"
          }`}
        />
      </button>

      {/* 内容链接 */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pt-0 pb-4">
            <div className="mb-3 h-px w-full bg-slate-50" />
            <div className="flex flex-wrap gap-2">
              {data.coop.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-100 bg-slate-50 px-3 py-1.5 text-xs text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-white hover:text-green-700 hover:shadow-sm"
                >
                  {item.name}
                  <i className="ri-external-link-line h-3 w-3 opacity-50"></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CooperationList = ({ items, maxItems = 9 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldShowButton = items.length > maxItems;
  const displayedItems = isExpanded ? items : items.slice(0, maxItems);

  return (
    <>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {displayedItems.map((item, index) => (
          <CooperationItem key={index} data={item} />
        ))}
      </div>

      {shouldShowButton && (
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="group inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-800"
          >
            <span>
              {isExpanded ? (
                <FormattedMessage id="About.showLess" defaultMessage="收起" />
              ) : (
                <FormattedMessage
                  id="About.showMore"
                  defaultMessage="查看更多"
                />
              )}
            </span>
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      )}
    </>
  );
};

function About() {
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
    member: contributors.map((contributor) => ({
      "@type": "Person",
      name: contributor.name,
      alternateName:
        contributor.alternateName && contributor.alternateName !== ""
          ? contributor.alternateName
          : undefined,
      url: contributor.link !== "#" ? contributor.link : undefined,
      email: contributor.email !== "#" ? contributor.email : undefined,
      image: `https://qingshanasd.cn${contributor.icon}`,
    })),
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
      title={intl.formatMessage({ id: "About.title" })}
      description={intl.formatMessage({ id: "About.description" })}
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <div className="mx-auto max-w-7xl px-4 py-4">
        {/* 标题部分 */}
        <header className={`mb-4 transition-opacity duration-700`}>
          <div className="mb-4 flex items-center justify-center">
            <Image
              src="/assets/img/logo.webp"
              alt="logo"
              width={64}
              height={64}
              fetchPriority="high"
              className="rounded-full"
            />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              <FormattedMessage
                id="About.title"
                defaultMessage="关于青衫 Neuro"
              />
            </h1>
            <div className="mt-8 flex justify-center">
              <div className="from-primary to-accent h-1 w-20 rounded-full bg-gradient-to-r"></div>
            </div>
          </div>
        </header>

        {/* 创始人介绍部分 */}
        <section className="mb-8 flex justify-center">
          <div className="flex max-w-5xl flex-col items-center gap-16 md:flex-row">
            <div className="group relative">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r opacity-20 blur transition duration-300 group-hover:opacity-40"></div>
              <Image
                src="/assets/img/qingshan.jpg"
                alt="view"
                width={200}
                height={250}
                className="relative rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.01]"
              />
            </div>
            <div className="flex-1">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                <FormattedMessage id="About.founderTitle" />
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                <FormattedMessage id="About.founderDescription" />
              </p>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                <FormattedMessage id="About.founderInfo" />
              </p>
            </div>
          </div>
        </section>

        {/* 贡献者部分 */}
        <section className="hover:shadow-3xl mb-16 rounded-3xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 px-8 py-8 shadow-lg transition-all duration-300">
          <div className="mx-auto max-w-7xl">
            <div className="mb-4 text-center">
              <h2 className="mb-4 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 md:text-4xl">
                <FormattedMessage id="About.contributor" />
              </h2>
              <p className="mx-auto mb-6 max-w-3xl text-center text-gray-600">
                <FormattedMessage id="About.contributorDescription" />
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
              {contributors.map((contributor, index) => (
                <article
                  key={index}
                  className="h-full transform transition-all duration-300 hover:-translate-y-2"
                >
                  <Link
                    href={contributor.link}
                    target=""
                    className="block h-full"
                  >
                    <div className="h-full rounded-xl border border-gray-100 bg-white p-8 text-center shadow-md transition-all hover:shadow-xl">
                      <div className="mx-auto mb-6 flex items-center justify-center rounded-full">
                        <Image
                          src={`${contributor.icon}`}
                          alt={`${contributor.name}`}
                          width={75}
                          height={75}
                          className="rounded-full"
                        />
                      </div>
                      <h3 className="text-lg font-bold break-words text-gray-900">
                        {contributor.name}
                      </h3>
                      <div className="from-primary mx-auto my-3 h-1 w-12 rounded-full bg-gradient-to-r to-teal-500 break-words"></div>
                      <h4 className="mt-2 text-sm text-gray-500">
                        {contributor.role}
                      </h4>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                <FormattedMessage id="About.contributorNote" />
              </p>
            </div>

            <div className="mt-6 flex justify-center">
              <Link
                href="https://github.com/ittuann/qingshanasd"
                target="_blank"
                className="group bg-primary hover:bg-accent inline-flex items-center rounded-lg px-6 py-3 font-medium text-white transition-all duration-300"
              >
                <span className="flex items-center">
                  <i className="ri-sparkling-line mr-2 transition-transform duration-500 group-hover:rotate-360"></i>
                  <FormattedMessage id="About.viewOnGithub" />
                </span>
                <i className="ri-arrow-right-line ml-2 transition-transform duration-500 group-hover:translate-x-1"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* 研究合作部分 */}
        <section className="hover:shadow-3xl mb-16 rounded-3xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 px-8 py-8 shadow-lg transition-all duration-300">
          <div className="mb-4 text-center">
            <h2 className="mb-6 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 md:text-4xl">
              <FormattedMessage id="About.research.title" />
            </h2>
            <p className="mx-auto max-w-3xl text-center text-gray-600">
              <FormattedMessage id="About.research.description" />
            </p>
          </div>

          <CooperationList
            items={cooperationData.filter((item) => item.type === "research")}
          />
        </section>

        {/* 媒体报道部分 */}
        <section className="hover:shadow-3xl mb-16 rounded-3xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 px-8 py-8 shadow-lg transition-all duration-300">
          <div className="mb-4 text-center">
            <h2 className="mb-6 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 md:text-4xl">
              <FormattedMessage id="About.media.title" />
            </h2>
            <p className="mx-auto max-w-3xl text-center text-gray-600">
              <FormattedMessage id="About.media.description" />
            </p>
          </div>

          <CooperationList
            items={cooperationData.filter((item) => item.type === "media")}
          />
        </section>

        {/* 财务公示部分 */}
        <section className="hover:shadow-3xl mb-16 rounded-3xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 px-8 py-8 shadow-lg transition-all duration-300">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            <span className="relative">
              <FormattedMessage id="About.financial.title" />
              <span className="bg-secondary absolute bottom-1 left-0 -z-10 h-2 w-full"></span>
            </span>
          </h2>
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-center text-lg leading-relaxed text-gray-600">
              <FormattedMessage id="About.financial.description" />
            </p>
            <div className="flex justify-center">
              <Link
                href="https://docs.qq.com/sheet/DT05BclBnZk9CYmhx"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-primary hover:bg-accent inline-flex items-center rounded-lg px-6 py-3 font-medium text-white transition duration-300"
              >
                <span>
                  <FormattedMessage id="About.financial.view" />
                </span>
                <i className="ri-arrow-right-line ml-2 transition-transform group-hover:translate-x-1"></i>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default About;
