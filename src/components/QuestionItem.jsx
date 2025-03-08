import React, { Component } from "react";

class QuestionItem extends Component {
  render() {
    const { question, degree, onAnswerChange } = this.props;
    return (
      <div className="question-item">
        <p className="text-gray-800">
          {question.id}. {question.text}
        </p>
        <div className="flex justify-between items-center my-4">
          <div className="text-sm text-gray-500 flex items-center">
            {degree[0]}
          </div>
          <div className="flex gap-4 md:gap-8">
            {[4, 3, 2, 1, 0].map((val) => (
              <label className="radio-label" key={val}>
                <input
                  type="radio"
                  name={question.id}
                  value={val}
                  className="hidden peer"
                  onChange={() => onAnswerChange(question.id, val)}
                />
                <div className="w-4 h-4 md:w-6 md:h-6 border-2 border-gray-300 rounded-full peer-checked:border-green-600 peer-checked:bg-green-600"></div>
              </label>
            ))}
          </div>
          <div className="text-sm text-gray-500 flex items-center">
            {degree[1]}
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionItem;
