import React, { Component } from "react";
import "remixicon/fonts/remixicon.css";

class BackToTop extends Component {
  state = {
    visible: false,
    progress: 0,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { isShowProgress, isShowButton } = this.props;

    // 计算滚动进度
    if (isShowProgress) {
      const footer = document.querySelector("footer");
      let scrolled = 0;
      if (footer) {
        const winScroll = window.scrollY;
        const footerTop = footer.offsetTop;
        const viewportHeight = window.innerHeight;
        const maxScroll = footerTop - viewportHeight;
        scrolled = Math.min((winScroll / maxScroll) * 100, 100);
        this.setState({ progress: scrolled });
      } else {
        const winScroll = document.documentElement.scrollTop;
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        scrolled = (winScroll / height) * 100;
        this.setState({ progress: scrolled });
      }
    }

    // 控制返回顶部按钮显示
    if (isShowButton) {
      if (window.scrollY > 300) {
        this.setState({ visible: true });
      } else {
        this.setState({ visible: false });
      }
    }
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  render() {
    const { visible, progress } = this.state;
    const { isShowProgress, isShowButton } = this.props;

    if (!isShowButton && !isShowProgress) return null;

    const size = 40; // 圆形大小
    const strokeWidth = 4; // 进度条宽度
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (progress / 100) * circumference;

    return (
      <div className="fixed right-4 bottom-4 z-50">
        <div className="relative w-10 h-10">
          {isShowButton && visible && (
            <button
              onClick={this.scrollToTop}
              className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary-light flex items-center justify-center z-10"
              aria-label="回到顶部"
            >
              <i className="ri-arrow-up-line text-xl text-gray-600" />
            </button>
          )}
          {isShowProgress && (
            // SVG 圆环进度条
            <svg
              className="absolute transform -rotate-90 w-10 h-10 z-20 pointer-events-none"
              viewBox={`0 0 ${size} ${size}`}
            >
              <circle
                className="text-gray-200"
                strokeWidth={strokeWidth}
                stroke="currentColor"
                fill="transparent"
                r={radius}
                cx={size / 2}
                cy={size / 2}
              />
              <circle
                className="text-primary transition-all duration-300"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r={radius}
                cx={size / 2}
                cy={size / 2}
              />
            </svg>
          )}
        </div>
      </div>
    );
  }
}

export default BackToTop;
