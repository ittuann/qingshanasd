import React, { Component } from "react";
import Layout from "@/components/Layout";
import QuestionItem from "@/components/QuestionItem";
import QuestionResult from "@/components/QuestionResult";
import QuestionInfo from "@/components/QuestionInfo";
import questionData from "@/data/questionADHD.json";
import BackToTop from "@/components/BackToTop";

class ADHD extends Component {
  state = {
    answers: {},
    showResultModal: false,
    showInfoModal: true,
    scoreA: 0,
    scoreB: 0,
    result: "",
  };

  closeModal = () => {
    this.setState({ showResultModal: false });
  };

  closeInfoModal = () => {
    this.setState({ showInfoModal: false });
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
    Object.entries(this.state.answers).forEach(([questionId, value]) => {
      const id = parseInt(questionId);
      if (id >= 1 && id <= 9) {
        scoreA += value;
      } else if (id >= 10 && id <= 18) {
        scoreB += value;
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
    const { showResultModal, showInfoModal, scoreA, scoreB, result } =
      this.state;

    const infoContent = (
      <>
        <div className="bg-gray-50 border border-gray-100 rounded-md p-4">
          <div className="flex justify-center items-center">
            <div className="inline-flex items-center">
              <div
                className={`flex-shrink-0 w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center`}
              >
                <i className="ri-information-2-line text-xl text-rose-400"></i>
              </div>
              <div className="ml-3 text-left">
                <p className="text-gray-600">焦虑抑郁等都可能造成分值偏高</p>
                <p className="text-sm text-gray-500 mt-2">
                  本量表仅供筛查，不代表确诊或作为诊断依据
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-xs text-gray-400 space-y-2 mt-3">
          <p className="font-medium">本量表参考文献：</p>
          <ul className="list-disc pl-4 space-y-1.5">
            <li>
              <a
                href="https://www.hcp.med.harvard.edu/ncs/ftpdir/adhd/adhd/18Q_Chinese%20(Traditional)_final.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-600 transition-colors"
              >
                18Q-Chinese-Traditional.pdf
              </a>{" "}
              转自世界卫生组织 Composite International Diagnostic Interview
            </li>
          </ul>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          * 本站符合 GDPR 数据保护条例。不会使用 Cookie
          记录和存储任何可识别个人身份的信息
        </p>
      </>
    );

    return (
      <Layout
        title="成人 ADHD 自填量表 (ASRS) | 青衫 Neuro"
        description="注意力缺陷过动障碍（ADHD）成人测试量表，用于筛查成年人存在ADHD的可能性"
      >
        <main className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                成人 ADHD 自填量表 (ASRS)
              </h1>
              <div className="mt-2">{infoContent}</div>
            </div>

            <QuestionInfo
              showModal={showInfoModal}
              onClose={this.closeInfoModal}
              content={infoContent}
            />

            {/* 量表 */}
            <form className="space-y-8" onSubmit={this.handleSubmit}>
              {/* 量表问题 */}
              <div className="space-y-6">
                {this.getQuestionDetail().map((question) => (
                  <QuestionItem
                    key={`quotients_${question.id}`}
                    question={question}
                    degree={["经常这样", "从来没有"]}
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

          <BackToTop isShowButton={true} isShowProgress={true} />
        </main>
      </Layout>
    );
  }
}

export default ADHD;
