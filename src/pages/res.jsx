import React from "react";
import Layout from "@/components/Layout";
import Card from "@/components/Card";

const resources = [
  {
    icon: "ri-book-2-line",
    iconColor: "text-lime-500",
    iconBg: "bg-lime-100",
    title: "《电子版手册》",
    description: "青衫 Neuro 发布的所有 PDF 手册",
    tags: ["手册", "指南", "PDF"],
    link: "/public",
  },
  {
    icon: "ri-star-line",
    iconColor: "text-green-500",
    iconBg: "bg-green-100",
    title: "青衫精选专题",
    description: "职业发展，医学部沿，感官问题，运用障碍，残障权益",
    tags: ["专题", "精选"],
    link: "https://mp.weixin.qq.com/mp/homepage?__biz=MzIyMzgyMjY5NQ==&hid=1",
  },
  {
    icon: "ri-heart-line",
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-100",
    title: "共情",
    description:
      "ASD 缺少同理心？柏拉图对同理心有什么误解。同理心（共情）包括两种不同的方面，而 ASD 人士其实可以有更强的情感共情",
    tags: ["共情", "情感"],
    link: "https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIyMzgyMjY5NQ==&action=getalbum&album_id=1337438238923128832",
  },
  {
    icon: "ri-team-line",
    iconColor: "text-teal-500",
    iconBg: "bg-teal-100",
    title: "家长助攻",
    description: "一起前行，一起努力，一起发声",
    tags: ["家长", "支持"],
    link: "https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&__biz=MzIyMzgyMjY5NQ==&scene=1&album_id=1527570966829121539",
  },
  {
    icon: "ri-user-heart-line",
    iconColor: "text-cyan-500",
    iconBg: "bg-cyan-100",
    title: "个人故事",
    description: "我们，只是有不同和障碍而已",
    tags: ["故事", "分享"],
    link: "https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&__biz=MzIyMzgyMjY5NQ==&scene=1&album_id=1337447071791808512",
  },
  {
    icon: "ri-mental-health-line",
    iconColor: "text-sky-500",
    iconBg: "bg-sky-100",
    title: "ASD 共现障碍",
    description: "ADHD 焦虑障碍 抑郁障碍 等",
    tags: ["共现", "障碍"],
    link: "https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&__biz=MzIyMzgyMjY5NQ==&scene=1&album_id=1516372997148819457",
  },
  {
    icon: "ri-user-voice-line",
    iconColor: "text-indigo-500",
    iconBg: "bg-indigo-100",
    title: "孤独者说",
    description: "ASD 科普及自倡导",
    tags: ["自倡导", "科普"],
    link: "https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIyMzgyMjY5NQ==&action=getalbum&album_id=1799112142906769409",
  },
  {
    icon: "ri-hospital-line",
    iconColor: "text-violet-500",
    iconBg: "bg-violet-100",
    title: "就诊故事",
    description: "国内外 ASD ADHD 等发育障碍辅诊经历分享",
    tags: ["就诊", "经历"],
    link: "https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&__biz=MzIyMzgyMjY5NQ==&scene=1&album_id=1516342663438974979",
  },
  {
    icon: "ri-guide-line",
    iconColor: "text-fuchsia-500",
    iconBg: "bg-fuchsia-100",
    title: "人类社会生存指南",
    description:
      "ASDerf 社交、职场规则、应对挑战与障碍的秘诀 hhhh，其他 NA 人士和 INT 也可以适用哦",
    tags: ["指南", "规则"],
    link: "https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&__biz=MzIyMzgyMjY5NQ==&scene=1&album_id=1534892050054168579",
  },
];

export default function Resources() {
  return (
    <Layout title="资源索引 - 青衫 Neuro">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} {...resource} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
