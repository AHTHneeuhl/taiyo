import axios from "axios";
import { HistoricalCasesAdapter } from "../adapters";

const adapter = new HistoricalCasesAdapter();
const historicalCases = async () => {
  try {
    const { data } = await axios.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    return adapter.getParseResponse(data);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default historicalCases;
