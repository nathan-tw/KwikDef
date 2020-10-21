import React from 'react';
import { Table } from 'reactstrap';

const ReportTable = (props) => {
    return (
        <Table bordered>
            <thead>
                <tr>
                    <th>MD5</th>
                    <th>7e90c46763b1e015a3910b118a357480</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Size</td>
                    <td>1.2 mb</td>
                </tr>
                <tr>
                    <td>Malicious</td>
                    <td>70.2%</td>
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
}

export default ReportTable;