import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import axios from "axios";

function PieChartComponent() {
  const [data, setData] = useState([]);
  axios.get("/test_form.json").then((res) => {
    const json = res.data;
    json.forEach((obj) => {
      Object.entries(obj).forEach(([key, value]) => {
        console.log(`${key} ${value}`);
      });
    });
  });

  return (
    <PieChart
      data={[
        { title: "One", value: 10, color: "#E38627" },
        { title: "Two", value: 15, color: "#C13C37" },
        { title: "Three", value: 20, color: "#6A2135" },
      ]}
      lineWidth={50}
      radius={10}
    />
  );
}

export default PieChartComponent;
