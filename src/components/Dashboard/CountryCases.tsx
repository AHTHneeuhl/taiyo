import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useDashboard } from "../../hooks";
import { GraphWrapper } from "../commmon";

const CountryCases: React.FC = () => {
  const { countryCases } = useDashboard();

  return (
    <GraphWrapper>
      <h2 className="text-center text-xl font-semibold mb-2 cursor-pointer hover:text-blue-700">
        Country Cases
      </h2>
      <LineChart
        width={1024}
        height={480}
        data={countryCases?.countryCases}
        margin={{
          top: 5,
          right: 0,
          left: 30,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="country" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="cases" stroke="#8884d8" />
      </LineChart>
    </GraphWrapper>
  );
};

export default CountryCases;
