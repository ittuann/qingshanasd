import React, { Component } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import "remixicon/fonts/remixicon.css";

class CardCustom extends Component {
  render() {
    const { icon, iconColor, iconBg, title, description, tags, link } =
      this.props;

    // 检测外部链接 在新标签打开
    const isExternalLink = link && link.startsWith("https://");

    return (
      <Link
        href={link}
        className="block h-full max-w-lg group"
        target={isExternalLink ? "_blank" : undefined}
        rel={isExternalLink ? "noopener noreferrer" : ""}
      >
        <Card className="flex flex-col h-full transition-all duration-150 shadow-md hover:shadow-xl hover:shadow-accent/20 active:shadow-xl active:shadow-accent/20 border-2 border-transparent hover:border-primary active:border-primary bg-card hover:bg-gradient-to-br hover:from-accent/5 hover:to-card active:bg-gradient-to-br active:from-accent/5 active:to-card">
          <CardContent className="flex flex-col h-full">
            <div className="flex-grow">
              <div
                className={`w-16 h-16 ${iconBg} rounded-full flex items-center justify-center mb-4`}
              >
                <i
                  className={`${icon} ${iconColor} text-2xl group-hover:scale-120 group-active:scale-120 transition`}
                ></i>
              </div>
              <div className="text-lg font-semibold text-card-foreground mb-2">
                {title}
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                {description}
              </p>
            </div>

            {/* 标签部分 */}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-xs ${iconColor} ${iconBg}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </Link>
    );
  }
}

export default CardCustom;
