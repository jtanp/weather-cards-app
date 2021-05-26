import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { convertDate, getWeatherIcon } from "../utils";
import styled from "styled-components";

interface Props {
  id: number;
}

const WeatherCard = ({ id }: Props) => {
  const { cityData, weatherData } = useContext(WeatherContext);

  return (
    <>
      {cityData && weatherData ? (
        <Card>
          <Info>
            <h1>
              {cityData.name}, {cityData.country}
            </h1>
            <h3>{convertDate(id, weatherData)}</h3>
          </Info>
          <WeatherIcon>
            <img
              src={getWeatherIcon(weatherData.daily[id].weather[0].id)}
              alt=""
              width="128"
              height="128"
            />
          </WeatherIcon>
          <TemperatureContainer>
            <DayTemperature>
              {weatherData.daily[id].temp.day.toFixed(1)}
              {weatherData.unit.symbol}
            </DayTemperature>
            <MaxMinContainer>
              <img src="/icons/arrows.png" alt="" width="32" height="32" />
              <MaxMinData>
                <p>
                  {weatherData.daily[id].temp.max.toFixed(1)}
                  {weatherData.unit.symbol}
                </p>
                <p>
                  {weatherData.daily[id].temp.min.toFixed(1)}
                  {weatherData.unit.symbol}
                </p>
              </MaxMinData>
            </MaxMinContainer>
          </TemperatureContainer>
          <Description>
            <h2>{weatherData.daily[id].weather[0].description}</h2>
          </Description>
        </Card>
      ) : null}
    </>
  );
};

const Card = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-areas:
    "info info"
    "icon temperatures"
    "icon temperatures"
    "description description";
  text-align: center;
  height: 300px;
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
  background-color: rgba(20, 30, 50, 0.8);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.6);
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: rgba(20, 30, 50, 0.6);
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const Info = styled.div`
  grid-area: info;
`;

const WeatherIcon = styled.div`
  grid-area: icon;
`;

const TemperatureContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  grid-area: temperatures;
`;

const DayTemperature = styled.h1`
  font-size: 40px;
`;

const Description = styled.div`
  grid-area: description;
`;

const MaxMinContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  img {
    justify-self: end;
  }
`;

const MaxMinData = styled.div`
  justify-self: start;
  p {
    font-size: 18px;
  }
`;

export default WeatherCard;
