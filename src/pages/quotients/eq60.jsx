import React, { Component } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import Layout from "@/components/Layout";
import QuestionItem from "@/components/QuestionItem";
import QuestionResult from "@/components/QuestionResult";
import QuestionInfo from "@/components/QuestionInfo";
import QuestionInfoAlert from "@/components/QuestionInfoAlert";
import questionData from "@/_data/questionEQ60.json";
import BackToTop from "@/components/BackToTop";
import { FormattedMessage, injectIntl } from "react-intl";

class EQ60 extends Component {
  state = {
    quotientsName: "answers_eq60",
    answers: {},
    showResultModal: false,
    showInfoModal: true,
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
      alert(
        this.props.intl.formatMessage({ id: "quotients.completeAllQuestions" }),
      );
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
    return questionData.questionEQ60;
  }

  calculateScores() {
    let score = 0;
    Object.entries(this.state.answers).forEach(([questionId, data]) => {
      score += data.value;
    });
    return score;
  }

  calculateResult(score) {
    if (score <= 30) {
      return this.props.intl.formatMessage({ id: "EQ60.resultASD" });
    } else {
      return this.props.intl.formatMessage({ id: "EQ60.resultNotASD" });
    }
  }

  render() {
    const { showResultModal, showInfoModal, score, result, answers } =
      this.state;
    const { intl } = this.props;

    const infoContent = (
      <>
        <QuestionInfo
          icon={<i className="ri-information-2-line text-xl text-rose-400"></i>}
          content={
            <>
              <p className="text-gray-600">
                <FormattedMessage id="EQ60.info1" />
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
              <p className="text-xs text-gray-600">
                <FormattedMessage id="EQ60.reference" />
              </p>
              <p className="text-xs text-gray-500 mt-1">
                <Link
                  href="https://pubmed.ncbi.nlm.nih.gov/15162935/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-600 transition-colors"
                >
                  The Empathy Quotient: An Investigation of Adults with Asperger
                  Syndrome or High Functioning Autism, and Normal Sex
                  Differences
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
                。
              </p>
            </>
          }
        />
      </>
    );

    return (
      <Layout
        title={intl.formatMessage({ id: "EQ60.title" })}
        description={intl.formatMessage({ id: "EQ60.description" })}
      >
        <main className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* 信息 */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                <FormattedMessage id="EQ60.pageTitle" />
              </h1>

              <div className="mt-2">{infoContent}</div>
            </div>

            <QuestionInfoAlert
              showModal={showInfoModal}
              onClose={this.closeInfoModal}
              content={infoContent}
            />

            <form className="space-y-8" onSubmit={this.handleSubmit}>
              {/* 量表问题 */}
              <div className="space-y-6">
                {this.getQuestionDetail().map((question) => (
                  <QuestionItem
                    key={`quotients_${question.id}`}
                    question={question}
                    degree={[
                      intl.formatMessage({ id: "EQ60.degreeAgree" }),
                      intl.formatMessage({ id: "EQ60.degreeDisagree" }),
                    ]}
                    onAnswerChange={this.handleRadioChange}
                    checkedIndex={answers[question.id]?.index}
                  />
                ))}
              </div>

              <button
                type="submit"
                id="quotients-submit-eq60"
                className="w-full bg-gradient-to-r from-green-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-green-600/90 hover:to-indigo-600/90 transition-all duration-200 shadow-lg shadow-green-600/20"
              >
                <FormattedMessage id="quotients.submit" />
              </button>
            </form>
          </div>

          <QuestionResult
            scores={[
              {
                title: intl.formatMessage({ id: "EQ60.scoreTest" }),
                subtitle: intl.formatMessage({ id: "EQ60.scoreSubtitle" }),
                score: score,
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

export default injectIntl(EQ60);
