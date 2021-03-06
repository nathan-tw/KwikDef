import React from "react";
import { Table } from "reactstrap";

const ReportTable = (props) => {
  const data = props.data;
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Filename</th>
          <th>{data.filename}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>MD5</th>
          <th>{data.MD5}</th>
        </tr>
        <tr>
          <td>Size</td>
          <td>{data.size} bytes</td>
        </tr>
        <tr>
          <td>Malicious</td>
          <td>{data.malicious*100}%</td>
        </tr>
        <tr>
          <td>Number of sections</td>
          <td>{data.number_of_section}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ReportTable;
