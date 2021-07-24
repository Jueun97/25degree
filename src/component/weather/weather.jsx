import React from "react";
import Daily from "../daily_weather/daily";
import Hourly from "../hourly_weather/hourly";
import Loading from "../loading/loading";
import styles from "./weather.module.css";

const Weather = ({ data, address }) => {
  return (
    <section className={styles.weather}>
      {data.currentIcon != null && (
        <div>
          <h1
            className={styles.address}
          >{`${address.state} ${address.city}의 현재 날씨`}</h1>
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
      {data.currentIcon === null && <Loading />}
    </section>
  );
};

export default Weather;
