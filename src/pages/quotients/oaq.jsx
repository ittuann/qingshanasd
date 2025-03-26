import React, { Component } from "react";
import Layout from "@/components/Layout";
import QuestionItem from "@/components/QuestionItem";
import QuestionResult from "@/components/QuestionResult";
import questionData from "@/data/questionOAQ.json";
import BackToTop from "@/components/BackToTop";

class OAQ extends Component {
  state = {
    answers: {},
    showResultModal: false,
    score: 0,
    result: "",
  };

  closeModal = () => {
    this.setState({ showResultModal: false });
  };

  handleRadioChange = (questionId, value) => {
    this.setState((prevState) => ({
      answers: {
        ...prevState.answers,
        [questionId]: parseInt(value),
      },
    }));
  };

  handleSubmit = (e) => {
    // 检查提交前是否所有问题都已经回答
    e.preventDefault();
    const answeredQuestions = Object.keys(this.state.answers).length;
    const requiredQuestions = this.getQuestionDetail().filter(
      (q) => q.id !== 0,
    ).length;
    if (answeredQuestions < requiredQuestions) {
      alert("请完成量表所有问题的作答");
      return;
    }

    const score = this.calculateScores();
    const result = this.calculateResult(score);

    this.setState({
      score,
      result,
      showResultModal: true,
    });
  };

  getQuestionDetail() {
    return questionData.questionOAQ;
  }

  calculateScores() {
    let score = 0;
    Object.entries(this.state.answers).forEach(([questionId, value]) => {
      score += value;
    });
    return score;
  }

  calculateResult(score) {
    if (score <= 94) {
      return "非诉情障碍";
    } else if (score <= 112) {
      return "可能有诉情障碍";
    } else {
      return "诉情障碍";
    }
  }

  render() {
    const { score, result, showResultModal } = this.state;

    return (
      <Layout
        title="G2述情障碍测试量表 | 青衫 Neuro"
        description="述情障碍又译作“情感表达不能”或“情感难言症”"
      >
        <main className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* 信息 */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                OAQ- G2述情障碍测试量表
              </h1>
              <p className="text-sm text-gray-500 mt-2">
                *本量表仅供参考，不能作为诊断依据。
              </p>
              <div className="text-xs text-gray-400 mt-2 space-y-1">
                <p>本量表参考文献：</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>
                    青衫取得了OAQ- G2（Online Alexithymia
                    Questionnaire）量表作者授权，将量表翻译成中文版：OAQ-
                    G2述情障碍在线测试
                  </li>
                  <li>
                    <a
                      href="https://www.amazon.com/Emotionally-Dumb-Alexithymia-Jason-Thompson-ebook/dp/B0038VZJ9U/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-600"
                    >
                      Jason著有与述情障碍相关的两本书（点击购买）
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <form className="space-y-8" onSubmit={this.handleSubmit}>
              {/* 量表问题 */}
              <div className="space-y-6">
                {this.getQuestionDetail().map((question) => (
                  <QuestionItem
                    key={`quotients_${question.id}`}
                    question={question}
                    degree={["赞同", "反对"]}
                    onAnswerChange={this.handleRadioChange}
                  />
                ))}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-green-600/90 hover:to-indigo-600/90 transition-all duration-200 shadow-lg shadow-green-600/20"
              >
                提交答案
              </button>
            </form>
          </div>

          <QuestionResult
            scores={[
              {
                title: "测试分数",
                subtitle: "得分",
                score: score,
              },
            ]}
            result={result}
            showModal={showResultModal}
            onClose={this.closeModal}
          />

          <BackToTop isShowButton={true} isShowProgress={true} />
        </main>
      </Layout>
    );
  }
}

export default OAQ;
