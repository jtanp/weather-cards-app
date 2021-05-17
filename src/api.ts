import { City, Weather } from "./types";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getCityData = async (city: string): Promise<City[]> => {
  return fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
};

export const getCityWeather = async (
  city: City,
  unit: string
): Promise<Weather> => {
  const lat = city.lat;
  const lon = city.lon;

  return fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&exclude=alerts,minutely,current&appid=${API_KEY}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
};

export const getData = async (city: string, unit: string) => {
  const cityData = await getCityData(city);
  if (cityData === undefined || cityData.length === 0) {
    alert("City data not found.");
    return;
  }
  const weatherData = await getCityWeather(cityData[0], unit);
  if (weatherData === undefined) {
    alert("Weather data not found.");
    return;
  }
  return { cityData, weatherData };
};
