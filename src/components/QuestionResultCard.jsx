import React from "react";

const QuestionResultCard = ({ title, subtitle, score }) => {
  return (
    <div className="from-primary/10 flex items-center justify-between rounded-lg bg-gradient-to-r to-indigo-600/10 p-4">
      <div>
        <h4 className="text-sm font-medium text-gray-500">{title}</h4>
        <p className="mt-1 text-lg font-semibold">{subtitle}</p>
      </div>
      <div className="text-4xl font-bold text-stone-700">{score}</div>
    </div>
  );
};

export default QuestionResultCard;
