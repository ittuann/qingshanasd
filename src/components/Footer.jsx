import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import "remixicon/fonts/remixicon.css";
import { FormattedMessage } from "react-intl";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-white mt-8">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/assets/img/logo.webp"
                  alt="logo"
                  width={32}
                  height={32}
                  fetchPriority="high"
                  className="mr-2"
                />
                <span className="font-['Pacifico'] text-xl text-gray-900">
                  <FormattedMessage id="siteName" />
                </span>
              </div>
              <p className="text-gray-500 text-sm">
                <FormattedMessage id="Footer.description" />
              </p>
              <Link
                href="https://qingshanasd.cn"
                className="text-gray-500 hover:text-primary transition-colors duration-300 text-sm inline-flex items-center mt-1"
              >
                <i className="ri-earth-line text-sm mr-1"></i>
                qingshanasd.cn
              </Link>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-4">
                <FormattedMessage id="Footer.resources" />
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 hover:text-gray-900 text-sm"
                  >
                    <FormattedMessage id="Footer.selfTest" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/medical-map"
                    className="text-gray-500 hover:text-gray-900 text-sm"
                  >
                    <FormattedMessage id="Footer.medicalMap" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/posts/"
                    className="text-gray-500 hover:text-gray-900 text-sm"
                  >
                    <FormattedMessage id="Footer.posts" />
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-4">
                <FormattedMessage id="Footer.about" />
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-500 hover:text-gray-900 text-sm"
                  >
                    <FormattedMessage id="Footer.aboutUs" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-500 hover:text-gray-900 text-sm"
                  >
                    <FormattedMessage id="Footer.terms" />
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-4">
                <FormattedMessage id="Footer.contact" />
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="mailto:qingshan.aspie@gmail.com"
                    className="text-gray-500 hover:text-red-600 transition-colors"
                    aria-label="Official Email"
                  >
                    <i className="ri-mail-fill mr-1"></i>
                    <FormattedMessage id="Footer.email" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.zhihu.com/people/QingshanAspie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                    aria-label="Zhihu"
                  >
                    <i className="ri-zhihu-line mr-1"></i>
                    <FormattedMessage id="Footer.zhihu" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://mp.weixin.qq.com/mp/homepage?__biz=MzIyMzgyMjY5NQ%3D%3D&hid=1"
                    target="_blank"
                    className="text-gray-500 hover:text-green-600 transition-colors"
                    aria-label="WeChat Public Account"
                  >
                    <i className="ri-wechat-fill mr-1"></i>
                    <FormattedMessage id="Footer.wechat" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/ittuann/qingshanasd"
                    target="_blank"
                    className="text-gray-500 hover:text-black transition-colors"
                    aria-label="GitHub"
                  >
                    <i className="ri-github-fill mr-1"></i>
                    <FormattedMessage id="Footer.github" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8">
            <div className="flex flex-col items-center space-y-4">
              <p className="text-center text-gray-500 text-sm">
                <FormattedMessage id="Footer.version" />: 1.1.7
              </p>
              <p className="text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} <FormattedMessage id="siteName" />
                . All rights reserved.
              </p>
              <div className="flex items-center space-x-2">
                <p className="text-center text-gray-500 text-sm">
                  <FormattedMessage id="Footer.license" />{" "}
                  <Link
                    href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
                    target="_blank"
                    className="text-primary hover:text-primary/80 transition"
                  >
                    <FormattedMessage id="Footer.licenseLink" />
                  </Link>{" "}
                  <FormattedMessage id="Footer.licenseSuffix" />
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Link
                  href="https://github.com/ittuann/qingshanasd"
                  target="_blank"
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                >
                  <i className="ri-github-fill"></i>
                  <span>
                    <FormattedMessage id="Footer.sourceCode" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
