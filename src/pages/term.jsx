import React, { Component } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";

export default class Terms extends Component {
  render() {
    return (
      <Layout title="使用条款 - 青衫 Neuro">
        <main className="max-w-7xl mx-auto px-4 py-16">
          {/* 标题 */}
          <div className={`mb-24 transition-opacity duration-700`}>
            <div className="flex items-center justify-center mb-10">
              <Image
                src="/favicon.ico"
                alt="logo"
                width={64}
                height={64}
                className="rounded-full"
              />
            </div>
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                <span className="block">青衫 Neuro 网站使用条款</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                文章版权许可
              </p>
              <div className="mt-8 flex justify-center">
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-teal-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* 条款内容 */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">
                  Terms of Service
                </h2>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Last updated: March 7, 2025
                </p>
              </div>

              {/* 条款详情 */}
              <div className="px-4 py-5 sm:p-6 prose max-w-none">
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Overview
                  </h3>
                  <p className="text-gray-700 mb-4">
                    除特别说明外，作品均采用
                    <a
                      href="https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode"
                      className="text-primary hover:text-primary-dark"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      知识共享署名-非商业性使用-禁止演绎 4.0 国际许可协议（CC
                      BY-NC-ND 4.0）
                    </a>
                    进行许可。
                  </p>
                  <p className="text-gray-700 mb-4">
                    我们支持您将文章分享给更多的人，只需要带上我们的出处与链接即可！
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <i className="ri-information-line text-2xl text-yellow-400"></i>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-yellow-700 items-center">
                          禁止无出处转载，重新编辑发布，和商业使用。
                        </p>
                        <p className="text-sm text-yellow-700 items-center">
                          青衫会对侵权者追究法律责任。
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Abstract
                  </h3>
                  <p className="text-gray-700 mb-4">
                    这是一个便于人们阅读的摘要（并非 Creative Commons
                    Attribution-NonCommercial-NoDerivatives 4.0 International
                    Deed 的替代文本）。
                  </p>
                  <p className="text-gray-700 mb-4">
                    本文本仅仅强调部分核心特征和真正许可协议的部分条款，不是许可协议，也没有法律意义。您应当在使用授权作品前，仔细审阅真正许可协议的所有条款。
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">
                      您可以自由地：
                    </h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>
                        <strong>共享</strong> —
                        在任何媒介以任何形式复制、发行本作品。
                      </li>
                    </ul>
                    <h4 className="font-medium text-gray-900 mt-6 mb-2">
                      惟须遵守下列条件：
                    </h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-4">
                      <li>
                        <strong>署名</strong> — 您必须给出适当的署名
                        ，提供指向本许可协议的链接，同时标明是否（对原始作品）作了修改。您可以用任何合理的方式来署名，但是不得以任何方式暗示许可人为您或您的使用背书。
                      </li>
                      <li>
                        <strong>非商业性使用</strong> —
                        您不得将本作品用于商业目的 。
                      </li>
                      <li>
                        <strong>禁止演绎</strong> —
                        如果您再混合、转换、或者基于该作品创作，您不可以分发修改作品。
                      </li>
                      <li>
                        <strong>没有附加限制</strong> —
                        您不得适用法律术语或者技术措施从而限制其他人做许可协议允许的事情。
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-base text-gray-500">
                For more information about Creative Commons licenses, visit{" "}
                <a
                  href="https://creativecommons.org"
                  className="text-primary hover:text-primary-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  creativecommons.org
                </a>
              </p>
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}
