import React from "react";
import { Table } from "reactstrap";

const ReportTable = (props) => {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>MD5</th>
          <th>{props.md5}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Size</td>
          <td>{props.size} mb</td>
        </tr>
        <tr>
          <td>Malicious</td>
          <td>{props.malicious}%</td>
        </tr>
        <tr>
          <td>Attact type</td>
          <td>Others</td>
        </tr>
        <tr>
          <td>Family type</td>
          <td>Sality</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ReportTable;
