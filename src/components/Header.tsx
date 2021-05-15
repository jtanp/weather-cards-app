import React, { useContext } from "react";
import { getData } from "../api";
import { WeatherContext } from "../context/WeatherContext";
import styled from "styled-components";

const Header = () => {
  const { city, setCity, setCityData, setWeatherData } =
    useContext(WeatherContext);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await getData(city);
    if (data !== undefined) {
      console.log(data);
      setCityData(data.cityData[0]);
      setWeatherData(data.weatherData);
    }
  };

  return (
    <SearchContainer>
      <form onSubmit={submit}>
        <Title>Weather cards</Title>
        <Input
          type="text"
          name="city"
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </form>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: inline-block;
  width: 90%;
  height: 10vh;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 38px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
`;

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 20px 10px 10px 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.6);
  transition: 0.2s ease-in-out;
  &:focus {
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

const Button = styled.button`
  font-size: 18px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.6);
  transition: 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

export default Header;
