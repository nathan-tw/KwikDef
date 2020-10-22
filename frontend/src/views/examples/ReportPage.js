import axios from "axios";
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

  const onSubmit = async e => {
    const id = e.target.id;
    const res = await axios.get(`http://localhost:8080/report/${id}`)
  }

  const fakeData = [
    {
      name: "Chrome.exe",
      hash: "4c9fe44ec663bc74247f0599019e1f46"
    },
    {
      name: "Zoom.exe",
      hash: "a99bcc7d5f7f9671a43275bc84dbc64b"
    },
    {
      name: "WannaCry.exe",
      hash: "c7c504cb5b9cc5dcccd0dea42892db60"
    },
    {
      name: "Notepad.exe",
      hash: "ddc9b5e06c11879e645353447632ea70"
    },
    {
      name: "KwikDef.exe",
      hash: "3c8b3800f1c3f4d4d38569704939df13"
    },
    {
      name: "Locky.exe",
      hash: "7e90c46763b1e015a3910b118a357480"
    },
  ]

  return (
    <>
      <ExamplesNavbar />
      <div className="section section-about-us">
        <Container>
          <h2>History Submit</h2>
          <form>
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
              
              {fakeData.map((data, idx) => {
                return (
                  <tr key={data.hash}>
                    <th scope="row">{idx+1}</th>
                    <td>{data.name}</td>
                    <td>{data.hash}</td>
                    <td><Button color="info" id={data.hash} onClick={onSubmit}>check</Button></td>
                  </tr>)
              })}
              
            </tbody>
          </Table>
          </form>
        </Container >
      </div>

    </>
  );
}

export default ReportsPage;
