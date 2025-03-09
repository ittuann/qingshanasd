import React, { Component } from "react";
import Layout from "@/components/Layout";
import Card from "@/components/Card";

const scales = [
  {
    icon: "ri-brain-fill",
    iconColor: "text-orange-500",
    iconBg: "bg-orange-100",
    title: "成人 ADHD 自填量表 (ASRS)",
    description: "ADHD多动症成人测试量表，用于测试成年人的多动症情况。",
    tags: ["多动症", "量表", "在线测试", "ADHD", "成人测试"],
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
    description: "本测试的目的是检验成人的神经多样性神经典型性特点",
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
];

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-8">
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
