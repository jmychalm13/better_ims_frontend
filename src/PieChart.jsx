import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { useEffect } from "react";

Chart.register(CategoryScale);
export function PieChart() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentData, setCurrentData] = useState([]);
  const [chartData, setChartData] = useState([]);

  const displayData = () => {
    axios.get("http://localhost:3000/daily_usages.json").then((response) => {
      setCurrentData(response.data);
      let labelArray = [];
      let dataArray = [];
      response.data.forEach((data) => {
        labelArray.push(data.product.product_name);
        dataArray.push(data.quantity_used);
      });
      onLoad(labelArray, dataArray);
    });
  };

  const onLoad = (labels, allData) => {
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Daily Usage",
          backgroundColor: [
            "lightblue",
            "darkviolet",
            "deeppink",
            "dodgerblue",
            "purple",
            "navy",
            "aqua",
            "teal",
            "fuschia",
          ],
          borderColor: "gray",
          data: allData,
        },
      ],
    };
    setChartData(data);
    setIsLoaded(true);
  };

  useState(displayData, []);
  return <div className="chart-container m-auto">{isLoaded ? <Pie data={chartData} /> : <></>}</div>;
}
export default PieChart;
