import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

//css
import "../css/adminPage.scss"
// 달력전용 라이브러리
import "react-datepicker/dist/react-datepicker.css"; // 달력 css

import DatePicker from "react-datepicker";
import { useState } from "react";

const labels = ["2017", "2018", "2019", "2020", "2021", "2022", "2023"];

const data = {
  labels,
  datasets: [
    {
      label: "신규게시글",
      data: [32, 42, 51, 60, 51, 95, 150],
      backgroundColor: "#0CD3FF",
      borderColor: "#0CD3FF",
    },
  ],
};

const options = {
  responsive: true,
  // 👇 1. 가로/세로 비율 강제 유지 기능을 끕니다. (가장 중요!)
  maintainAspectRatio: false, 
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

const ChartJsExample = () => {
    const h1 = {
        fontSize: "15px",
        fontWeight: "bold",
        paddingBottom: "20px"
    }
  return (
    <div id="chartDiv">
      <div id="chartBox">
        <h1 id="chartH1">신규 게시글</h1>
        <div>
            <select>
                <option>일별</option>
                <option>월별</option>
                <option>년별</option>
            </select>
            <div>검색[서버 개발하면서 나중에 같이 만들어보자]</div>
        </div>
      </div>
      <div style={{ width: "100%", height: "200px" }}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default ChartJsExample;