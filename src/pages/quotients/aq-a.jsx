import React, { Component } from "react";
import Cookies from "js-cookie";
import Layout from "@/components/Layout";
import QuestionItem from "@/components/QuestionItem";
import QuestionResult from "@/components/QuestionResult";
import QuestionInfo from "@/components/QuestionInfo";
import QuestionInfoAlert from "@/components/QuestionInfoAlert";
import questionData from "@/_data/questionAQA.json";
import BackToTop from "@/components/BackToTop";

class AQA extends Component {
  state = {
    quotientsName: "answers_aqa",
    answers: {},
    showResultModal: false,
    showInfoModal: true,
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
      showInfoModal,
      socialScore,
      attentionSwitchingScore,
      attentionDetailScore,
      communicationScore,
      imaginationScore,
      answers,
    } = this.state;

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
                最终确诊需要结合儿童时期的情况
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
              <p className="text-xs text-gray-600">本量表参考文献：</p>
              <p className="text-xs text-gray-500 mt-1">
                Simon Baron-Cohen, et al. The Autism-Spectrum Quotient (AQ):
                Evidence from Asperger Syndrome/High-Functioning Autism,
                Malesand Females, Scientists and Mathematicians. 31: J Autism
                Dev Disord 5-17. 2001.
              </p>
              <p className="text-xs text-gray-500 mt-1">翻译：青衫</p>
              <p className="text-xs text-gray-500 mt-2">
                * 本站符合 GDPR 欧盟通用数据保护条例。页面在您的本地浏览器中使用
                Cookie 临时保存量表填写选项，并于2小时后自动
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
                    degree={["赞同", "反对"]}
                    onAnswerChange={this.handleRadioChange}
                    checkedIndex={answers[question.id]?.index}
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
