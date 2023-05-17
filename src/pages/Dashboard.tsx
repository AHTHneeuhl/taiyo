import {
  AllCases,
  CountryCases,
  CountryCasesMap,
} from "../components/Dashboard";

const Dashboard = () => {
  return (
    <div className="w-[88%] mx-auto">
      <AllCases />
      <CountryCases />
      <CountryCasesMap />
    </div>
  );
};

export default Dashboard;
