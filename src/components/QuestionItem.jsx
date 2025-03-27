import React, { Component } from "react";

class QuestionItem extends Component {
  render() {
    const { question, degree, onAnswerChange } = this.props;

    return (
      <div className="question-item">
        <p className="text-lg text-gray-900">
          {question.id}. {question.text}
        </p>
        <div className="flex items-center justify-center my-6">
          <div className="text-lg text-gray-700 items-center text-center break-words mr-6">
            {degree[0]}
          </div>
          <div className="flex gap-4 md:gap-8 items-center">
            {question.scoresAagree.map((val, index) => {
              // 圆圈尺寸
              let size = "w-4 h-4 md:w-6 md:h-6";
              if (index === 0 || index === question.scoresAagree.length - 1) {
                // 两端最大
                size = "w-8 h-8 md:w-9 md:h-9";
              } else if (
                index === 1 ||
                index === question.scoresAagree.length - 2
              ) {
                size = "w-7 h-7 md:w-8 md:h-8";
              } else if (index === 2) {
                size = "w-6 h-6 md:w-7 md:h-7";
              }

              return (
                <label
                  className="radio-label items-center justify-center"
                  key={`quotients_${question.id}_${index}`}
                >
                  <input
                    type="radio"
                    name={question.id}
                    value={val}
                    className="hidden peer"
                    onChange={() => onAnswerChange(question.id, val)}
                  />
                  <div
                    className={`${size} border-2 border-gray-300 rounded-full peer-checked:border-primary peer-checked:bg-primary duration-200`}
                  ></div>
                </label>
              );
            })}
          </div>
          <div className="text-lg text-gray-700 items-center text-center break-words ml-6">
            {degree[1]}
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionItem;
