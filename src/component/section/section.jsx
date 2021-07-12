import React, { useEffect, useState } from "react";
import Recommend from "../recommend/recommend";
import Weather from "../weather/weather";
import styles from "./section.module.css";

const Section = ({ getData }) => {
  const [data, setData] = useState({
    currentTemp: null,
    currentIcon: null,
    daily: null,
    hourly: null,
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const latitude = pos.coords.latitude;
      const longitude = pos.coords.longitude;
      getData //
        .getWeather(latitude, longitude)
        .then((datas) =>
          setData({
            currentTemp: datas.current.temp,
            currentIcon: datas.current.weather[0].icon,
            daily: datas.daily,
            hourly: datas.hourly,
          })
        );
    });
  }, []);
  return (
    <section className={styles.section}>
      <Weather data={data} />
      <Recommend temp={data.currentTemp} />
    </section>
  );
};

export default Section;
