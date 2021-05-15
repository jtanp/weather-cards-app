import { City, Weather } from "./types";

const API_KEY = "bed7115776ca1cb02795cb60f66b4ef8";

export const getCityData = async (city: string): Promise<City[]> => {
  return fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
};

export const getCityWeather = async (city: City): Promise<Weather> => {
  const cityData = await getCityData(city.name);
  const lat = cityData[0].lat;
  const lon = cityData[0].lon;

  return fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=alerts,minutely,current&appid=${API_KEY}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
};

export const getData = async (city: string) => {
  const cityData = await getCityData(city);
  if (cityData === undefined) {
    alert("Weather data not found.");
    return;
  }
  const weatherData = await getCityWeather(cityData[0]);
  return { cityData, weatherData };
};
