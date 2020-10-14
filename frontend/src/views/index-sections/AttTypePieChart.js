import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

function AttTypePieChart() {
  const [data, setData] = useState({});

  const fetchData = async () => {
    const res = await axios.get(`/test_form.json`);
    const attType = await res.data["Att_type"];
    const attTypeData = {};
    const labels = [];
    const data = [];
    const pieColors = [
      "#C0392B",
      "#E74C3C",
      "#9B59B6",
      "#8E44AD",
      "#2980B9",
      "#3498DB",
      "#1ABC9C",
      "#F1C40F",
      "#F39C12",
      "#D35400",
      "#BDC3C7",
      "#34495E",
      "#21618C",
      "#9A7D0A",
      "#AED6F1",
      "#D2B4DE",
    ];
    for (let key in attType) {
      labels.push(key);
      data.push(Math.round(attType[key]*10000)/100);
    }
    setData({
      labels: labels,
      datasets: [{ label: "malware attact type", data: data, backgroundColor: pieColors}],
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <Doughnut data={data} />;
}

export default AttTypePieChart;
