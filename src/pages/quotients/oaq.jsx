import React, { Component } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import Layout from "@/components/Layout";
import QuestionItem from "@/components/QuestionItem";
import QuestionResult from "@/components/QuestionResult";
import QuestionInfo from "@/components/QuestionInfo";
import QuestionInfoAlert from "@/components/QuestionInfoAlert";
import QuestionAlert from "@/components/QuestionAlert";
import questionData from "@/_data/questionOAQ.json";
import BackToTop from "@/components/BackToTop";
import { FormattedMessage, injectIntl } from "react-intl";

class OAQ extends Component {
  state = {
    quotientsName: "answers_oaq",
    answers: {},
    showResultModal: false,
    showAlertModal: false,

    score: 0,
    result: "",
  };

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
    Object.entries(this.state.answers).forEach(([questionId, data]) => {
      score += data.value;
    });
    return score;
  }
  calculateResult(score) {
    if (score <= 94) {
      return this.props.intl.formatMessage({ id: "OAQ.resultNonAlexithymia" });
    } else if (score <= 112) {
      return this.props.intl.formatMessage({
        id: "OAQ.resultPossibleAlexithymia",
      });
    } else {
      return this.props.intl.formatMessage({ id: "OAQ.resultAlexithymia" });
    }
  }
  render() {
    const { score, result, showResultModal, showAlertModal, answers } =
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
                href="https://mp.weixin.qq.com/s?__biz=MzIyMzgyMjY5NQ==&mid=2247484022&idx=1&sn=f088cdb2e239aa9db799fbce6aa3315a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs mt-1 text-gray-600 hover:text-gray-700 transition-colors underline"
              >
                <FormattedMessage id="OAQ.referenceIntro" />
              </Link>
              <p className="text-xs text-gray-600 mt-1">
                <FormattedMessage id="OAQ.reference" />
              </p>
              <p className="text-xs text-gray-500 mt-1">
                <FormattedMessage id="OAQ.reference1" />
              </p>
              <p className="text-xs text-gray-500 mt-1">
                <Link
                  href="https://www.amazon.com/Emotionally-Dumb-Alexithymia-Jason-Thompson-ebook/dp/B0038VZJ9U/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="underline hover:text-gray-600 transition-colors"
                >
                  <FormattedMessage id="OAQ.reference2" />
                </Link>
              </p>
              <p className="text-xs text-gray-500 mt-2">
                <FormattedMessage id="quotients.cookieNotice" />
                <button
                  onClick={this.clearAnswersCookie}
                  className="underline hover:text-gray-600 transition-colors"
                >
                  <FormattedMessage id="quotients.cookieDelete" />
                </button>
              </p>
            </>
          }
        />
      </>
    );

    return (
      <Layout
        title={intl.formatMessage({ id: "OAQ.title" })}
        description={intl.formatMessage({ id: "OAQ.description" })}
      >
        <main className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* 信息 */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                <FormattedMessage id="OAQ.pageTitle" />
              </h1>

              <div className="mt-2">{infoContent}</div>
            </div>

            <QuestionInfoAlert content={infoContent} />

            <form className="space-y-8" onSubmit={this.handleSubmit}>
              {/* 量表问题 */}
              <div className="space-y-6">
                {this.getQuestionDetail().map((question) => (
                  <QuestionItem
                    key={`quotients_${question.id}`}
                    question={question}
                    degree={[
                      intl.formatMessage({ id: "OAQ.degreeAgree" }),
                      intl.formatMessage({ id: "OAQ.degreeDisagree" }),
                    ]}
                    onAnswerChange={this.handleRadioChange}
                    checkedIndex={answers[question.id]?.index}
                  />
                ))}
              </div>
              <button
                type="submit"
                id="quotients-submit-oaq"
                className="w-full bg-gradient-to-r from-green-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-green-600/90 hover:to-indigo-600/90 transition-all duration-200 shadow-lg shadow-green-600/20"
              >
                <FormattedMessage id="quotients.submit" />
              </button>
            </form>
          </div>
          <QuestionResult
            scores={[
              {
                title: intl.formatMessage({ id: "OAQ.scoreTest" }),
                subtitle: intl.formatMessage({ id: "OAQ.scoreSubtitle" }),
                score: score,
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
        </main>
      </Layout>
    );
  }
}

export default injectIntl(OAQ);
