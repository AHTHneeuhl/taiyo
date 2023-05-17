import {
  AllCases,
  CountryCases,
  CountryCasesMap,
  HistoricalCases,
} from "../components/Dashboard";

const Dashboard = () => {
  return (
    <div className="w-[88%] mx-auto">
      <HistoricalCases />
      <AllCases />
      <CountryCases />
      <CountryCasesMap />
    </div>
  );
};

export default Dashboard;
