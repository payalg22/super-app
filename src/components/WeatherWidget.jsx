import { useEffect, useState } from "react";
import styles from "./weather-widget.module.css";
import fetchWeather from "../api/fetchWeather";
import WeatherUnit from "./WeatherUnit";
import pressureIcon from "../assets/pressure.png";
import windIcon from "../assets/wind.png";
import humidityIcon from "../assets/humidity.png";

export default function WeatherWidget() {
  const [time, setTime] = useState();
  const [weatherData, setWeatherData] = useState({
    temperature: 0,
    condition: "",
    thumbnail: "",
    pressure: 0,
    wind: 0,
    humidity: 0,
  });

  useEffect(() => {
    getTime();
    fetchWeather().then((data) => {
      const { temp_c, condition, pressure_mb, wind_kph, humidity } =
        data.current;
      setWeatherData({
        temperature: temp_c,
        condition: condition.text,
        thumbnail: condition.icon,
        pressure: pressure_mb,
        wind: wind_kph,
        humidity,
      });
    });
  }, []);

  function getTime() {
    const date = new Date();
    setTime(
      date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
      })
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.date}>
        <h1 className={styles.font}>{new Date().toLocaleDateString().replaceAll("/", "-")}</h1>
        <h1 className={styles.font}>{time}</h1>
      </div>
      <div className={styles.weather}>
        <div>
          <img className={styles.condition} src={weatherData.thumbnail} />
          <p>{weatherData.condition}</p>
        </div>
        <div>
          <h1 className={styles.font + " " + styles.temperature}>{Math.round(weatherData.temperature)}&deg;C</h1>
          <WeatherUnit
            icon={pressureIcon}
            value={weatherData.pressure + " mbar"}
            entity="Pressure"
          />
          {/* <p>{weatherData.pressure} mbar</p>
          <p>Pressure</p> */}
        </div>
        <div>
          <WeatherUnit
            icon={windIcon}
            value={weatherData.wind + " km/hr"}
            entity="Wind"
          />
          <WeatherUnit
            icon={humidityIcon}
            value={weatherData.humidity + "%"}
            entity="Humidity"
          />
          {/* <p>{weatherData.wind} </p>
          <p>{weatherData.humidity} </p> */}
        </div>
      </div>
    </div>
  );
}
