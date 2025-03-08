import React, { Component } from "react";

class QuestionIntervention extends Component {
  render() {
    return (
      <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
      <div className="border-l-4 border-red-500 pl-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">如果感到极为不适，这里可以帮到你：</h3>
        <div className="space-y-4">
          <div>
            <a
              href="https://mp.weixin.qq.com/s/pRYTYnuvUvlJNNn-bVagcQ"
              target="_blank"
              className="text-lg font-medium text-gray-800 mb-2 hover:text-green-600 underline"
            >
              中国心理危机干预热线汇总
            </a>
          </div>
          <div>
            <a
              href="https://mp.weixin.qq.com/s/f2bpVY437pUO-tp0Ibgn9A"
              target="_blank"
              className="text-lg font-medium text-gray-800 mb-2 hover:text-green-600 underline"
            >
              心理CPR：每个人都要学会的危机干预
            </a>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default QuestionIntervention;
