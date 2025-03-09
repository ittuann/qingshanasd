import React, { Component } from "react";
import Layout from "@/components/Layout";
import "remixicon/fonts/remixicon.css";

const contributors = [
  {
    name: "青衫",
    role: "创立者",
    icon: "ri-user-smile-line",
    link: "#",
  },
  {
    name: "air wish",
    role: "开发者",
    icon: "ri-user-heart-line",
    link: "#",
  },
  {
    name: "H-MALGANIS",
    role: "开发者",
    icon: "ri-user-location-line",
    link: "#",
  },
  {
    name: "GLOOMYGHOST",
    role: "开发者",
    icon: "ri-contacts-line",
    link: "#",
  },
  {
    name: "SPACEDUCK",
    role: "维护者",
    icon: "ri-user-voice-line",
    link: "#",
  },
];

class About extends Component {
  render() {
    return (
      <Layout title="关于青衫 - 青衫 Neuro">
        <main className="max-w-7xl mx-auto px-4 py-16">
          {/* 页面标题部分 */}
          <div className={`mb-24 transition-opacity duration-700`}>
            <div className="flex items-center justify-center mb-10">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/20">
                <i className="ri-brain-line text-white text-4xl"></i>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">关于青衫 Neuro</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500 mt-3">
                  为神经多样性群体提供支持
                </span>
              </h1>
              <p className="mt-5 text-base text-gray-500 sm:mt-6 sm:text-lg sm:max-w-2xl sm:mx-auto md:mt-6 md:text-xl">
                因为你我，这个世界终将丰富多彩
              </p>
              <div className="mt-8 flex justify-center">
                <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* 创始人介绍部分 */}
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 transition-all duration-1000`}
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1468581264429-2548ef9eb732?q=80&w=3870&auto=format&fit=crop"
                alt="view"
                className="rounded-xl w-full h-full object-cover relative shadow-lg hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                青衫，神经科学博士
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                青衫Neuro创始人，ASD人士 公众号·微信读书·知乎·豆瓣 @青衫Aspie
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                青衫Neuro创始于2016年1月，公众号注册于2017年4月。公众号非营利组织，致力于神经多样性的科普、资源和互助，希望能够帮助你找到一样的你和让人了解。
              </p>
            </div>
          </div>

          {/* 贡献者部分 */}
          <div className="bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-xl py-20 px-8 mb-32">
            <div className="max-w-7xl mx-auto">
              <div className="lg:text-center mb-16">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-6">
                  贡献者
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
                {contributors.map((contributor, index) => (
                  <div
                    key={index}
                    className="transform transition-all duration-300 hover:-translate-y-2"
                  >
                    <a href={contributor.link} rel="" className="block">
                      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-8 text-center border border-gray-100 h-full">
                        <div className="flex items-center justify-center w-20 h-20 mx-auto bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-full mb-6">
                          <i
                            className={`${contributor.icon} text-green-600 text-2xl`}
                          ></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {contributor.name}
                        </h3>
                        <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto my-3 rounded-full"></div>
                        <p className="text-sm text-gray-500 mt-2">
                          {contributor.role}
                        </p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 财务公示部分 */}
          <div className="mb-24">
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                <span className="relative">
                  财务公示
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-green-200 -z-10"></span>
                </span>
              </h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-600 mb-8 text-center text-lg leading-relaxed">
                  青衫Neuro始终秉持公开透明的财务管理原则，定期发布资产负债表和资金池报告，以确保所有资金的使用都能得到合理说明。
                </p>
                <div className="flex justify-center">
                  <a
                    href="https://www.zhihu.com/pin/1866410059749277697"
                    className="group inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition duration-300"
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
