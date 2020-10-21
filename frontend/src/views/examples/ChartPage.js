import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import FamilyPieChart from "views/index-sections/FamilyPieChart copy";
import ReportTable from "views/index-sections/ReportTable";

// core components
import AttTypePieChart from "../index-sections/AttTypePieChart";

function ChartPage() {
  return (
    <>
      <ExamplesNavbar />
      <div className="section section-about-us">
        <Container>
          <h2>Analysis Report</h2>
          <ReportTable/>
          <Row>
            <Col>
              <h4>Attact Type</h4>
              <AttTypePieChart />
            </Col>
            <Col>
              <h4>Family Type</h4>
              <FamilyPieChart />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ChartPage;