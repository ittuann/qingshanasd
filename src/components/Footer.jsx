import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import "remixicon/fonts/remixicon.css";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-white mt-8">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/favicon.ico"
                  alt="logo"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                <span className="font-['Pacifico'] text-xl text-gray-900">
                  青衫 Neuro
                </span>
              </div>
              <p className="text-gray-500 text-sm">
                致力于神经多元的科普、资讯、资源
              </p>
              <a
                href="https://qingshanasd.cn/"
                className="text-gray-500 hover:text-primary transition-colors duration-300 text-sm inline-flex items-center mt-1"
              >
                <i className="ri-earth-line text-sm mr-1"></i>
                qingshanasd.cn
              </a>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-4">资源</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 hover:text-gray-900 text-sm"
                  >
                    量表自测
                  </Link>
                </li>
                <li>
                  <Link
                    href="/medical-map"
                    className="text-gray-500 hover:text-gray-900 text-sm"
                  >
                    就诊地图
                  </Link>
                </li>
                <li>
                  <Link
                    href="/res"
                    className="text-gray-500 hover:text-gray-900 text-sm"
                  >
                    资源引索
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-4">关于</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-500 hover:text-gray-900 text-sm"
                  >
                    关于我们
                  </Link>
                </li>
                <li>
                  <Link
                    href="/term"
                    className="text-gray-500 hover:text-gray-900 text-sm"
                  >
                    使用条款
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-4">联系</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:qingshan.aspie@gmail.com"
                    className="text-gray-500 hover:text-gray-900 text-sm"
                  >
                    邮件
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zhihu.com/people/QingshanAspie"
                    target="_blank"
                    className="text-gray-500 hover:text-gray-900 text-sm"
                  >
                    知乎
                  </a>
                </li>
                <li>
                  <a
                    href="https://mp.weixin.qq.com/mp/homepage?__biz=MzIyMzgyMjY5NQ%3D%3D&hid=1"
                    target="_blank"
                    className="text-gray-500 hover:text-gray-900 text-sm"
                  >
                    微信公众号
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/ittuann/qingshanasd"
                    target="_blank"
                    className="text-gray-500 hover:text-gray-900 text-sm"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8">
            <div className="flex flex-col items-center space-y-4">
              <p className="text-center text-gray-500 text-sm">
                量表版本: 1.1.7
              </p>
              <p className="text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} 青衫 Neuro. All rights reserved.
              </p>
              <div className="flex items-center space-x-2">
                <p className="text-center text-gray-500 text-sm">
                  除特别说明外，本站内容均采用
                  <a
                    href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
                    target="_blank"
                    className="text-primary hover:text-primary/80 transition"
                  >
                    知识共享署名-非商业性使用-禁止演绎 4.0 国际许可协议
                  </a>
                  进行许可。
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <a
                  href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
                  target="_blank"
                  rel="license"
                >
                  <img
                    src="/assets/img/cc-by-nc-nd.svg"
                    alt="CC BY-NC-ND 4.0"
                    width="88"
                    height="31"
                  />
                </a>
              </div>
              <div className="flex flex-col items-center space-y-2 mt-4">
                <a
                  href="https://github.com/ittuann/qingshanasd"
                  target="_blank"
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                >
                  <i className="ri-github-fill"></i>
                  <span>网站开源代码</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
