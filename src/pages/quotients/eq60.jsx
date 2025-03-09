import React, { Component } from "react";
import Layout from "@/components/Layout";
import QuestionItem from "@/components/QuestionItem";
import QuestionResult from "@/components/QuestionResult";
import questionData from "@/data/questionEQ60.json";
import BackToTop from "@/components/BackToTop";

class EQ60 extends Component {
  state = {
    answers: {},
    showModal: false,
    score: 0,
    result: "",
  };

  closeModal = () => {
    this.setState({ showModal: false });
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
      showModal: true,
    });
  };

  getQuestionDetail() {
    return questionData.questionEQ60;
  }

  calculateScores() {
    let score = 0;
    Object.entries(this.state.answers).forEach(([questionId, value]) => {
      score += value;
    });
    return score;
  }

  calculateResult(score) {
    if (score <= 30) {
      return "您不太可能有ASD";
    } else {
      return "您可能有ASD";
    }
  }

  render() {
    return (
      <Layout
        title="共情商测试量表 (Empathy Quotient) | 青衫 Neuro"
        description="本量表效度存在争议，仅供参考"
      >
        <main className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* 信息 */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900">
              共情商测试量表 (Empathy Quotient)
              </h1>
              <p className="text-gray-500 mt-2">
                本量表效度存在争议，仅供参考
              </p>
              <p className="text-sm text-gray-500 mt-2">
                *本量表仅供参考，不能作为诊断依据。
              </p>
              <div className="text-xs text-gray-400 mt-2 space-y-1">
                <p>本量表参考文献：</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>
                    <a
                      href="https://pubmed.ncbi.nlm.nih.gov/15162935/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-600"
                    >
                      The Empathy Quotient: An Investigation of Adults with Asperger Syndrome or High Functioning Autism, and Normal Sex Differences
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
                    degree={["非常赞同", "绝对反对"]}
                    scores={[4, 3, 2, 1]}
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
                score: this.state.score,
              },
            ]}
            result={this.state.result}
            showModal={this.state.showModal}
            onClose={this.closeModal}
          />

          <BackToTop isShowButton={true} isShowProgress={true} />
        </main>
      </Layout>
    );
  }
}

export default EQ60;
