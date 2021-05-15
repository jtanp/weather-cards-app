import { Weather } from "./types";

export const convertDate = (id: number, weatherData: Weather) => {
  if (weatherData !== undefined && weatherData.daily?.[id].dt) {
    const date = new Date(weatherData.daily[id].dt * 1000);
    return date.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
  }
};

export const getWeatherIcon = (id: number) => {
  if (id >= 200 && id <= 232) {
    return "/icons/weather/thunder.svg";
  }
  if (id >= 300 && id <= 321) {
    return "/icons/weather/moderate-rain.svg";
  }
  if (id === 500) {
    return "/icons/weather/light-rain.svg";
  }
  if (id === 501) {
    return "/icons/weather/moderate-rain.svg";
  }
  if (id === 511) {
    return "/icons/weather/freezing-rain.svg";
  }
  if ((id >= 502 && id <= 504) || (id >= 520 && id <= 531)) {
    return "/icons/weather/heavy-rain.svg";
  }
  if (id === 600 || id === 615) {
    return "/icons/weather/light-snow.svg";
  }
  if (id === 601 || id === 616) {
    return "/icons/weather/moderate-snow.svg";
  }
  if (id === 602 || (id >= 620 && id <= 622)) {
    return "/icons/weather/heavy-snow.svg";
  }
  if (id >= 611 && id <= 613) {
    return "/icons/weather/freezing-rain.svg";
  }
  if (id >= 701 && id <= 781) {
    return "/icons/weather/mist.png";
  }
  if (id === 800) {
    return "/icons/weather/sun.svg";
  }
  if (id >= 801 && id <= 802) {
    return "/icons/weather/cloud-sun.svg";
  }
  if (id >= 803 && id <= 804) {
    return "/icons/weather/clouds.svg";
  }
};
