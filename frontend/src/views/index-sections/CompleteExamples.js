import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Youtube from "react-youtube";

// core components

function CompleteExamples() {
  return (
    <>
      <div className="section" id="aboutus-section">
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title">About Us</h2>
              <h3>KwikDef—人工智慧惡意程式偵測系統</h3>
              <h4 >
                本系統採用惡意程式動、靜態分析與機器學習技術，透過分析檔案內容與側錄其在虛擬環境中之實際表現作為檔案特徵進行分析，對未知程式進行偵測及分類，並產生詳細資訊報表，
                供資安專業人員做進一步的追蹤與研究。
              </h4>
              <Youtube videoId="UUuAbc-gFPk"></Youtube>
              <h4>
                模型將根據受測檔案的增加定期進行校準、修正，以期能維持偵測準確率。本系統旨在幫助使用者更快速的檢測Windows的可執行檔，提供可靠的檢測評斷。
              </h4>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CompleteExamples;
