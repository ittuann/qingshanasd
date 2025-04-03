import React from "react";
import "remixicon/fonts/remixicon.css";

const QuestionInfo = ({ icon, iconBg = "bg-rose-100", content }) => {
  return (
    <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 mt-3">
      <div className="inline-flex items-center justify-center">
        <span
          className={`flex-shrink-0 w-8 h-8 ${iconBg} rounded-full flex items-center justify-center`}
        >
          {icon}
        </span>
        <span className="ml-3 text-left">{content}</span>
      </div>
    </div>
  );
};

export default QuestionInfo;
