import React from "react";
import "remixicon/fonts/remixicon.css";

const QuestionInfo = ({ icon, iconBg = "bg-rose-100", content }) => {
  return (
    <div className="mt-3 rounded-lg border border-gray-200 bg-gray-100 p-4">
      <div className="inline-flex items-center justify-center">
        <span
          className={`h-8 w-8 flex-shrink-0 ${iconBg} flex items-center justify-center rounded-full`}
        >
          {icon}
        </span>
        <span className="ml-3 text-left">{content}</span>
      </div>
    </div>
  );
};

export default QuestionInfo;
