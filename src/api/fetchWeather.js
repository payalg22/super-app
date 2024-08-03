import axios from "axios";

const BASE_URL = " http://api.weatherapi.com/v1";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const fetchWeather = async (city = "Pune") => {
  console.log("Hi", API_KEY);
  try {
    console.log("Hi", API_KEY);
    const { data } = await axios.get(`${BASE_URL}/current.json`, {
      params: {
        key: API_KEY,
        q: city,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchWeather;
