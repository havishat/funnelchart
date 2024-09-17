import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'Sessions',
    value: 1731,
    fill: '#004f9f',
  },
  {
    name: 'Product Views',
    value: 1131,
    fill: '#4b96ec',
  },
  {
    name: 'Checkouts',
    value: 531,
    fill: '#76c7f7',
  },
  {
    name: 'Purchases',
    value: 331,
    fill: '#9dd6f9',
  },
];

const HorizontalFunnel = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8">
          {data.map((entry, index) => (
            <Bar
              key={`bar-${index}`}
              dataKey="value"
              fill={entry.fill}
              barSize={(index * 20)} // Decrease bar width progressively
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HorizontalFunnel;
