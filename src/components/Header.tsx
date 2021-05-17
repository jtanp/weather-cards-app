import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import styled from "styled-components";

const Header = () => {
  const { handleSubmit, handleCityChange, handleUnitChange } =
    useContext(WeatherContext);

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Weather cards</Title>
      <Input
        type="text"
        name="city"
        placeholder="City"
        onChange={(e) => handleCityChange(e)}
      />
      <Select name="unit" onChange={(e) => handleUnitChange(e)}>
        <Option value="metric">°C</Option>
        <Option value="imperial">°F</Option>
        <Option value="standard"> K</Option>
      </Select>
      <Button type="submit">Search</Button>
    </Form>
  );
};

const Form = styled.form`
  display: inline-block;
  width: 90%;
  height: 10vh;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 38px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  margin-bottom: 10px;
`;

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
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

const Select = styled.select`
  font-size: 18px;
  padding: 9px 5px;
  height: 41px;
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

const Option = styled.option`
  border: none;
  border-radius: 5px;
  background-color: rgba(70, 130, 240, 0.4);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.6);
`;

const Button = styled.button`
  font-size: 18px;
  padding: 10px 15px;
  margin: 10px;
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
