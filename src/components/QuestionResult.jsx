import React from "react";
import "remixicon/fonts/remixicon.css";
import QuestionResultCard from "@/components/QuestionResultCard";

const QuestionResult = ({ scores, result, showModal, onClose }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black/60" onClick={onClose}></div>
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative z-10 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900">量表结果</h3>
          <button
            className="text-gray-400 hover:text-gray-500"
            onClick={onClose}
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        {/* 量表分数 */}
        <div className="space-y-6">
          {scores.map((score, index) => (
            <QuestionResultCard key={index} {...score} />
          ))}

          {/* 量表结论 */}
          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center mb-3">
              <i className="ri-mental-health-line text-primary text-xl mr-2"></i>
              <h3 className="text-lg font-semibold">测试结果表示</h3>
            </div>
            <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">{result}</p>
          </div>

          {/* 注意事项 */}
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <i className="ri-information-line text-yellow-500 mr-2"></i>
              <span className="text-sm font-medium text-yellow-800">
                注意事项
              </span>
            </div>
            <div className="text-sm text-yellow-700 space-y-1">
              <p>* 本量表仅供筛查，不代表确诊或作为诊断依据</p>
              <p>* 如有困扰建议及时就医咨询</p>
              <p>
                * 本站符合 GDPR
                数据保护条例。不会使用Cookie记录和存储任何可识别个人身份的信息
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionResult;
