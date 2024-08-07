import { useEffect, useState } from "react";
import styles from "./weather-widget.module.css";
import fetchWeather from "../api/fetchWeather";
import WeatherUnit from "./WeatherUnit";
import pressureIcon from "../assets/pressure.png";
import windIcon from "../assets/wind.png";
import humidityIcon from "../assets/humidity.png";
import formatDateTime from "../utils/formateDateTime";

export default function WeatherWidget() {
  const [time, setTime] = useState();
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
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

  useEffect(() => {
    let timerId = setInterval(() => {
      setTime(formatDateTime());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.date}>
        <h1 className={styles.font}>{time?.fDate}</h1>
        <h1 className={styles.font}>{time?.fTime}</h1>
      </div>
      <div className={styles.weather}>
        <div>
          <img className={styles.condition} src={weatherData?.thumbnail} />
          <p>{weatherData?.condition}</p>
        </div>
        <div>
          <h1 className={styles.font + " " + styles.temperature}>
            {Math.round(weatherData?.temperature)}&deg;C
          </h1>
          <WeatherUnit
            icon={pressureIcon}
            value={weatherData?.pressure + " mbar"}
            entity="Pressure"
          />
        </div>
        <div>
          <WeatherUnit
            icon={windIcon}
            value={weatherData?.wind + " km/hr"}
            entity="Wind"
          />
          <WeatherUnit
            icon={humidityIcon}
            value={weatherData?.humidity + "%"}
            entity="Humidity"
          />
        </div>
      </div>
    </div>
  );
}
