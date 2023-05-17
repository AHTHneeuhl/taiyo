import { useDashboard } from "../hooks";

const Dashboard = () => {
  const { allCases, countryCases } = useDashboard();
  console.log(allCases, countryCases);

  return <div className="w-[84%] mx-auto">Dashboard</div>;
};

export default Dashboard;
