import React, { Component } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import Layout from "@/components/Layout";
import QuestionItem from "@/components/QuestionItem";
import QuestionResult from "@/components/QuestionResult";
import QuestionInfo from "@/components/QuestionInfo";
import QuestionInfoAlert from "@/components/QuestionInfoAlert";
import QuestionAlert from "@/components/QuestionAlert";
import questionData from "@/_data/questionADHD.json";
import BackToTop from "@/components/BackToTop";
import { FormattedMessage, injectIntl } from "react-intl";

class ADHD extends Component {
  state = {
    quotientsName: "answers_adhd",
    answers: {},
    showResultModal: false,
    showAlertModal: false,
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

  closeResultModal = () => {
    this.setState({ showResultModal: false });
  };

  closeAlertModal = () => {
    this.setState({ showAlertModal: false });
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
      this.setState({ showAlertModal: true });
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
    return questionData.question;
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
        A: questionData.result[0].text,
      },
      B: {
        A: questionData.result[1].text,
        B: questionData.result[2].text,
      },
      C: {
        A: questionData.result[3].text,
        B: questionData.result[4].text,
      },
      D: {
        A: questionData.result[5].text,
        B: questionData.result[6].text,
      },
      E: {
        A: questionData.result[7].text,
        B: questionData.result[8].text,
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
    const { showResultModal, showAlertModal, scoreA, scoreB, result, answers } =
      this.state;
    const { intl } = this.props;

    const infoContent = (
      <>
        <QuestionInfo
          icon={<i className="ri-information-2-line text-xl text-rose-400"></i>}
          content={
            <>
              <p className="text-gray-600">
                <FormattedMessage
                  id="quotients.info1"
                  values={{
                    strong: (chunks) => <strong>{chunks}</strong>,
                  }}
                />
              </p>
              <p className="text-gray-600 mt-2">
                <FormattedMessage
                  id="quotients.info2"
                  values={{
                    strong: (chunks) => <strong>{chunks}</strong>,
                  }}
                />
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
                <FormattedMessage id="ADHD.referenceIntro" />
              </Link>
              <p className="text-xs text-gray-600 mt-1">
                <FormattedMessage id="ADHD.reference" />
              </p>
              <p className="text-xs text-gray-500 mt-1">
                <Link
                  href="https://www.hcp.med.harvard.edu/ncs/ftpdir/adhd/adhd/Old%20Versions/18Q-Chinese-Traditional.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-600 transition-colors"
                >
                  18Q-Chinese-Traditional.pdf
                </Link>{" "}
                <FormattedMessage id="ADHD.reference1" /> Composite
                International Diagnostic Interview
              </p>
              <p className="text-xs text-gray-500 mt-2">
                <FormattedMessage id="quotients.cookieNotice" />
                <button
                  onClick={this.clearAnswersCookie}
                  className="underline hover:text-gray-600 transition-colors"
                >
                  <FormattedMessage id="quotients.cookieDelete" />
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
        title={intl.formatMessage({ id: "ADHD.title" })}
        description={intl.formatMessage({ id: "ADHD.description" })}
      >
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900 mb-4">
                <FormattedMessage id="ADHD.pageTitle" />
              </h1>

              <div className="mt-2">{infoContent}</div>
            </div>

            <QuestionInfoAlert content={infoContent} />

            {/* 量表 */}
            <form className="space-y-8" onSubmit={this.handleSubmit}>
              {/* 量表问题 */}
              <div className="space-y-10">
                {this.getQuestionDetail().map((question) => (
                  <QuestionItem
                    key={`quotients_${question.id}`}
                    question={question}
                    degree={[
                      questionData.degree.agree,
                      questionData.degree.disagree,
                    ]}
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
                <FormattedMessage id="quotients.submit" />
              </button>
            </form>
          </div>

          <QuestionResult
            questionTitle={intl.formatMessage({ id: "ADHD.pageTitle" })}
            scores={[
              {
                title: questionData.score[0].title,
                subtitle: questionData.score[0].subtitle,
                score: scoreA,
              },
              {
                title: questionData.score[1].title,
                subtitle: questionData.score[1].subtitle,
                score: scoreB,
              },
            ]}
            result={result}
            showModal={showResultModal}
            onClose={this.closeResultModal}
          />

          {!showResultModal && (
            <BackToTop isShowButton={true} isShowProgress={true} />
          )}

          {/* 未完成量表填写提示 */}
          <QuestionAlert open={showAlertModal} onClose={this.closeAlertModal} />
        </div>
      </Layout>
    );
  }
}

export default injectIntl(ADHD);
