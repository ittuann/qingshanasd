import React, { useContext } from "react";
import Layout from "@/components/Layout";
import dynamic from "next/dynamic";
import MapInfo, { MapInfoNav, MapInfoSelect } from "@/components/MapInfo";
import BackToTop from "@/components/BackToTop";
import {
  MedicalDataProvider,
  MedicalDataContext,
} from "@/context/MedicalDataContext";
import { FormattedMessage, useIntl } from "react-intl";

const MapChart = dynamic(() => import("@/components/MapChart"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[500px]">
      <div className="text-lg text-gray-600">
        <i className="ri-road-map-line text-primary"></i>
        <FormattedMessage id="MedicalMap.loading" />
        <br />
        <FormattedMessage id="MedicalMap.loadingInfo" />
      </div>
    </div>
  ),
});

const MapContainer = () => {
  const { dataType } = useContext(MedicalDataContext);

  // 海外版不渲染地图
  if (dataType === "abroad") {
    return null;
  }

  return (
    <div className="relative bg-white rounded-xl shadow-lg p-4 transition-all duration-300 hover:shadow-xl min-h-[500px]">
      <MapChart />
    </div>
  );
};

function MedicalMap() {
  const intl = useIntl();

  return (
    <Layout
      title={`${intl.formatMessage({ id: "MedicalMap.title" })} | ${intl.formatMessage({ id: "siteName" })}`}
      description={intl.formatMessage({ id: "MedicalMap.description" })}
    >
      <MedicalDataProvider>
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* 标题区域 */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4 relative inline-block">
            <FormattedMessage id="MedicalMap.title" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/20"></div>
          </h1>

          <MapContainer />

          {/* 按钮组 */}
          <MapInfoSelect />

          {/* 提示区域 */}
          <div className="bg-white rounded-xl shadow-lg p-6 mt-4 border-l-4 border-primary bg-gradient-to-r from-primary/5 to-transparent">
            <p className="font-semibold text-gray-900 mb-3">小提示:</p>
            <p className="text-gray-600 mb-2">
              由于就诊地图的统计难免有疏漏，部分可诊断ADHD/ASD的医院可能并没有被收录。建议先在自己本地三甲医院尝试就诊。
            </p>
            <p className="text-gray-600">
              一种可以判断某医院是否可以诊断ADHD的方法是，查询该院的药物价格公示，如果里面有哌甲酯或者托莫西汀等ADHD药物，通常意味着该医院可以诊断ADHD（但不一定能诊断成人ADHD）。另外即使药价公示里没有也不代表该医院不能诊断，因为有些医院药价公示更新不及时，几年前没有不代表现在也没有。
            </p>
          </div>

          {/* 导航栏 */}
          <MapInfoNav />

          <div className="mt-8">
            {/* 信息区域 */}
            <MapInfo />
          </div>

          <BackToTop isShowButton={true} isShowProgress={false} />
        </div>
      </MedicalDataProvider>
    </Layout>
  );
}

export default MedicalMap;
