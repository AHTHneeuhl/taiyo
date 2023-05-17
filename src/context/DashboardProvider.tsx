import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";
import { allCasesApi, countryCasesApi, historicalCasesApi } from "../api";

interface IDashboardContext {
  allCases: any[];
  countryCases: any[];
  historicalCases: any[];
}

export const DashboardContext = createContext<IDashboardContext>({
  allCases: [],
  countryCases: [],
  historicalCases: [],
});

const DashboarProvider = (props: React.PropsWithChildren<{}>) => {
  const { data: allCases } = useQuery(["allCases"], allCasesApi);
  const { data: countryCases } = useQuery(["countryCases"], countryCasesApi);
  const { data: historicalCases } = useQuery(
    ["historicalCases"],
    historicalCasesApi
  );

  return (
    <DashboardContext.Provider
      value={{ allCases, countryCases, historicalCases }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};

export default DashboarProvider;
