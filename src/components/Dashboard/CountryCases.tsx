import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

type TProps = {
  data: any;
};

const CountryCases: React.FC<TProps> = ({ data }) => {
  return (
    <LineChart width={800} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="country" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="cases" stroke="#8884d8" />
    </LineChart>
  );
};

export default CountryCases;
