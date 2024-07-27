import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Container } from '@mui/material';

const data = [
  { month: 'Jan', New: 4000, Pending: 2400, Reapplied: 2400 },
  { month: 'Feb', New: 3000, Pending: 1398, Reapplied: 2210 },
  { month: 'Mar', New: 2000, Pending: 3000, Reapplied: 2290 },
  { month: 'Apr', New: 2780, Pending: 3908, Reapplied: 2000 },
  { month: 'May', New: 1890, Pending: 4800, Reapplied: 2181 },
  { month: 'Jun', New: 2390, Pending: 3800, Reapplied: 2500 },
];

const ClusteredBarChart = () => {
  return (
    <Container>
      <Box mt={2} height={200}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5, right: 10, left: 0, bottom: 5,
            }}
            barSize={10} // Adjust bar thickness
            barCategoryGap="20%" // Adjust spacing between months
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="New" fill="#607196" />
            <Bar dataKey="Pending" fill="#FF7B9C" />
            <Bar dataKey="Reapplied" fill="#D36D6D" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Container>
  );
}

export default ClusteredBarChart;
