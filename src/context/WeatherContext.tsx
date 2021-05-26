import React, { createContext, useState, ReactNode } from "react";
import { City, Unit, Weather } from "../types";
import { getData } from "../api";

interface Context {
  cityData: City | null;
  weatherData: Weather | null;
  loading: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleCityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUnitChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const initialState = {
  cityData: null,
  weatherData: null,
  loading: false,
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
  const [cityData, setCityData] = useState<City | null>(null);
  const [weatherData, setWeatherData] = useState<Weather | null>(null);
  const [unit, setUnit] = useState<Unit>({ type: "metric", symbol: "°C" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = await getData(city, unit.type);
    if (data !== undefined) {
      //console.log(data);
      setCityData(data.cityData[0]);
      setWeatherData({ ...data.weatherData, unit: unit });
    }
    setLoading(false);
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
        loading,
        handleSubmit,
        handleCityChange,
        handleUnitChange,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
