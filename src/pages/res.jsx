import React from "react";
import Layout from "@/components/Layout";
import CardCustom from "@/components/CardCustom";
import { FormattedMessage, useIntl } from "react-intl";

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
    icon: "ri-hospital-line",
    iconColor: "text-violet-500",
    iconBg: "bg-violet-100",
    title: "就诊故事",
    description: "就诊经历分享 就诊者的个人体验",
    tags: ["就诊", "经历"],
    link: "https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1516342663438974979",
  },
  {
    icon: "ri-user-heart-line",
    iconColor: "text-cyan-500",
    iconBg: "bg-cyan-100",
    title: "个人故事",
    description: "我们，只是有不同和障碍而已",
    tags: ["故事", "分享"],
    link: "https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1337447071791808512",
  },
  {
    icon: "ri-user-voice-line",
    iconColor: "text-indigo-500",
    iconBg: "bg-indigo-100",
    title: "孤独者说",
    description: "ASD 科普及自倡导",
    tags: ["自倡导", "科普"],
    link: "https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1799112142906769409",
  },
  {
    icon: "ri-user-location-line",
    iconColor: "text-purple-500",
    iconBg: "bg-purple-100",
    title: "分心者说",
    description: "ADHD 科普及自倡导",
    tags: ["自倡导", "科普"],
    link: "https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=2034139219853361154",
  },
  {
    icon: "ri-team-line",
    iconColor: "text-teal-500",
    iconBg: "bg-teal-100",
    title: "家长助攻",
    description: "一起前行，一起努力，一起发声",
    tags: ["家长", "支持"],
    link: "https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1527570966829121539",
  },
  {
    icon: "ri-community-line",
    iconColor: "text-pink-500",
    iconBg: "bg-pink-100",
    title: "医学前沿",
    description: "基于循证医学的科普",
    tags: ["医学", "科普"],
    link: "https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=2034170521843449858",
  },
  {
    icon: "ri-mental-health-line",
    iconColor: "text-sky-500",
    iconBg: "bg-sky-100",
    title: "共现障碍",
    description: "发育障碍，往往与很多其他障碍共现",
    tags: ["共现", "障碍"],
    link: "https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1516372997148819457",
  },
  {
    icon: "ri-guide-line",
    iconColor: "text-fuchsia-500",
    iconBg: "bg-fuchsia-100",
    title: "人类社会生存指南",
    description:
      "ASDer 社交、职场规则、应对挑战与障碍的秘诀 hhhh，其他 ND 人士和 NT 也可以适用哦",
    tags: ["指南", "规则"],
    link: "https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1534892050054168579",
  },
  {
    icon: "ri-heart-line",
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-100",
    title: "共情",
    description:
      "ASD 缺少同理心？怕是对同理心有什么误解。同理心（共情）包括两种不同的方面，而 ASD 人士甚至可以有更强的情感共情",
    tags: ["共情", "情感"],
    link: "https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1337438238923128832",
  },
];

export default function Resources() {
  const intl = useIntl();

  return (
    <Layout
      title={intl.formatMessage({ id: "Res.title" })}
      description={intl.formatMessage({ id: "Res.description" })}
    >
      <div className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="relative mb-8 inline-block text-3xl font-semibold">
          <FormattedMessage id="Res.heading" />
          <div className="bg-primary/20 absolute bottom-0 left-0 h-1 w-full"></div>
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <CardCustom key={index} {...resource} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
