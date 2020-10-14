import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import React from "react";

// reactstrap components
import { Container, Table } from "reactstrap";
import FamilyPieChart from "views/index-sections/FamilyPieChart copy";

// core components
import AttTypePieChart from "../index-sections/AttTypePieChart";

function ChartPage() {
  return (
    <>
      <ExamplesNavbar />
      <div className="section section-about-us">
        <div className="container">
          <AttTypePieChart />
          <FamilyPieChart/>
        </div>
      </div>
    </>
  );
}

export default ChartPage;
