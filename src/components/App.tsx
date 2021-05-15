import React from "react";
import { Header, WeatherCard } from ".";
import { WeatherProvider } from "../context/WeatherContext";
import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <WeatherProvider>
        <Header />
        <CardContainer>
          <WeatherCard id={0} />
          <WeatherCard id={1} />
          <WeatherCard id={2} />
          <WeatherCard id={3} />
          <WeatherCard id={4} />
        </CardContainer>
      </WeatherProvider>
      <Footer>Icons by amcharts (https://www.amcharts.com)</Footer>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  text-align: center;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;
  margin: 20px;
  align-items: center;
  justify-content: center;
`;

const Footer = styled.div`
  text-align: left;
  margin-left: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export default App;
