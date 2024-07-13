import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const Pie = () => {
    const colors = ['#FF7B9C', '#607196', '#582B11'];

    const data = [
        { value: 5, label: 'New' },
        { value: 10, label: 'Pending' },
        { value: 15, label: 'Reapplied' },
      ];
      
      const size = {
        width: 400,
        height: 200,
      };
      
      const StyledText = styled('text')(({ theme }) => ({
        fill: theme.palette.text.primary,
        textAnchor: 'middle',
        dominantBaseline: 'central',
        fontSize: 20,
      }));
      
      function PieCenterLabel({ children }) {
        const { width, height, left, top } = useDrawingArea();
        return (
          <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
          </StyledText>
        );
      }
  return (
    <PieChart colors={colors} series={[{ data, innerRadius: 80, colors }]} {...size}>
      <PieCenterLabel>1096 Applications</PieCenterLabel>
    </PieChart>
  )
}

export default Pie