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
    const requiredQuestions = questionData.questionBPD.filter(
      (q) => q.id !== 0,
    ).length;
    if (answeredQuestions < requiredQuestions) {
      alert("请完成量表所有问题的作答");
      return;
    }

    // 计算得分
    let score = 0;
    Object.entries(this.state.answers).forEach(([questionId, value]) => {
      score += value;
    });
    console.log(score);
    score = Number((score / 23.0).toFixed(2));
    console.log(score);

    const result = this.CalResultBPD(score);

    this.setState({
      score,
      result,
      showModal: true,
    });
  };

  CalResultBPD(score) {
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
        description="ADHD多动症成人测试量表，用于测试成年人的多动症情况。"
      >
        <main className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* 信息 */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900">
              边缘人格障碍表现量表 BSL-23
              </h1>
              <p className="text-gray-500 mt-2">焦虑抑郁等都可能造成分值偏高</p>
              <p className="text-sm text-gray-500 mt-2">
                *本量表仅供参考，不能作为诊断依据。
              </p>
              <p className="text-sm text-gray-400 mt-1">
                本量表参考文献：
                <a
                  href="https://www.zi-mannheim.de/fileadmin/user_upload/downloads/forschung/PSM_downloads/BSL-23_taiwanesisch.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 underline"
                >
                  BSL-23.pdf
                </a>
              </p>
            </div>

            <form className="space-y-8" onSubmit={this.handleSubmit}>
              {/* 量表问题 */}
              <div className="space-y-6">
                {questionData.questionBPD.map((question) => (
                  <QuestionItem
                    key={`bpd_${question.id}`}
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
            scoreA={this.state.score}
            scoreB={this.state.score}
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
