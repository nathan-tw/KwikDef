import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import React from "react";
// reactstrap components
import {
  Container,
  Table,
  Button
} from "reactstrap";

// core components


function ReportsPage() {
  return (
    <>
      <ExamplesNavbar />
      <div className="section section-about-us">
        <Container>
          <h2>History Submit</h2>
          <Table>
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
                <td>Chrome.exe</td>
                <td>4c9fe44ec663bc74247f0599019e1f46</td>
                <Button color="info">check</Button>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Zoom.exe</td>
                <td>a99bcc7d5f7f9671a43275bc84dbc64b</td>
                <Button color="info">check</Button>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>WannaCry.exe</td>
                <td>c7c504cb5b9cc5dcccd0dea42892db60</td>
                <Button color="info">check</Button>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Notepad.exe</td>
                <td>ddc9b5e06c11879e645353447632ea70</td>
                <Button color="info">check</Button>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Locky.exe</td>
                <td>7e90c46763b1e015a3910b118a357480</td>
                <Button color="info">check</Button>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>KwikDef.exe</td>
                <td>3c8b3800f1c3f4d4d38569704939df13</td>
                <Button color="info">check</Button>
              </tr>
            </tbody>
          </Table>
          </Container >
      </div>

    </>
  );
}

export default ReportsPage;
