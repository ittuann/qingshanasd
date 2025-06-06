import React from "react";
import "remixicon/fonts/remixicon.css";
import QuestionResultCard from "@/components/QuestionResultCard";
import { FormattedMessage } from "react-intl";

const QuestionResult = ({ scores, result, showModal, onClose }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black/60" onClick={onClose}></div>
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative z-10 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <div className="text-xl font-semibold text-gray-900">
            <FormattedMessage id="QuestionResult.title" />
          </div>
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
              <div className="text-lg font-semibold">
                <FormattedMessage id="QuestionResult.resultTitle" />
              </div>
            </div>
            <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">{result}</p>
          </div>

          {/* 注意事项 */}
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <i className="ri-information-line text-yellow-500 mr-2"></i>
              <span className="text-sm font-medium text-yellow-800">
                <FormattedMessage id="QuestionResult.noticeTitle" />
              </span>
            </div>
            <div className="text-sm text-yellow-700 space-y-1">
              <p>
                <FormattedMessage
                  id="quotients.info1"
                  values={{
                    strong: (chunks) => <strong>{chunks}</strong>,
                  }}
                />
              </p>
              <p>
                <FormattedMessage
                  id="quotients.info2"
                  values={{
                    strong: (chunks) => <strong>{chunks}</strong>,
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionResult;
