import React, { Component } from "react";
import Layout from "@/components/Layout";
import QuestionItem from "@/components/QuestionItem";
import QuestionResult from "@/components/QuestionResult";
import questionData from "@/data/questionAQA.json";
import BackToTop from "@/components/BackToTop";

class AQA extends Component {
  state = {
    answers: {},
    showResultModal: false,
    score: 0,
    result: "",
    socialScore: 0,
    attentionSwitchingScore: 0,
    attentionDetailScore: 0,
    communicationScore: 0,
    imaginationScore: 0,
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
    return questionData.questionAQA;
  }

  calculateScores() {
    const { answers } = this.state;
    const questionSocial = [1, 11, 13, 15, 22, 36, 44, 45, 47, 48];
    const questionAttentionSwitching = [2, 4, 10, 16, 25, 32, 34, 37, 43, 46];
    const questionAttentionDetail = [5, 6, 9, 12, 19, 23, 28, 29, 30, 49];
    const questionCommunication = [7, 17, 18, 26, 27, 31, 33, 35, 38, 39];
    const questionImagination = [3, 8, 14, 20, 21, 24, 40, 41, 42, 50];

    const socialScore = questionSocial.reduce(
      (sum, id) => sum + (answers[id] || 0),
      0,
    );
    const attentionSwitchingScore = questionAttentionSwitching.reduce(
      (sum, id) => sum + (answers[id] || 0),
      0,
    );
    const attentionDetailScore = questionAttentionDetail.reduce(
      (sum, id) => sum + (answers[id] || 0),
      0,
    );
    const communicationScore = questionCommunication.reduce(
      (sum, id) => sum + (answers[id] || 0),
      0,
    );
    const imaginationScore = questionImagination.reduce(
      (sum, id) => sum + (answers[id] || 0),
      0,
    );

    const totalScore =
      socialScore +
      attentionSwitchingScore +
      attentionDetailScore +
      communicationScore +
      imaginationScore;

    this.setState({
      socialScore,
      attentionSwitchingScore,
      attentionDetailScore,
      communicationScore,
      imaginationScore,
    });

    return totalScore;
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
    const {
      score,
      result,
      showResultModal,
      socialScore,
      attentionSwitchingScore,
      attentionDetailScore,
      communicationScore,
      imaginationScore,
    } = this.state;

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
              <div className="text-xs text-gray-400 mt-2">
                <p>本量表参考文献：</p>
                <p className="mt-1">
                  Simon Baron-Cohen, et al. The Autism-Spectrum Quotient (AQ):
                  Evidence from Asperger Syndrome/High-Functioning Autism,
                  Malesand Females, Scientists and Mathematicians. 31: J Autism
                  Dev Disord 5-17. 2001.
                </p>
                <p className="mt-1">翻译：青衫</p>
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
                提交
              </button>
            </form>
          </div>

          <QuestionResult
            scores={[
              {
                title: "测试分数",
                subtitle: "总分",
                score: score,
              },
              {
                title: "分析分数",
                subtitle: "社交技巧",
                score: socialScore,
              },
              {
                title: "分析分数",
                subtitle: "交流",
                score: communicationScore,
              },
              {
                title: "分析分数",
                subtitle: "注意力切换",
                score: attentionSwitchingScore,
              },
              {
                title: "分析分数",
                subtitle: "细节注意力",
                score: attentionDetailScore,
              },
              {
                title: "分析分数",
                subtitle: "想象力",
                score: imaginationScore,
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

export default AQA;
