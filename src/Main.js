import React from "react";
import WeatherData from "./WeatherData";

export default function Main() {
  return (
    <main>
      <WeatherData defaultCity="Paris" />
    </main>
  );
}
