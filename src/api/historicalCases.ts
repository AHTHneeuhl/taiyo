import axios from "axios";

const historicalCases = async () => {
  try {
    const { data } = await axios.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default historicalCases;
