import React, { createContext, useState, ReactNode } from "react";
import { City, Weather } from "../types";

interface Context {
  city: string;
  setCity: (city: string) => void;
  cityData: City;
  setCityData: (city: City) => void;
  weatherData: Weather;
  setWeatherData: (weather: Weather) => void;
}

const initialState = {
  city: "",
  setCity: () => "",
  cityData: {} as City,
  setCityData: () => {},
  weatherData: {} as Weather,
  setWeatherData: () => {},
};

interface Props {
  children: ReactNode;
}

export const WeatherContext = createContext<Context>(initialState);

export const WeatherProvider = ({ children }: Props) => {
  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState({} as City); //Any
  const [weatherData, setWeatherData] = useState({} as Weather); //Any

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        cityData,
        setCityData,
        weatherData,
        setWeatherData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
