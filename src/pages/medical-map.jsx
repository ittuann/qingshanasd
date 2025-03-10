import React, { Component } from "react";
import Layout from "@/components/Layout";
import dynamic from "next/dynamic";
import MapInfo, { MapInfoNav } from "@/components/MapInfo";
import BackToTop from "@/components/BackToTop";

const MapChart = dynamic(() => import("@/components/MapChart"), {
  ssr: false,
});

class MedicalMap extends Component {
  render() {
    return (
      <Layout>
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 py-8">
            {/* 标题区域 */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4 relative inline-block">
                ADHD/ASD 就诊地图
                <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500/20"></div>
              </h1>

              <div className="relative bg-white rounded-xl shadow-lg p-4 transition-all duration-300 hover:shadow-xl min-h-[500px]">
                <MapChart />
              </div>
            </div>

            {/* 按钮组 */}
            <div className="flex justify-end space-x-3 my-4">
              <button className="px-4 py-2 text-sm bg-green-500 text-white rounded-lg shadow-sm hover:bg-green-500/90 transition-all duration-200">
                国内版
              </button>
              <button className="px-4 py-2 text-sm bg-white text-gray-700 rounded-lg shadow-sm hover:bg-gray-50 transition-all duration-200">
                儿童版
              </button>
              <button className="px-4 py-2 text-sm bg-white text-gray-700 rounded-lg shadow-sm hover:bg-gray-50 transition-all duration-200">
                国际版
              </button>
            </div>

            {/* 提示区域 */}
            <div className="bg-white rounded-xl shadow-lg p-6 my-8 border-l-4 border-green-500 bg-gradient-to-r from-green-500/5 to-transparent">
              <p className="text-gray-600 mb-4">
                由于就诊地图的统计难免有疏漏，部分可诊断ADHD/ASD的医院可能并没有被收录。建议先在自己本地三甲医院尝试就诊。
              </p>
              <p className="text-gray-600 mb-4">
                一种可以判断某医院是否可以就诊ADHD的方法是，直询该医院的药物价格公示，如果里面有p2或者tmxt等ADHD药物，那该医院一定能诊断ADHD（但不一定能诊断成人ADHD）。
              </p>
              <p className="text-gray-600">
                如果药物价格公示中不含pjz和tmxt，不代表该一定医院诊断不了ADHD（因为有的医院药物价格公示没有及时更新。几年前没有pjz和tmxt，不代表现在也没有）
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
        </main>
      </Layout>
    );
  }
}

export default MedicalMap;
