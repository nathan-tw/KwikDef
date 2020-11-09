import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import FamilyPieChart from "views/index-sections/FamilyPieChart copy";
import ReportTable from "views/index-sections/ReportTable";
import StaticInfo from "views/index-sections/StaticInfo";
// core components
import AttTypePieChart from "../index-sections/AttTypePieChart";
import Progress from "react-circle-progress-bar";

function ChartPage(props) {
  const data = props.location.state.data;
  return (
    <>
      <ExamplesNavbar />
      <div className="section section-about-us">
        <Container>
        <br/>

          <h2>Basic Information</h2>
          <Row>
            <Col md="3">
              <Progress progress="87.2" gradient={[{stop: 0.0, color: '#581845'}, {stop: 1, color: '#FF5733'}]} strokeWidth="10" subtitle="Malicious"></Progress>
              <StaticInfo data={data} />

            </Col>
            <Col>
              <ReportTable data={data} />

            </Col>
          </Row>
          <br/>
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
