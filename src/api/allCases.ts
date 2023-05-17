import axios from "axios";

const allCases = async () => {
  try {
    const { data } = await axios.get("https://disease.sh/v3/covid-19/all");
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default allCases;
