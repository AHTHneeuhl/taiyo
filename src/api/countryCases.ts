import axios from "axios";
import { CountryCasesAdapter } from "../adapters";

const adapter = new CountryCasesAdapter();
const countryCases = async () => {
  try {
    const { data } = await axios.get(
      "https://disease.sh/v3/covid-19/countries"
    );
    return adapter.getParseResponse(data);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default countryCases;
