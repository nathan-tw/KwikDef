import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import FamilyPieChart from "views/index-sections/FamilyPieChart copy";
import ReportTable from "views/index-sections/ReportTable";
import StaticInfo from "views/index-sections/StaticInfo";
// core components
import AttTypePieChart from "../index-sections/AttTypePieChart";

function ChartPage(props) {
  const data = props.location.state.data;
  return (
    <>
      <ExamplesNavbar />
      <div className="section section-about-us">
        <Container>  
          <h2>Static Analysis</h2>
          <ReportTable data={data}/>
          <StaticInfo />
          <h2>Dynamic Analysis</h2>
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
