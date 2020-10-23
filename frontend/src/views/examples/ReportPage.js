import axios from "axios";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import React from "react";
// reactstrap components
import {
  Container,
  Table,
  Button,
  Alert
} from "reactstrap";

// core components



function ReportsPage() {

  const onSubmit = async e => {
    const id = e.target.id;
    const res = await axios.get(`http://localhost:8080/report/${id}`)
  }

  const submitData = [];
  Object.keys(localStorage).forEach(key => {
    const name = key;
    const hash = localStorage.getItem(key);
    submitData.push({ name: name, hash: hash });
  })


  return (
    <>
      <ExamplesNavbar />
      <div className="section section-about-us">
        <Container>
          <h2>History Submit</h2>
          {submitData.length === 0 ? <Alert>You haven't submit any file before</Alert> :
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

                {submitData.map((data, idx) => {
                  return (
                    <tr key={data.hash}>
                      <th scope="row">{idx + 1}</th>
                      <td>{data.name}</td>
                      <td>{data.hash}</td>
                      <td><Button color="info" id={data.hash} onClick={onSubmit}>check</Button></td>
                    </tr>)
                })}

              </tbody>
            </Table>}
        </Container >
      </div>

    </>
  );
}

export default ReportsPage;
