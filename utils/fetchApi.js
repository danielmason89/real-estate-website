import axios from "axios";

export const baseURL = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "08f7e87280mshb52733fc5054648p16cb6djsn07c0d5ca4426",
    },
  });
  return data;
};
