import React, { Component } from "react";
import * as echarts from "echarts";
import { transformMedicalData } from "@/utils/dataTransform";
import chinaGeoJson from "@/_data/100000_full.json";
import { MedicalDataContext } from "@/context/MedicalDataContext";

class MapChart extends Component {
  static contextType = MedicalDataContext;

  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
    this.chart = null;
  }

  componentDidMount() {
    this.initChart();
  }

  componentDidUpdate() {
    const { currentData } = this.context;
    this.updateChart();
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  updateChart() {
    const { currentData } = this.context;
    const hospitalData = transformMedicalData(currentData.medicalData);

    const option = {
      animation: true,
      backgroundColor: "transparent",
      title: {
        text: "ADHD/ASD可诊地图",
        subtext: "注：地图可拖动和放大",
        left: "center",
      },
      // 提示框组件
      tooltip: {
        trigger: "item",
        showDelay: 0,
        transitionDuration: 0.2,
        zoom: 5,
        formatter: function (params) {
          const data = hospitalData.find((item) => item.name === params.name);
          if (data) {
            return `${params.name}：<br>${data.hospitals}家医院<br>${data.doctors}位医生可诊<br>点击查看详细信息`;
          }
          return params.name + ": 暂无数据";
        },
      },
      // 视觉映射组件
      visualMap: {
        show: true,
        type: "piecewise",
        categories: ["1", "2", "3"],
        inverse: true,
        pieces: [
          { value: 1, label: "可诊断 ADHD/ASD", color: "#fce7f3" },
          { value: 2, label: "仅可诊断 ADHD", color: "#dbeafe" },
          // { value: 3, label: "仅可诊断 ASD", color: "#dcfce7" },
        ],
      },
      // 图形类型
      series: [
        {
          type: "map",
          map: "china",
          name: "中国大陆地图",
          roam: true, // 缩放和平移
          selectedMode: false,
          zoom: 1.2,
          scaleLimit: {
            min: 0.8,
            max: 7,
          },
          // 图形上的文本标签
          label: {
            show: true,
            fontSize: 8,
            color: "#333",
            position: "inside",
          },
          // 地图区域的多边形样式
          itemStyle: {
            areaColor: "#e5e7eb",
            borderColor: "#fff",
            borderWidth: 1,
            borderType: "solid",
          },
          // 高亮状态样式
          emphasis: {
            label: {
              show: true,
              color: "#000",
            },
            itemStyle: {
              areaColor: "#52B394",
            },
          },
          nameMap: {
            台湾省: "台湾",
          },
          data: hospitalData.map((item) => ({
            name: item.name,
            value: item.type || 0,
          })),
        },
      ],
    };

    this.chart.setOption(option);

    // 添加点击事件处理
    this.chart.on("click", (params) => {
      const data = hospitalData.find((item) => item.name === params.name);
      if (data && data.name) {
        const element = document.getElementById(data.name);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  }

  initChart() {
    if (!this.chartRef.current) return;

    this.chart = echarts.init(this.chartRef.current);
    echarts.registerMap("china", chinaGeoJson);
    this.updateChart();
  }

  render() {
    return (
      <div
        ref={this.chartRef}
        style={{
          width: "100%",
          height: "500px",
        }}
      />
    );
  }
}

export default MapChart;
