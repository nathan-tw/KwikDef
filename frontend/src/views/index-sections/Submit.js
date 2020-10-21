import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import FileUploader from "./FileUpload";

// core components

function Submit() {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="submit-section"
      >
        <Container>
          <br></br>
          <br></br>
          <br></br>
          <Row className="text-center mt-5">
            <Col className="ml-auto mr-auto" md="8">
              <h2>File Submit</h2>
              <h4 className="description">
                本系統採用惡意程式動、靜態分析與機器學習技術。由於動態分析需要於沙盒中進行且耗時較久，我們提供使用者較彈性的選擇，根據不同需求使用者可以選擇靜態快篩或動態分析。
              </h4>
            </Col>
            <Col md="12">
              <FileUploader/>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <Row className="justify-content-md-center sharing-area text-center">

            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-neutral btn-icon btn-round"
                color="github"
                href="https://github.com/nathan-tw/KwikDef"
                id="tooltip331904895"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip331904895">
                Star on Github
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Submit;
