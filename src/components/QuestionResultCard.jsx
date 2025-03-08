import React from "react";

const QuestionResultCard = ({ title, subtitle, score }) => {
  return (
    <div className="flex justify-between items-center p-4 rounded-lg bg-gradient-to-r from-green-600/10 to-indigo-600/10">
      <div>
        <h4 className="text-sm font-medium text-gray-500">{title}</h4>
        <p className="text-lg font-semibold mt-1">{subtitle}</p>
      </div>
      <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-indigo-600 bg-clip-text text-transparent">
        {score}
      </div>
    </div>
  );
};

export default QuestionResultCard;
