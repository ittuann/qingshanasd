import React, { useRef } from "react";
import Image from "next/image";
import "remixicon/fonts/remixicon.css";
import html2canvas from "html2canvas-pro";
import { FormattedMessage } from "react-intl";
import QuestionResultCard from "@/components/QuestionResultCard";

const QuestionResult = ({
  questionTitle,
  scores,
  result,
  showModal,
  onClose,
}) => {
  // 图片下载功能
  const resultRef = useRef(null);
  const handleSaveAsImage = () => {
    if (resultRef.current) {
      const element = resultRef.current;
      const originalStyle = {
        maxHeight: element.style.maxHeight,
        overflowY: element.style.overflowY,
      };
      element.style.maxHeight = "none";
      element.style.overflowY = "visible";

      html2canvas(element, {
        backgroundColor: null,
        ignoreElements: (el) => el.id === "ignore-image",
      }).then((canvas) => {
        element.style.maxHeight = originalStyle.maxHeight;
        element.style.overflowY = originalStyle.overflowY;

        const link = document.createElement("a");
        link.download = `QingshanNeuro-Result-${new Date().toLocaleString()}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
      });
    }
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/60" onClick={onClose}></div>
      <div
        ref={resultRef}
        className="relative z-10 mx-4 max-h-[90vh] w-full max-w-md overflow-y-auto rounded-lg bg-white p-6"
      >
        {/* 量表结果标题 */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="text-xl font-semibold text-gray-900">
              <FormattedMessage id="QuestionResult.title" />
            </div>
            {questionTitle && (
              <div className="mt-0.5 text-sm text-gray-500">
                {questionTitle}
              </div>
            )}
          </div>
          <div id="ignore-image" className="flex items-center">
            <button
              className="mr-2 text-gray-400 hover:text-gray-500"
              onClick={handleSaveAsImage}
            >
              <i className="ri-download-line text-xl"></i>
            </button>
            <button
              className="text-gray-400 hover:text-gray-500"
              onClick={onClose}
            >
              <i className="ri-close-line text-xl"></i>
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {/* 量表分数 */}
          {scores.map((score, index) => (
            <QuestionResultCard key={index} {...score} />
          ))}

          {/* 量表结论 */}
          <div className="border-t border-gray-200">
            <div className="mt-3 flex items-center">
              <i className="ri-mental-health-line text-primary mr-2 text-xl"></i>
              <div className="text-lg font-semibold">
                <FormattedMessage id="QuestionResult.resultTitle" />
              </div>
            </div>
            <p className="mt-3 rounded-lg bg-gray-50 p-4 text-gray-600">
              {result}
            </p>
          </div>

          {/* 注意事项 */}
          <div className="rounded-lg bg-yellow-50 p-4">
            <div className="mb-2 flex items-center">
              <i className="ri-information-line mr-2 text-yellow-500"></i>
              <span className="text-sm font-medium text-yellow-800">
                <FormattedMessage id="QuestionResult.noticeTitle" />
              </span>
            </div>
            <div className="space-y-1 text-sm text-yellow-700">
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

          {/* 时间信息 */}
          <div id="image-footer" className="pt-1">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div>
                <div>
                  {new Date().toLocaleString()} (
                  {Intl.DateTimeFormat().resolvedOptions().timeZone})
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  <FormattedMessage id="siteName" /> qingshanasd.cn
                </div>
              </div>
              <Image
                src="/assets/img/qr-code.png"
                alt="QR Code"
                width={64}
                height={64}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionResult;
