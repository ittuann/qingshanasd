import React from "react";
import Layout from "@/components/Layout";
import CardCustom from "@/components/CardCustom";

const resources = [
  {
    icon: "ri-book-2-line",
    iconColor: "text-lime-700",
    iconBg: "bg-lime-100",
    title: "初识神经多样性指南",
    description: "带你走进8亿NS(神经多样性)的世界——23年9月发布",
    tags: ["手册", "指南", "PDF"],
    link: "/assets/pdf/初识神经多样性指南.pdf",
  },
  {
    icon: "ri-book-2-line",
    iconColor: "text-emerald-700",
    iconBg: "bg-emerald-100",
    title: "独立生活能力指南",
    description: "独立生活能力清单电子书 Checklist——23年7月发布",
    tags: ["手册", "指南", "PDF"],
    link: "/assets/pdf/独立生活能力清单.pdf",
  },
  {
    icon: "ri-book-2-line",
    iconColor: "text-green-700",
    iconBg: "bg-green-100",
    title: "成年DCD人士生活指南",
    description: "与发育协调性障碍共同生活——21年9月发布",
    tags: ["手册", "指南", "PDF"],
    link: "/assets/pdf/与DCD共同生活.pdf",
  },
];

export default function Resources() {
  return (
    <Layout
      title="电子版手册 | 青衫 Neuro"
      description="青衫 Neuro 电子版手册，提供多种神经多样性相关的指南和手册"
    >
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <CardCustom key={index} {...resource} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
