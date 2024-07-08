import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ApplicationTable = ({ applications }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tag</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Azure ML Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {applications.map((app) => (
            <TableRow key={app.id}>
              <TableCell>{app.tag}</TableCell>
              <TableCell>{app.type}</TableCell>
              <TableCell>{app.applicantName}</TableCell>
              <TableCell style={{ color: getScoreColor(app.azureMLScore) }}>
                {app.azureMLScore}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const getScoreColor = (score) => {
  if (score >= 0.7) {
    return '#4caf50'; // Green
  } else if (score >= 0.4) {
    return '#ffc107'; // Yellow
  } else {
    return '#f44336'; // Red
  }
};

export default ApplicationTable;
