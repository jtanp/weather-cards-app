import React, { createContext, useState, ReactNode } from "react";
import { City, Weather } from "../types";
import { getData } from "../api";

interface Context {
  cityData: City;
  weatherData: Weather;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleCityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUnitChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const initialState = {
  cityData: {} as City,
  weatherData: {} as Weather,
  handleSubmit: () => {},
  handleCityChange: () => {},
  handleUnitChange: () => {},
};

interface Props {
  children: ReactNode;
}

export const WeatherContext = createContext<Context>(initialState);

export const WeatherProvider = ({ children }: Props) => {
  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState({} as City);
  const [weatherData, setWeatherData] = useState({} as Weather);
  const [unit, setUnit] = useState({ type: "metric", symbol: "°C" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await getData(city, unit.type);
    if (data !== undefined) {
      //console.log(data);
      setCityData(data.cityData[0]);
      setWeatherData({ ...data.weatherData, unit: unit });
    }
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value;
    const symbol = e.target.options[e.target.selectedIndex].text;
    setUnit({ type: type, symbol: symbol });
  };

  return (
    <WeatherContext.Provider
      value={{
        cityData,
        weatherData,
        handleSubmit,
        handleCityChange,
        handleUnitChange,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
