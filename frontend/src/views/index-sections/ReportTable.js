import React from "react";
import { Table } from "reactstrap";

const ReportTable = (props) => {
  const data = props.data
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>MD5</th>
          <th>{data.MD5}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Size</td>
          <td>{data.size} bytes</td>
        </tr>
        <tr>
          <td>Malicious</td>
          <td>{data.malicious}%</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ReportTable;
