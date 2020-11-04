import axios from "axios";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
// reactstrap components
import { Container, Table, Button, Alert } from "reactstrap";

// core components

function ReportsPage() {
  const [isDone, setIsDone] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [jsonObj, setJsonObj] = useState({});
  const onSubmit = async (e) => {
    const id = e.target.id;
    let statusCode = 200;
    const res = await axios
      .get(`http://127.0.0.1:8080/report/${id}`)
      .catch((error) => {
        statusCode = error.response.status;
        setIsFailed(true);
      });
    if (statusCode !== 500) {
      setJsonObj(res.data);
      setIsDone(true);
    }
  };

  const submitData = [];
  Object.keys(localStorage).forEach((key) => {
    const name = key;
    const hash = localStorage.getItem(key);
    submitData.push({ name: name, hash: hash });
  });

  return (
    <>
      {isDone ? (
        <Redirect
          to={{
            pathname: "/chart-page/test",
            state: { data: jsonObj },
          }}
        />
      ) : null}
      <ExamplesNavbar />
      
      <div className="section section-about-us">
        <Container>
        {isFailed ? <Alert color="primary">This is not a PE file</Alert>: null}
          <h2>History Submit</h2>
          {submitData.length === 0 ? (
            <Alert>You haven't submit any file before</Alert>
          ) : (
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
                      <td>
                        <Button color="info" id={data.hash} onClick={onSubmit}>
                          check
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          )}
        </Container>
      </div>
    </>
  );
}

export default ReportsPage;
