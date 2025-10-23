import React, { Component } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import Layout from "@/components/Layout";
import QuestionItem from "@/components/QuestionItem";
import QuestionResult from "@/components/QuestionResult";
import QuestionInfo from "@/components/QuestionInfo";
import QuestionInfoAlert from "@/components/QuestionInfoAlert";
import QuestionAlert from "@/components/QuestionAlert";
import BackToTop from "@/components/BackToTop";
import { FormattedMessage, injectIntl } from "react-intl";
import { defaultLocale, LocaleContext } from "@/i18n/i18n";

class BPD extends Component {
  static contextType = LocaleContext;

  state = {
    quotientsName: "answers_bpd",
    answers: {},
    showResultModal: false,
    showAlertModal: false,

    score: 0,
    result: "",
    questionData: null,
  };

  componentDidMount() {
    const savedAnswers = Cookies.get(this.state.quotientsName);
    if (savedAnswers) {
      this.setState({
        answers: JSON.parse(savedAnswers),
      });
    }

    this.loadQuestionData();
  }

  componentDidUpdate(prevProps, prevState) {
    // 如果语言变化，重新加载问题数据
    if (this.context?.locale !== prevState.locale) {
      this.loadQuestionData();
    }
  }

  loadQuestionData = async () => {
    try {
      const locale = this.context?.locale || defaultLocale;
      // 根据当前语言加载对应的问题数据
      const data = await import(`@/_data/questionBPD.${locale}.json`);
      this.setState({ questionData: data.default, locale });
    } catch (error) {
      // 如果找不到当前语言的问题数据，使用默认语言
      console.error("Error loading question data:", error);
      const data = await import(`@/_data/questionBPD.${defaultLocale}.json`);
      this.setState({ questionData: data.default, locale: defaultLocale });
    }
  };

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
    return this.state.questionData?.question || [];
  }

  calculateScores() {
    let score = 0;
    Object.entries(this.state.answers).forEach(([questionId, data]) => {
      score += data.value;
    });
    score = Number((score / 23.0).toFixed(2));
    return score;
  }

  calculateResult(score) {
    if (score < 0.3) {
      return this.props.intl.formatMessage({ id: "BPD.resultNoneLow" });
    } else if (score < 1.1) {
      return this.props.intl.formatMessage({ id: "BPD.resultMild" });
    } else if (score < 1.5) {
      return this.props.intl.formatMessage({ id: "BPD.resultModerate1" });
    } else if (score < 1.9) {
      return this.props.intl.formatMessage({ id: "BPD.resultModerate2" });
    } else if (score < 2.7) {
      return this.props.intl.formatMessage({ id: "BPD.resultHigh" });
    } else if (score < 3.5) {
      return this.props.intl.formatMessage({ id: "BPD.resultVeryHigh" });
    } else {
      return this.props.intl.formatMessage({ id: "BPD.resultExtremelyHigh" });
    }
  }

  render() {
    const { showResultModal, showAlertModal, score, result, answers } =
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
              <p className="text-gray-600 mt-2">
                <FormattedMessage id="BPD.info" />
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
                <FormattedMessage id="BPD.reference" />
              </p>
              <p className="text-xs text-gray-500 mt-1">
                <Link
                  href="https://www.zi-mannheim.de/fileadmin/user_upload/downloads/forschung/PSM_downloads/BSL-23_taiwanesisch.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-600 transition-colors"
                >
                  BSL-23.pdf
                </Link>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Yang, H., Lei, X., Zhong, M., Zhou, Q., Ling, Y., Jungkunz, M.,
                & Yi, J. (2018). Psychometric properties of the Chinese version
                of the brief borderline symptom list in undergraduate students
                and clinical patients. Frontiers in psychology, 9, 605.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Bohus, M., Limberger, M. F., Frank, U., Chapman, A. L., Kühler,
                T., & Stieglitz, R. D. (2007). sychometric properties of the
                borderline symptom list (BSL). Psychopathology, 40(2), 126-132.
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
        title={intl.formatMessage({ id: "BPD.title" })}
        description={intl.formatMessage({ id: "BPD.description" })}
      >
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* 信息 */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                <FormattedMessage id="BPD.pageTitle" />
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
                      intl.formatMessage({ id: "BPD.degreeStrong" }),
                      intl.formatMessage({ id: "BPD.degreeWeak" }),
                    ]}
                    onAnswerChange={this.handleRadioChange}
                    checkedIndex={answers[question.id]?.index}
                  />
                ))}
              </div>

              <button
                type="submit"
                id="quotients-submit-bpd"
                className="w-full bg-gradient-to-r from-green-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-green-600/90 hover:to-indigo-600/90 transition-all duration-200 shadow-lg shadow-green-600/20"
              >
                <FormattedMessage id="quotients.submit" />
              </button>
            </form>
          </div>

          <QuestionResult
            questionTitle={intl.formatMessage({ id: "BPD.pageTitle" })}
            scores={[
              {
                title: intl.formatMessage({ id: "BPD.scoreTitle" }),
                subtitle: intl.formatMessage({ id: "BPD.scoreSubtitle" }),
                score: score,
              },
            ]}
            result={result}
            showModal={showResultModal}
            onClose={this.closeResultModal}
          />

          {/* 危机干预 */}
          <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <FormattedMessage id="BPD.crisisTitle" />
              </h3>
              <div className="space-y-4">
                <div>
                  <Link
                    href="https://mp.weixin.qq.com/s/pRYTYnuvUvlJNNn-bVagcQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-gray-800 mb-2 hover:text-primary underline"
                  >
                    <FormattedMessage id="BPD.crisisHotline" />
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://mp.weixin.qq.com/s/f2bpVY437pUO-tp0Ibgn9A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-gray-800 mb-2 hover:text-primary underline"
                  >
                    <FormattedMessage id="BPD.crisisCPR" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

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

export default injectIntl(BPD);
