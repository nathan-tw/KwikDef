import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import React from "react";

// reactstrap components
import { Container, Table } from "reactstrap";

// core components
import PieChartComponent from "../../components/Chart/PieChartComponent";

function ChartPage() {
  return (
    <>
      <ExamplesNavbar />
      <div className="section section-about-us">
        <div className="container">
          <PieChartComponent />
        </div>
      </div>
    </>
  );
}

export default ChartPage;
