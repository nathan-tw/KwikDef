import React, { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import axios from "axios";

function AttTypePieChart() {
  const [data, setData] = useState([]);


  const fetchData = async () => {
    const res = await axios.get(
      `/test_form.json`
    );
    const attType = await res.data['Att_type'];
    const attTypeData = [];
    const pieColors = ['#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9', '#3498DB', '#1ABC9C', '#F1C40F', '#F39C12', '#D35400', '#BDC3C7', '#34495E', '#21618C', '#9A7D0A', '#AED6F1', '#D2B4DE']
    for (let key in attType) {
      attTypeData.push({title: key, value: attType[key], color: pieColors.pop()});
    }
    setData(attTypeData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PieChart
      lineWidth={50}
      data={data}
      radius={15}
      totalValue={1}
      label={(data) => data.dataEntry.title+` `+Math.round(data.dataEntry.value*10000)/100+`%`}
      labelStyle={{
        fontSize: "1px",
        fontColor: "FFFFFA",
        fontWeight: "600",
      }}
      labelPosition={105}
      animate={true}
      animationDuration={300}
      animationEasing={'ease-out'}
      viewBoxSize={[150, 150]}
      
    />
  );
}

export default AttTypePieChart;
