import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";
import { Pacifico } from "next/font/google";
import { withRouter } from "next/router";
import "remixicon/fonts/remixicon.css";
import { FormattedMessage } from "react-intl";
import LangSwitcher from "@/i18n/LangSwitcher";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

class Navbar extends Component {
  state = {
    isMobileMenuOpen: false,
  };

  isActive = (path) => {
    const isCurrentPath = this.props.router.pathname === path;
    return isCurrentPath
      ? "text-primary font-medium border-b-2 border-primary"
      : "text-gray-500 hover:text-accent hover-underline";
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
              <Link href="/" className="flex items-center">
                <Image
                  src="/assets/img/logo.webp"
                  alt="logo"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                <span className={`${pacifico.className} text-xl text-gray-900`}>
                  <FormattedMessage id="siteName" />
                </span>
              </Link>
            </div>

            {/* 移动端菜单按钮 */}
            <div className="md:hidden flex items-center">
              <button
                onClick={this.toggleMobileMenu}
                className="text-gray-500 hover:text-purple-400"
                id="mobile-nav-menu-button"
                aria-label="Toggle mobile menu"
              >
                <i
                  className={`ri-${this.state.isMobileMenuOpen ? "close" : "menu"}-line text-2xl`}
                ></i>
              </button>
            </div>

            {/* 桌面端菜单 */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className={this.isActive("/")}>
                <FormattedMessage id="Navbar.quotients" />
              </Link>
              <Link href="/about" className={this.isActive("/about")}>
                <FormattedMessage id="Navbar.about" />
              </Link>
              <Link
                href="/medical-map"
                className={this.isActive("/medical-map")}
              >
                <FormattedMessage id="Navbar.medicalMap" />
              </Link>
              <Link href="/res" className={this.isActive("/res")}>
                <FormattedMessage id="Navbar.res" />
              </Link>
              <Link href="/term" className={this.isActive("/term")}>
                <FormattedMessage id="Navbar.terms" />
              </Link>
              <div className="">
                <LangSwitcher />
              </div>
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
                  <FormattedMessage id="Navbar.quotients" />
                </Link>
                <Link
                  href="/about"
                  className={`block px-3 py-2 rounded-md ${this.isActive("/about")}`}
                >
                  <FormattedMessage id="Navbar.about" />
                </Link>
                <Link
                  href="/medical-map"
                  className={`block px-3 py-2 rounded-md ${this.isActive("/medical-map")}`}
                >
                  <FormattedMessage id="Navbar.medicalMap" />
                </Link>
                <Link
                  href="/res"
                  className={`block px-3 py-2 rounded-md ${this.isActive("/res")}`}
                >
                  <FormattedMessage id="Navbar.res" />
                </Link>
                <Link
                  href="/term"
                  className={`block px-3 py-2 rounded-md ${this.isActive("/term")}`}
                >
                  <FormattedMessage id="Navbar.terms" />
                </Link>
                <div className="">
                  <LangSwitcher />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
