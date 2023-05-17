import { XAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from "recharts";
import { useDashboard } from "../../hooks";
import { GraphWrapper } from "../commmon";

const AllCases: React.FC = () => {
  const { allCases, allCasesLoading } = useDashboard();

  const data = [
    { name: "Cases", value: allCases?.cases },
    { name: "Today Cases", value: allCases?.todayCases },
    { name: "Deaths", value: allCases?.deaths },
    { name: "Today Deaths", value: allCases?.todayDeaths },
    { name: "Recovered", value: allCases?.recovered },
    { name: "Today Recovered", value: allCases?.todayRecovered },
    { name: "Active", value: allCases?.active },
    { name: "Critical", value: allCases?.critical },
  ];

  if (allCasesLoading) return null;

  return (
    <GraphWrapper>
      <h2 className="text-center text-xl font-semibold mb-2 cursor-pointer hover:text-blue-700">
        All Cases
      </h2>
      <BarChart width={1024} height={480} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" barSize={50} cursor="pointer" />
      </BarChart>
    </GraphWrapper>
  );
};

export default AllCases;
