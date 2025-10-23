import React, { Component } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import Layout from "@/components/Layout";
import QuestionInfo from "@/components/QuestionInfo";
import QuestionInfoAlert from "@/components/QuestionInfoAlert";
import QuestionItem from "@/components/QuestionItem";
import QuestionResult from "@/components/QuestionResult";
import QuestionAlert from "@/components/QuestionAlert";
import questionData from "@/_data/questionAQC.json";
import BackToTop from "@/components/BackToTop";
import { FormattedMessage, injectIntl } from "react-intl";

class AQC extends Component {
  state = {
    quotientsName: "answers_aqc",
    answers: {},
    showResultModal: false,
    showAlertModal: false,

    score: 0,
    result: "",
    socialScore: 0,
    attentionSwitchingScore: 0,
    attentionDetailScore: 0,
    communicationScore: 0,
    imaginationScore: 0,
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
    return questionData.question;
  }

  calculateScores() {
    const { answers } = this.state;
    const questionSocial = [1, 11, 13, 15, 22, 36, 44, 45, 47, 48];
    const questionAttentionSwitching = [2, 4, 10, 16, 25, 32, 34, 37, 43, 46];
    const questionAttentionDetail = [5, 6, 9, 12, 19, 23, 28, 29, 30, 49];
    const questionCommunication = [7, 17, 18, 26, 27, 31, 33, 35, 38, 39];
    const questionImagination = [3, 8, 14, 20, 21, 24, 40, 41, 42, 50];

    const socialScore = questionSocial.reduce(
      (sum, id) => sum + (answers[id]?.value || 0),
      0,
    );
    const attentionSwitchingScore = questionAttentionSwitching.reduce(
      (sum, id) => sum + (answers[id]?.value || 0),
      0,
    );
    const attentionDetailScore = questionAttentionDetail.reduce(
      (sum, id) => sum + (answers[id]?.value || 0),
      0,
    );
    const communicationScore = questionCommunication.reduce(
      (sum, id) => sum + (answers[id]?.value || 0),
      0,
    );
    const imaginationScore = questionImagination.reduce(
      (sum, id) => sum + (answers[id]?.value || 0),
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
    if (score < 76) {
      return questionData.result[0].text;
    } else {
      return questionData.result[1].text;
    }
  }

  render() {
    const {
      score,
      result,
      showResultModal,
      showAlertModal,
      socialScore,
      attentionSwitchingScore,
      attentionDetailScore,
      communicationScore,
      imaginationScore,
      answers,
    } = this.state;
    const { intl } = this.props;

    const infoContent = (
      <>
        <QuestionInfo
          icon={<i className="ri-information-2-line text-xl text-rose-400"></i>}
          content={
            <>
              <p className="text-gray-600">
                <FormattedMessage
                  id="AQC.info1"
                  values={{
                    strong: (chunks) => <strong>{chunks}</strong>,
                  }}
                />
              </p>
              <p className="text-gray-600 mt-2">
                <FormattedMessage id="AQC.info2" />
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
                href="https://mp.weixin.qq.com/s?__biz=MzIyMzgyMjY5NQ==&mid=2247483843&idx=1&sn=75b507e4e1e0fb6295123639b653c29e"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs mt-1 text-gray-600 hover:text-gray-700 transition-colors underline"
              >
                <FormattedMessage id="AQC.referenceIntro" />
              </Link>
              <p className="text-xs text-gray-600 mt-1">
                <FormattedMessage id="AQC.reference" />
              </p>
              <p className="text-xs text-gray-500 mt-1">
                <Link
                  href="https://www.ncbi.nlm.nih.gov/pubmed/18064550?ordinalpos=2&itool=EntrezSystem2.PEntrez.Pubmed.Pubmed_ResultsPanel.Pubmed_RVDocSum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-600 transition-colors"
                >
                  Auyeung B, Baron-Cohen S, Wheelwright S, Allison C. (2007)
                </Link>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                The Autism Spectrum Quotient: Children's Version (AQ-Child).
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Journal of Autism and Developmental Disorders Dec 7
              </p>
              <p className="text-xs text-gray-500 mt-1">
                <FormattedMessage id="AQC.reference1" />
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
        title={intl.formatMessage({ id: "AQC.title" })}
        description={intl.formatMessage({ id: "AQC.description" })}
      >
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* 信息 */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                <FormattedMessage id="AQC.pageTitle" />
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
                id="quotients-submit-aqc"
                className="w-full bg-gradient-to-r from-green-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-green-600/90 hover:to-indigo-600/90 transition-all duration-200 shadow-lg shadow-green-600/20"
              >
                <FormattedMessage id="quotients.submit" />
              </button>
            </form>
          </div>

          <QuestionResult
            questionTitle={intl.formatMessage({ id: "AQC.pageTitle" })}
            scores={[
              {
                title: questionData.scores[0].title,
                subtitle: questionData.scores[0].subtitle,
                score: score,
              },
              {
                title: questionData.scores[1].title,
                subtitle: questionData.scores[1].subtitle,
                score: socialScore,
              },
              {
                title: questionData.scores[2].title,
                subtitle: questionData.scores[2].subtitle,
                score: communicationScore,
              },
              {
                title: questionData.scores[3].title,
                subtitle: questionData.scores[3].subtitle,
                score: attentionSwitchingScore,
              },
              {
                title: questionData.scores[4].title,
                subtitle: questionData.scores[4].subtitle,
                score: attentionDetailScore,
              },
              {
                title: questionData.scores[5].title,
                subtitle: questionData.scores[5].subtitle,
                score: imaginationScore,
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

export default injectIntl(AQC);
