import React, { Component } from "react";
import Layout from "@/components/Layout";
import QuestionItem from "@/components/QuestionItem";
import QuestionResult from "@/components/QuestionResult";
import questionData from "@/data/questionBPD.json";
import BackToTop from "@/components/BackToTop";
import QuestionIntervention from "@/components/QuestionIntervention";

class BPD extends Component {
  state = {
    answers: {},
    showModal: false,
    score: 0,
    result: "",
  };

  closeModal = () => {
    this.setState({ showModal: false });
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

    const score = this.calculateScores();
    const result = this.calculateResult(score);

    this.setState({
      score,
      result,
      showModal: true,
    });
  };

  getQuestionDetail() {
    return questionData.questionBPD;
  }

  calculateScores() {
    let score = 0;
    Object.entries(this.state.answers).forEach(([questionId, value]) => {
      score += value;
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
              <p className="text-gray-500 mt-2">焦虑抑郁等都可能造成分值偏高</p>
              <p className="text-gray-500 mt-2">本量表可能含有情绪触动的内容</p>
              <p className="text-sm text-gray-500 mt-2">
                *本量表仅供参考，不能作为诊断依据。
              </p>
              <div className="text-xs text-gray-400 mt-2 space-y-1">
                <p>本量表参考文献：</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>
                    <a
                      href="https://www.zi-mannheim.de/fileadmin/user_upload/downloads/forschung/PSM_downloads/BSL-23_taiwanesisch.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-600"
                    >
                      BSL-23.pdf
                    </a>
                  </li>
                  <li>
                    Yang, H., Lei, X., Zhong, M., Zhou, Q., Ling, Y., Jungkunz,
                    M., & Yi, J. (2018). Psychometric properties of the Chinese
                    version of the brief borderline symptom list in
                    undergraduate students and clinical patients. Frontiers in
                    psychology, 9, 605.
                  </li>
                  <li>
                    Bohus, M., Limberger, M. F., Frank, U., Chapman, A. L.,
                    Kühler, T., & Stieglitz, R. D. (2007). sychometric
                    properties of the borderline symptom list (BSL).
                    Psychopathology, 40(2), 126-132.
                  </li>
                </ul>
              </div>
            </div>

            <form className="space-y-8" onSubmit={this.handleSubmit}>
              {/* 量表问题 */}
              <div className="space-y-6">
                {this.getQuestionDetail().map((question) => (
                  <QuestionItem
                    key={`quotients_${question.id}`}
                    question={question}
                    degree={["频繁", "没有"]}
                    onAnswerChange={this.handleRadioChange}
                  />
                ))}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-green-600/90 hover:to-indigo-600/90 transition-all duration-200 shadow-lg shadow-green-600/20"
              >
                提交答案
              </button>
            </form>
          </div>

          <QuestionResult
            scores={[
              {
                title: "分数（总分4.0）",
                subtitle: "得分",
                score: this.state.score,
              },
            ]}
            result={this.state.result}
            showModal={this.state.showModal}
            onClose={this.closeModal}
          />

          <QuestionIntervention />

          <BackToTop isShowButton={true} isShowProgress={true} />
        </main>
      </Layout>
    );
  }
}

export default BPD;
