import React, { Component } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import Layout from "@/components/Layout";
import QuestionItem from "@/components/QuestionItem";
import QuestionResult from "@/components/QuestionResult";
import QuestionInfo from "@/components/QuestionInfo";
import QuestionInfoAlert from "@/components/QuestionInfoAlert";
import questionData from "@/_data/questionADHD.json";
import BackToTop from "@/components/BackToTop";

class ADHD extends Component {
  state = {
    quotientsName: "answers_adhd",
    answers: {},
    showResultModal: false,
    showInfoModal: true,
    scoreA: 0,
    scoreB: 0,
    result: "",
  };

  // React method
  componentDidMount() {
    const savedAnswers = Cookies.get(this.state.quotientsName);
    if (savedAnswers) {
      this.setState({
        answers: JSON.parse(savedAnswers),
      });
    }
  }

  closeModal = () => {
    this.setState({ showResultModal: false });
  };

  closeInfoModal = () => {
    this.setState({ showInfoModal: false });
  };

  handleRadioChange = (questionId, value, index) => {
    const newAnswers = {
      ...this.state.answers,
      // { questionId: { index: number, value: number } }
      [questionId]: { index, value: parseInt(value) },
    };

    // 保存到Cookie
    Cookies.set(this.state.quotientsName, JSON.stringify(newAnswers), {
      expires: 1 / 12,
    });

    this.setState({ answers: newAnswers });
  };

  clearAnswersCookie = () => {
    Cookies.remove(this.state.quotientsName);
    this.setState({ answers: {} });
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

    const { scoreA, scoreB } = this.calculateScores();
    const result = this.calculateResult(scoreA, scoreB);

    this.setState({
      scoreA,
      scoreB,
      result,
      showResultModal: true,
    });
  };

  getQuestionDetail() {
    return questionData.questionADHD;
  }

  calculateScores() {
    // 计算A部分（1-9题）和B部分（10-18题）的得分
    let scoreA = 0,
      scoreB = 0;
    Object.entries(this.state.answers).forEach(([questionId, data]) => {
      const id = parseInt(questionId);
      if (id >= 1 && id <= 9) {
        scoreA += data.value;
      } else if (id >= 10 && id <= 18) {
        scoreB += data.value;
      }
    });

    return { scoreA, scoreB };
  }

  calculateResult(scoreA, scoreB) {
    const resultADHD = {
      A: {
        A: "您不太可能有ADHD",
      },
      B: {
        A: "您很有可能有ADHD-I（注意力缺失为主）",
        B: "您非常有可能有ADHD-I（注意力缺失为主）",
      },
      C: {
        A: "您很有可能有ADHD-H（多动/冲动障碍为主）",
        B: "您非常有可能有ADHD-H（多动/冲动障碍为主）",
      },
      D: {
        A: "您很有可能有ADHD-C（注意力缺失与多动/冲动障碍混合）",
        B: "您非常有可能有ADHD-C（注意力缺失与多动/冲动障碍混合）",
      },
      E: {
        A: "您很有可能有ADHD-C（注意力缺失与多动/冲动障碍混合，其中多动/冲动障碍比较严重）",
        B: "您很有可能有ADHD-C（注意力缺失与多动/冲动障碍混合，其中注意力缺失比较严重）",
      },
    };

    let type, subType;
    if (scoreA <= 16) {
      if (scoreB <= 16) {
        (type = "A"), (subType = "A");
      } else if (scoreB <= 23) {
        (type = "C"), (subType = "A");
      } else {
        (type = "C"), (subType = "B");
      }
    } else if (scoreA <= 23) {
      if (scoreB <= 16) {
        (type = "B"), (subType = "A");
      } else if (scoreB <= 23) {
        (type = "D"), (subType = "A");
      } else {
        (type = "E"), (subType = "A");
      }
    } else {
      if (scoreB <= 16) {
        (type = "B"), (subType = "B");
      } else if (scoreB <= 23) {
        (type = "E"), (subType = "B");
      } else {
        (type = "D"), (subType = "B");
      }
    }
    return resultADHD[type][subType];
  }

  render() {
    const { showResultModal, showInfoModal, scoreA, scoreB, result, answers } =
      this.state;

    const infoContent = (
      <>
        <QuestionInfo
          icon={<i className="ri-information-2-line text-xl text-rose-400"></i>}
          content={
            <>
              <p className="text-gray-600">
                焦虑 / 抑郁 / 睡眠障碍<strong>等其他情况</strong>
                均有可能造成分值偏高
              </p>
              <p className="text-gray-600 mt-2">
                本量表<strong>仅供筛查</strong>，<strong>不代表</strong>
                确诊或作为诊断依据
              </p>
            </>
          }
        />

        <QuestionInfo
          icon={<i className="ri-lightbulb-line text-xl text-primary"></i>}
          iconBg="bg-green-100"
          content={
            <>
              <Link
                href="https://mp.weixin.qq.com/s?__biz=MzIyMzgyMjY5NQ==&mid=2247484259&idx=1&sn=c3aa8e8dbef9f5445212b1dfa2a31cd4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs mt-1 text-gray-600 hover:text-gray-700 transition-colors underline"
              >
                量表介绍
              </Link>
              <p className="text-xs text-gray-600 mt-1">本量表参考文献：</p>
              <p className="text-xs text-gray-500 mt-1">
                <Link
                  href="https://www.hcp.med.harvard.edu/ncs/ftpdir/adhd/adhd/Old%20Versions/18Q-Chinese-Traditional.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-600 transition-colors"
                >
                  18Q-Chinese-Traditional.pdf
                </Link>{" "}
                转自世界卫生组织 Composite International Diagnostic Interview
              </p>
              <p className="text-xs text-gray-500 mt-2">
                * 页面在您的本地浏览器中使用 Cookie
                临时保存量表填写选项，并于2小时后自动
                <button
                  onClick={this.clearAnswersCookie}
                  className="underline hover:text-gray-600 transition-colors"
                >
                  删除
                </button>
                。
              </p>
            </>
          }
        />
      </>
    );

    return (
      <Layout
        title="成人 ADHD 自填量表 (ASRS) | 青衫 Neuro"
        description="注意力缺陷过动障碍 (ADHD) 成人测试量表，用于筛查成年人存在ADHD的可能性"
      >
        <main className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900 mb-4">
                成人 ADHD 自填量表 (ASRS)
              </h1>

              <div className="mt-2">{infoContent}</div>
            </div>

            <QuestionInfoAlert
              showModal={showInfoModal}
              onClose={this.closeInfoModal}
              content={infoContent}
            />

            {/* 量表 */}
            <form className="space-y-8" onSubmit={this.handleSubmit}>
              {/* 量表问题 */}
              <div className="space-y-10">
                {this.getQuestionDetail().map((question) => (
                  <QuestionItem
                    key={`quotients_${question.id}`}
                    question={question}
                    degree={["经常这样", "从来没有"]}
                    onAnswerChange={this.handleRadioChange}
                    checkedIndex={answers[question.id]?.index}
                  />
                ))}
              </div>

              <button
                type="submit"
                id="quotients-submit-adhd"
                className="w-full bg-gradient-to-r from-green-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-green-600/90 hover:to-indigo-600/90 transition-all duration-200 shadow-lg shadow-green-600/20"
              >
                提交
              </button>
            </form>
          </div>

          <QuestionResult
            scores={[
              {
                title: "A部分",
                subtitle: "注意力障碍",
                score: scoreA,
              },
              {
                title: "B部分",
                subtitle: "多动/冲动障碍",
                score: scoreB,
              },
            ]}
            result={result}
            showModal={showResultModal}
            onClose={this.closeModal}
          />

          {!showResultModal && !showInfoModal && (
            <BackToTop isShowButton={true} isShowProgress={true} />
          )}
        </main>
      </Layout>
    );
  }
}

export default ADHD;
