import React, { Component } from "react";
import Layout from "@/components/Layout";
import QuestionItem from "@/components/QuestionItem";
import QuestionResult from "@/components/QuestionResult";
import questionData from "@/data/questionAQA.json";
import BackToTop from "@/components/BackToTop";

class AQA extends Component {
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
    return questionData.questionAQA;
  }

  calculateScores() {
    let score = 0;
    Object.entries(this.state.answers).forEach(([questionId, value]) => {
      score += value;
    });
    return score;
  }

  calculateResult(score) {
    if (score <= 21) {
      return "非孤独症谱系";
    } else if (score <= 25) {
      return "您有一些孤独症谱系的特质";
    } else if (score <= 31) {
      return "您可能有高功能孤独症谱系障碍";
    } else {
      return "您非常可能有高功能孤独症谱系障碍";
    }
  }

  render() {
    return (
      <Layout
        title="孤独商成人测试量表 | 青衫 Neuro"
        description="孤独商成人测试量表，用于测试成年人的孤独症商数"
      >
        <main className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* 信息 */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                成人ASD筛查量表
              </h1>
              <p className="text-gray-500 mt-2">焦虑抑郁等都可能造成分值偏高</p>
              <p className="text-gray-500 mt-2">
                最终确诊需要结合儿童时期的情况
              </p>
              <p className="text-sm text-gray-500 mt-2">
                *本量表仅供参考，不能作为诊断依据。
              </p>
              <div className="text-xs text-gray-400 mt-2 space-y-1">
                <p>本量表参考文献：</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>
                    Simon Baron-Cohen, et al. The Autism-Spectrum Quotient (AQ):
                    Evidence from Asperger Syndrome/High-Functioning Autism,
                    Malesand Females, Scientists and Mathematicians. 31: J
                    Autism Dev Disord 5-17. 2001.
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
                score: this.state.score,
              },
              {
                title: "社交技巧",
                subtitle: "得分",
                score: this.state.score,
              },
              {
                title: "交流",
                subtitle: "得分",
                score: this.state.score,
              },
              {
                title: "注意力切换",
                subtitle: "得分",
                score: this.state.score,
              },
              {
                title: "细节注意力",
                subtitle: "得分",
                score: this.state.score,
              },
              {
                title: "交流",
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

export default AQA;
