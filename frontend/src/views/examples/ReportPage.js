import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import React from "react";

// reactstrap components
import {
  Container,
  Table
} from "reactstrap";

// core components


function ReportsPage() {
  return (
    <>
      <ExamplesNavbar />
      <div className="section section-about-us">
        <Container>
          <Table size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>File Name</th>
                <th>MD5</th>
                <th>Report</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </Table>
          </Container >
      </div>

    </>
  );
}

export default ReportsPage;
