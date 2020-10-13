import React, { Component } from 'react'
import test from "../../test_form.json"
import CanvasJSReact from './canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dataPoints =[];
class PieChartComponent extends Component{
  render() {	
		const options = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "Malware"
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				// legendText: "{label}",
				// indexLabelFontSize: 16,
				// indexLabel: "{label} - {y}%",
				dataPoints: dataPoints
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options} 
				 onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
	
	componentDidMount(){
		var chart = this.chart;
		fetch(test)
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			for (var i = 0; i < data[3]; i++) {
				dataPoints.push({
					Attack_Type: test[3],
					vaue: test[3].value
				});
			}
			chart.render();
		});
	}
}