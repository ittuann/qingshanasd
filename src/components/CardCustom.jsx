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
        className="group block h-full max-w-lg"
        target={isExternalLink ? "_blank" : undefined}
        rel={isExternalLink ? "noopener noreferrer" : ""}
      >
        <Card className="hover:shadow-accent/20 active:shadow-accent/20 hover:border-primary active:border-primary bg-card hover:from-accent/5 hover:to-card active:from-accent/5 active:to-card flex h-full flex-col border-2 border-transparent shadow-md transition-all duration-150 hover:bg-gradient-to-br hover:shadow-xl active:bg-gradient-to-br active:shadow-xl">
          <CardContent className="flex h-full flex-col">
            <div className="flex-grow">
              <div
                className={`h-16 w-16 ${iconBg} mb-4 flex items-center justify-center rounded-full`}
              >
                <i
                  className={`${icon} ${iconColor} text-2xl transition group-hover:scale-120 group-active:scale-120`}
                ></i>
              </div>
              <div className="text-card-foreground mb-2 text-lg font-semibold">
                {title}
              </div>
              <p className="text-muted-foreground mb-4 text-sm">
                {description}
              </p>
            </div>

            {/* 标签部分 */}
            {tags && tags.length > 0 && (
              <div className="mt-auto flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`rounded-full px-3 py-1 text-xs ${iconColor} ${iconBg}`}
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
