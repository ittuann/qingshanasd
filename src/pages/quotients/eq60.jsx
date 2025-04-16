import React, { Component } from "react";
import Cookies from "js-cookie";
import Layout from "@/components/Layout";
import QuestionItem from "@/components/QuestionItem";
import QuestionResult from "@/components/QuestionResult";
import QuestionInfo from "@/components/QuestionInfo";
import QuestionInfoAlert from "@/components/QuestionInfoAlert";
import questionData from "@/_data/questionEQ60.json";
import BackToTop from "@/components/BackToTop";

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
      return "您可能有ASD";
    } else {
      return "您不太可能有ASD";
    }
  }

  render() {
    const { showResultModal, showInfoModal, score, result, answers } =
      this.state;

    const infoContent = (
      <>
        <QuestionInfo
          icon={<i className="ri-information-2-line text-xl text-rose-400"></i>}
          content={
            <>
              <p className="text-gray-600">本量表效度存在争议，仅供参考</p>
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
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/15162935/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-600 transition-colors"
                >
                  The Empathy Quotient: An Investigation of Adults with Asperger
                  Syndrome or High Functioning Autism, and Normal Sex
                  Differences
                </a>
              </p>
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
        title="共情商测试量表 (Empathy Quotient) | 青衫 Neuro"
        description="本量表效度存在争议，仅供参考"
      >
        <main className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* 信息 */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                共情商测试量表 (Empathy Quotient)
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
                    degree={["非常赞同", "绝对反对"]}
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
                subtitle: "得分",
                score: score,
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

export default EQ60;
