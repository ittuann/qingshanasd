import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import Card from "@/components/Card";

const scales = [
  {
    icon: "ri-brain-line",
    iconColor: "text-orange-500",
    iconBg: "bg-orange-100",
    title: "成人 ADHD 自填量表 (ASRS)",
    description:
      "注意力缺陷过动障碍（ADHD）成人测试量表，用于筛查成年人存在ADHD的可能性",
    tags: ["量表", "在线测试", "ADHD", "成人测试"],
    link: "/quotients/adhd",
  },
  {
    icon: "ri-empathize-line",
    iconColor: "text-blue-500",
    iconBg: "bg-blue-100",
    title: "孤独商儿童测试量表",
    description: "孤独商儿童测试量表，用于测试儿童的孤独症商数",
    tags: ["孤独症", "量表", "在线测试", "AQ", "儿童测试"],
    link: "/quotients/aq-c",
  },
  {
    icon: "ri-heart-pulse-line",
    iconColor: "text-red-500",
    iconBg: "bg-red-100",
    title: "边缘人格障碍表现量表(BSL-23)",
    description: "边缘人格障碍表现量表 BSL-23",
    tags: ["量表", "在线测试", "BSL-23"],
    link: "/quotients/bpd",
  },
  {
    icon: "ri-user-heart-line",
    iconColor: "text-purple-500",
    iconBg: "bg-purple-100",
    title: "孤独商成人测试量表",
    description: "孤独商成人测试量表，用于测试成年人的孤独商数",
    tags: ["孤独症", "量表", "在线测试", "AQ", "成人测试"],
    link: "/quotients/aq-a",
  },
  {
    icon: "ri-mental-health-line",
    iconColor: "text-green-500",
    iconBg: "bg-green-100",
    title: "Aspie-Quiz 测试量表",
    description: "本测试的目的是检验成人的神经多样性/神经典型性特点",
    tags: ["孤独症", "量表", "在线测试", "AQ", "成人测试"],
    link: "https://www.rdos.net/china/index.php",
  },
  {
    icon: "ri-hearts-line",
    iconColor: "text-yellow-500",
    iconBg: "bg-yellow-100",
    title: "G2述情障碍测试量表",
    description: '述情障碍又译作"情感表达不能"或"情感难言症"',
    tags: ["述情障碍", "量表", "在线测试", "OAQ"],
    link: "/quotients/oaq",
  },
  {
    icon: "ri-guide-line",
    iconColor: "text-teal-500",
    iconBg: "bg-teal-100",
    title: "共情商测试量表 (Empathy Quotient)",
    description: "本量表效度存在争议，仅供参考",
    tags: ["共情商", "量表", "在线测试", "EQ", "成人测试"],
    link: "/quotients/eq60",
  },
];

export default class Index extends Component {
  render() {
    return (
      <Layout>
        {/* Banner */}
        <div className="w-full px-4 py-12">
          <div className="container max-w-6xl mx-auto">
            <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-8">
              {/* Content */}
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                  青衫 Neuro
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-content">
                  为神经多元群体提供支持
                </h2>
                <p className="text-lg md:text-xl mb-8 text-primary-content/80">
                  因为你我，这个世界终将丰富多彩
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Link
                    href="/medical-map"
                    className="px-6 py-2 bg-accent text-accent-content rounded-full font-medium hover:bg-primary transition-colors"
                  >
                    就诊地图
                  </Link>
                  <Link
                    href="/about"
                    className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-primary transition-colors"
                  >
                    关于
                  </Link>
                </div>
              </div>

              <div className="flex justify-center md:justify-start">
                <Image
                  src="/assets/img/logo.png"
                  alt="logo"
                  width={128}
                  height={128}
                  priority={true}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 量表 */}
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scales.map((scale, index) => (
              <Card key={index} {...scale} />
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}
