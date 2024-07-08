import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['#4caf50', '#ffc107', '#f44336'];

const PieChartComponent = ({ applications }) => {
  const countByStatus = {
    new: applications.filter(app => app.status === 'new').length,
    pending: applications.filter(app => app.status === 'pending').length,
    reapplied: applications.filter(app => app.status === 'reapplied').length,
  };

  const data = [
    { name: 'New', value: countByStatus.new },
    { name: 'Pending', value: countByStatus.pending },
    { name: 'Reapplied', value: countByStatus.reapplied },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
