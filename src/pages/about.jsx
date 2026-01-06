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
    role: <FormattedMessage id="About.creatorRole" />,
    icon: "/assets/img/qingshan_150.png",
    link: "#",
    email: "qingshan.aspire@gmail.com",
    alternateName: "",
  },
  {
    name: "air wish",
    role: <FormattedMessage id="About.developerRole" />,
    icon: "/assets/img/ittuann.png",
    link: "https://github.com/ittuann",
    email: "ittuann@outlook.com",
    alternateName: "ittuann",
  },
  {
    name: "H-MALGANIS",
    role: <FormattedMessage id="About.developerRole" />,
    icon: "/assets/img/zealot.png",
    link: "#",
    email: "#",
    alternateName: "",
  },
  {
    name: "GLOOMYGHOST",
    role: <FormattedMessage id="About.developerRole" />,
    icon: "/assets/img/G-150x150.png",
    link: "https://github.com/YuzukiTsuru",
    email: "#",
    alternateName: "",
  },
  {
    name: "SPACEDUCK",
    role: <FormattedMessage id="About.maintainerRole" />,
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
      className={`bg-white border rounded-lg transition-all duration-200 overflow-hidden ${
        isOpen
          ? `shadow-sm border-green-800 ring-1 ring-green-50`
          : `border-slate-100 hover:border-green-600`
      }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between p-4 text-left group select-none"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div
            className={`flex-shrink-0 p-2 rounded-md ${
              data.type === "research"
                ? "text-indigo-600 bg-indigo-50"
                : "text-emerald-600 bg-emerald-50"
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

          <div className="flex flex-col min-w-0">
            <span className="font-bold text-slate-800 group-hover:text-slate-900 text-base">
              {data.name}
            </span>
            <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
              <FormattedMessage id="About.cooperation.readDetail" />
            </span>
          </div>
        </div>

        <ChevronDown
          className={`w-5 h-5 text-slate-300 transition-transform duration-300 ${
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
          <div className="px-4 pb-4 pt-0">
            <div className="h-px w-full bg-slate-50 mb-3" />
            <div className="flex flex-wrap gap-2">
              {data.coop.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-100 hover:bg-white hover:border-slate-300 hover:shadow-sm text-xs text-slate-600 hover:text-green-700 rounded-full transition-all duration-200"
                >
                  {item.name}
                  <i className="ri-external-link-line w-3 h-3 opacity-50"></i>
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

  const totalPartners = items.length;
  const totalCoopCount = items.reduce(
    (acc, curr) => acc + (curr.coop ? curr.coop.length : 0),
    0,
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto">
        {displayedItems.map((item, index) => (
          <CooperationItem key={index} data={item} />
        ))}
      </div>

      {shouldShowButton && (
        <div className="flex justify-center mt-4">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="group inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
          >
            <span>
              {isExpanded ? (
                <FormattedMessage id="About.showLess" defaultMessage="收起" />
              ) : (
                <FormattedMessage
                  id="About.showMoreWithStats"
                  defaultMessage="展开全部 {partnerCount} 个合作方 ({coopCount} 次合作)"
                  values={{
                    partnerCount: totalPartners,
                    coopCount: totalCoopCount,
                  }}
                />
              )}
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
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
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* 标题部分 */}
        <header className={`mb-4 transition-opacity duration-700`}>
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/assets/img/logo.webp"
              alt="logo"
              width={64}
              height={64}
              className="rounded-full"
            />
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              <FormattedMessage
                id="About.title"
                defaultMessage="关于青衫 Neuro"
              />
            </h1>
            <div className="mt-8 flex justify-center">
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>
          </div>
        </header>

        {/* 创始人介绍部分 */}
        <section className="flex justify-center mb-8">
          <div className="flex flex-col md:flex-row items-center max-w-5xl gap-16">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <Image
                src="/assets/img/qingshan.jpg"
                alt="view"
                width={200}
                height={250}
                className="rounded-xl relative shadow-lg hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <FormattedMessage id="About.founderTitle" />
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                <FormattedMessage id="About.founderDescription" />
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                <FormattedMessage id="About.founderInfo" />
              </p>
            </div>
          </div>
        </section>

        {/* 贡献者部分 */}
        <section className="bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-3xl py-8 px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-4">
              <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 md:text-4xl mb-4">
                <FormattedMessage id="About.contributors" />
              </h2>
              <p className="max-w-3xl mx-auto text-center text-gray-600 mb-6">
                <FormattedMessage id="About.contributorsDescription" />
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
                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-8 text-center border border-gray-100 h-full">
                      <div className="flex items-center justify-center mx-auto rounded-full mb-6">
                        <Image
                          src={`${contributor.icon}`}
                          alt={`${contributor.name}`}
                          width={75}
                          height={75}
                          className="rounded-full"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 break-words">
                        {contributor.name}
                      </h3>
                      <div className="w-12 h-1 break-words bg-gradient-to-r from-primary to-teal-500 mx-auto my-3 rounded-full"></div>
                      <h4 className="text-sm text-gray-500 mt-2">
                        {contributor.role}
                      </h4>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            <div className="text-center mt-6">
              <p className="text-gray-600">
                <FormattedMessage id="About.contributorsNote" />
              </p>
            </div>

            <div className="mt-6 flex justify-center">
              <Link
                href="https://github.com/ittuann/qingshanasd"
                target="_blank"
                className="group inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent transition-all duration-300"
              >
                <span className="flex items-center">
                  <i className="ri-sparkling-line mr-2 group-hover:rotate-360 transition-transform duration-500"></i>
                  <FormattedMessage id="About.viewOnGithub" />
                </span>
                <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-500"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* 研究合作部分 */}
        <section className="bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-3xl py-8 px-8 mb-16">
          <div className="text-center mb-4">
            <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 md:text-4xl mb-6">
              <FormattedMessage id="About.research.title" />
            </h2>
            <p className="max-w-3xl mx-auto text-center text-gray-600">
              <FormattedMessage id="About.research.description" />
            </p>
          </div>

          <CooperationList
            items={cooperationData.filter((item) => item.type === "research")}
          />
        </section>

        {/* 媒体报道部分 */}
        <section className="bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-3xl py-8 px-8 mb-16">
          <div className="text-center mb-4">
            <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 md:text-4xl mb-6">
              <FormattedMessage id="About.media.title" />
            </h2>
            <p className="max-w-3xl mx-auto text-center text-gray-600">
              <FormattedMessage id="About.media.description" />
            </p>
          </div>

          <CooperationList
            items={cooperationData.filter((item) => item.type === "media")}
          />
        </section>

        {/* 财务公示部分 */}
        <section className="bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-3xl py-8 px-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            <span className="relative">
              <FormattedMessage id="About.financial.title" />
              <span className="absolute bottom-1 left-0 w-full h-2 bg-secondary -z-10"></span>
            </span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-8 text-center text-lg leading-relaxed">
              <FormattedMessage id="About.financial.description" />
            </p>
            <div className="flex justify-center">
              <Link
                href="https://docs.qq.com/sheet/DT05BclBnZk9CYmhx"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent transition duration-300"
              >
                <span>
                  <FormattedMessage id="About.financial.view" />
                </span>
                <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default About;
