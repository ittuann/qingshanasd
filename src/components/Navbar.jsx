import React, { Component } from "react";
import { Pacifico } from "next/font/google";
import { withRouter } from "next/router";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

class Navbar extends Component {
  state = {
    isMobileMenuOpen: false,
  };

  isActive = (path) => {
    return this.props.router.pathname === path
      ? "text-green-600 font-medium"
      : "text-gray-500 hover:text-purple-400";
  };

  toggleMobileMenu = () => {
    this.setState((prev) => ({ isMobileMenuOpen: !prev.isMobileMenuOpen }));
  };

  render() {
    return (
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <i className="ri-brain-line text-green-600 text-2xl mr-2"></i>
                <span className={`${pacifico.className} text-xl text-gray-900`}>
                  青衫 Neuro
                </span>
              </a>
            </div>

            {/* 移动端菜单按钮 */}
            <div className="md:hidden flex items-center">
              <button
                onClick={this.toggleMobileMenu}
                className="text-gray-500 hover:text-purple-400"
              >
                <i
                  className={`ri-${this.state.isMobileMenuOpen ? "close" : "menu"}-line text-2xl`}
                ></i>
              </button>
            </div>

            {/* 桌面端菜单 */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className={this.isActive("/")}>
                量表
              </Link>
              <Link href="/about" className={this.isActive("/about")}>
                关于
              </Link>
              <Link
                href="/medical-map"
                className={this.isActive("/medical-map")}
              >
                就诊地图
              </Link>
              <Link href="/res" className={this.isActive("/res")}>
                资源引索
              </Link>
              <Link href="#" className={this.isActive("/terms")}>
                使用条款
              </Link>
            </div>
          </div>

          {/* 移动端菜单面板 */}
          {this.state.isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="/"
                  className={`block px-3 py-2 rounded-md ${this.isActive("/")}`}
                >
                  量表
                </Link>
                <Link
                  href="/about"
                  className={`block px-3 py-2 rounded-md ${this.isActive("/about")}`}
                >
                  关于
                </Link>
                <Link
                  href="/medical-map"
                  className={`block px-3 py-2 rounded-md ${this.isActive("/medical-map")}`}
                >
                  就诊地图
                </Link>
                <Link
                  href="/res"
                  className={`block px-3 py-2 rounded-md ${this.isActive("/res")}`}
                >
                  资源引索
                </Link>
                <Link
                  href="#"
                  className={`block px-3 py-2 rounded-md ${this.isActive("/terms")}`}
                >
                  使用条款
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
