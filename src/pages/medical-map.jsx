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

                {/* 图例信息 */}
                <div className="md:absolute md:top-6 md:right-6 mt-4 md:mt-0 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg w-full md:w-auto">
                  <div className="flex md:flex-col flex-wrap gap-3 md:space-y-2">
                    <div className="flex items-center flex-1 md:flex-none">
                      <div className="w-4 h-4 bg-pink-200 rounded mr-2"></div>
                      <span className="text-sm text-gray-600">
                        可诊断ADHD与ASD
                      </span>
                    </div>
                    <div className="flex items-center flex-1 md:flex-none">
                      <div className="w-4 h-4 bg-blue-100 rounded mr-2"></div>
                      <span className="text-sm text-gray-600">可诊断ADHD</span>
                    </div>
                    <div className="flex items-center flex-1 md:flex-none">
                      <div className="w-4 h-4 bg-green-100 rounded mr-2"></div>
                      <span className="text-sm text-gray-600">可诊断ASD</span>
                    </div>
                    <div className="flex items-center flex-1 md:flex-none">
                      <div className="w-4 h-4 bg-gray-200 rounded mr-2"></div>
                      <span className="text-sm text-gray-600">
                        暂无就诊信息
                      </span>
                    </div>
                  </div>
                </div>
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
                由于就诊地图的统计难免有疏漏，部分可诊断adhd/asd的医院可能并没有收收录。建议先在自己本地二甲医院尝试就诊。
              </p>
              <p className="text-gray-600 mb-4">
                一种可以判断某医院是否可以就诊adhd的方法是，直询该医院的药物价格公示，如果里面有p2或者tmxt，那该医院一定能诊断adhd（但不一定能诊断成人ADHD）
              </p>
              <p className="text-gray-600">
                如果药物价格公示中不含pjz和tmxt，不代表该一定医院诊断不了adhd（因为有的医院药物价格公示没有及时更新。几年前没有pjz和tmxt，不代表现在也没有）
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
