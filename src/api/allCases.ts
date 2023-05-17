import axios from "axios";
import { AllCasesAdapter } from "../adapters";

const adapter = new AllCasesAdapter();

const allCases = async () => {
  try {
    const { data } = await axios.get("https://disease.sh/v3/covid-19/all");
    return adapter.getParseResponse(data);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default allCases;
