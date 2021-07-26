import React, { useEffect, useState } from "react";
import Recommend from "../recommend/recommend";
import Weather from "../weather/weather";
import styles from "./section.module.css";
import GoogleMap from "../../service/geocode";
import Loading from "../loading/loading";

const Section = ({ getData }) => {
  const [data, setData] = useState({
    currentTemp: null,
    currentIcon: null,
    daily: null,
    hourly: null,
  });
  const [address, setAddress] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      getData //
        .getWeather(pos.coords.latitude, pos.coords.longitude)
        .then((datas) =>
          setData({
            currentTemp: datas.current.temp,
            currentIcon: datas.current.weather[0].icon,
            daily: datas.daily,
            hourly: datas.hourly,
          })
        );
      GoogleMap(pos.coords.latitude, pos.coords.longitude).then((res) => {
        console.log(res);
        setAddress(res);
      });
      console.log(address);
    });
  }, [getData]);

  return (
    <section className={styles.section}>
      {address && <Weather data={data} address={address} />}
      {address === null && <Loading />}
      <Recommend temp={data.currentTemp} />
    </section>
  );
};

export default Section;
