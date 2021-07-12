import React from "react";
import { IoMdHeartEmpty, IoMdSunny } from "react-icons/io";
import Daily from "../daily_weather/daily";
import Hourly from "../hourly_weather/hourly";
import styles from "./weather.module.css";

const Weather = ({ data }) => {
  return (
    <section className={styles.weather}>
      {data.currentIcon != null && (
        <div>
          <div className={styles.current}>
            <img
              className={styles.weatherImg}
              src={`http://openweathermap.org/img/w/${data.currentIcon}.png`}
              alt="weatherIcon"
            />
            <h1 className={styles.cuurentTemp}>
              {Math.round(data.currentTemp)}°
            </h1>
          </div>
          <Hourly hourly={data.hourly} />
          <Daily daily={data.daily} />
        </div>
      )}
      {data.currentIcon === null && <div className={styles.loader10} />}
    </section>
  );
};

export default Weather;
