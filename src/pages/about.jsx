import React, { Component } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import "remixicon/fonts/remixicon.css";

const contributors = [
  {
    name: "青衫",
    role: "创立者",
    icon: "/assets/img/qingshan_150.png",
    link: "#",
  },
  {
    name: "air wish",
    role: "开发者",
    icon: "/assets/img/ittuann.png",
    link: "https://github.com/ittuann",
  },
  {
    name: "H-MALGANIS",
    role: "开发者",
    icon: "/assets/img/zealot.png",
    link: "#",
  },
  {
    name: "GLOOMYGHOST",
    role: "开发者",
    icon: "/assets/img/G-150x150.png",
    link: "https://github.com/YuzukiTsuru",
  },
  {
    name: "SPACEDUCK",
    role: "维护者",
    icon: "/assets/img/SpaceDuck.png",
    link: "#",
  },
];

class About extends Component {
  render() {
    return (
      <Layout title="关于青衫 - 青衫 Neuro">
        <main className="max-w-7xl mx-auto px-4 py-16">
          {/* 标题部分 */}
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
              <h1 className="tracking-tight font-extrabold text-gray-900">
                <span className="block text-4xl md:text-5xl">
                  关于青衫 Neuro
                </span>
                <span className="block mt-5">
                  <span className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    为神经多元群体提供支持
                  </span>
                </span>
              </h1>
              <p className="mt-5 text-lg text-zinc-600">
                因为你我，这个世界终将丰富多彩
              </p>
              <div className="mt-8 flex justify-center">
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              </div>
            </div>
          </div>

          {/* 创始人介绍部分 */}
          <div className="flex justify-center mb-32">
            <div className="flex flex-col md:flex-row items-center max-w-5xl gap-16">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <Image
                  src="/assets/img/qingshan.jpg"
                  alt="view"
                  width={240}
                  height={300}
                  className="rounded-xl relative shadow-lg hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  青衫，神经科学博士
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  青衫 Neuro 创始人，ASD 人士，公众号·微信读书·知乎 @青衫Neuro
                </p>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  青衫 Neuro
                  开始于2016年1月，公众号注册于2017年4月，为公益非营利组织。青衫
                  Neuro
                  致力于神经多元的科普、资源和互助，希望能够帮助不一样的你和家人了解自己。
                </p>
              </div>
            </div>
          </div>

          {/* 贡献者部分 */}
          <div className="bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-xl py-20 px-8 mb-32">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 md:text-4xl mb-6">
                  维护者
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
                {contributors.map((contributor, index) => (
                  <div
                    key={index}
                    className="h-full transform transition-all duration-300 hover:-translate-y-2"
                  >
                    <a href={contributor.link} target="" className="block h-full">
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
                        <p className="text-sm text-gray-500 mt-2">
                          {contributor.role}
                        </p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-600">
                  以及热心的贡献者们为项目提供力量
                  <a
                    href="https://github.com/ittuann/qingshanasd/graphs/contributors"
                    target="_blank"
                    className="ml-2 text-primary hover:text-accent inline-flex items-center"
                  >
                    <span>前往 GitHub 查看</span>
                    <i className="ri-arrow-right-line ml-1"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* 财务公示部分 */}
          <div className="mb-24">
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                <span className="relative">
                  财务公示
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-secondary -z-10"></span>
                </span>
              </h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-600 mb-8 text-center text-lg leading-relaxed">
                  青衫 Neuro
                  始终秉持公开透明的财务管理原则，定期发布资产负债表和资金池报告，以确保所有资金的使用都能得到合理说明。
                </p>
                <div className="flex justify-center">
                  <a
                    href="https://docs.qq.com/sheet/DT05BclBnZk9CYmhx"
                    target="_blank"
                    className="group inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent transition duration-300"
                  >
                    <span>查看财务报告</span>
                    <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}

export default About;
