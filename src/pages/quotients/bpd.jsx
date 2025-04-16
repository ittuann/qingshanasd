import React, { Component } from "react";
import Cookies from "js-cookie";
import Layout from "@/components/Layout";
import QuestionItem from "@/components/QuestionItem";
import QuestionResult from "@/components/QuestionResult";
import QuestionInfo from "@/components/QuestionInfo";
import QuestionInfoAlert from "@/components/QuestionInfoAlert";
import questionData from "@/_data/questionBPD.json";
import BackToTop from "@/components/BackToTop";

class BPD extends Component {
  state = {
    quotientsName: "answers_bpd",
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
    return questionData.questionBPD;
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
      return "None/Low 您不太可能有BPD";
    } else if (score < 1.1) {
      return "Mild 您不太可能有BPD";
    } else if (score < 1.5) {
      return "Moderate 您不太可能有BPD";
    } else if (score < 1.9) {
      return "Moderate";
    } else if (score < 2.7) {
      return "High";
    } else if (score < 3.5) {
      return "Very High";
    } else {
      return "Extremely High";
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
              <p className="text-gray-600">
                焦虑 / 抑郁 / 睡眠障碍<strong>等其他情况</strong>
                均有可能造成分值偏高
              </p>
              <p className="text-gray-600 mt-2">本量表可能含有情绪触动的内容</p>
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
                  href="https://www.zi-mannheim.de/fileadmin/user_upload/downloads/forschung/PSM_downloads/BSL-23_taiwanesisch.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-600 transition-colors"
                >
                  BSL-23.pdf
                </a>
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
        title="边缘人格障碍表现量表 BSL-23 | 青衫 Neuro"
        description="边缘人格障碍表现量表 BSL-23"
      >
        <main className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* 信息 */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                边缘人格障碍表现量表 BSL-23
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
                    degree={["频繁", "没有"]}
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
                title: "分数（总分4.0）",
                subtitle: "得分",
                score: score,
              },
            ]}
            result={result}
            showModal={showResultModal}
            onClose={this.closeModal}
          />

          {/* 危机干预 */}
          <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                如果感到极为不适，这里可以帮到你：
              </h3>
              <div className="space-y-4">
                <div>
                  <a
                    href="https://mp.weixin.qq.com/s/pRYTYnuvUvlJNNn-bVagcQ"
                    target="_blank"
                    className="text-lg font-medium text-gray-800 mb-2 hover:text-primary underline"
                  >
                    中国心理危机干预热线汇总
                  </a>
                </div>
                <div>
                  <a
                    href="https://mp.weixin.qq.com/s/f2bpVY437pUO-tp0Ibgn9A"
                    target="_blank"
                    className="text-lg font-medium text-gray-800 mb-2 hover:text-primary underline"
                  >
                    心理CPR：每个人都要学会的危机干预
                  </a>
                </div>
              </div>
            </div>
          </div>

          <BackToTop isShowButton={true} isShowProgress={true} />
        </main>
      </Layout>
    );
  }
}

export default BPD;
