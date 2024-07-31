import React from 'react';
import { Pie, PieChart, ResponsiveContainer, Cell, Legend } from 'recharts';
import { Box, Container } from '@mui/material';

const data01 = [
  { name: 'New', value: 400 },
  { name: 'Pending', value: 300 },
  { name: 'Reapplied', value: 300 },
];

const colors = ['#607196', '#FF7B9C', '#D36D6D'];

const BankPie = () => {
  return (
    <Container>
      <Box mt={2} height={300}> 
        <ResponsiveContainer height="100%" width="100%">
          <PieChart
            width={730}
            height={250}
            margin={{ top: 20, right: 30, left: 30, bottom: 20 }} 
          >
            <Pie
              data={data01}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={90}
              innerRadius={70}
            >
              {data01.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Legend verticalAlign="top" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Container>
  );
};

export default BankPie;
