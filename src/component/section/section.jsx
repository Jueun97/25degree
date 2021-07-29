import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router';
import Recommend from "../recommend/recommend";
import Weather from "../weather/weather";
import styles from "./section.module.css";
import GoogleMap from "../../service/geocode";
import Loading from "../loading/loading";
import Posts from "../posts/posts";
import Category from "../category/category";

const Section = ({ getData, city, posts }) => {
  const location = useLocation();
  const [data, setData] = useState({
    currentTemp: null,
    currentIcon: null,
    daily: null,
    hourly: null,
  });
  const [filteredPosts, setFIlteredPosts] = useState(posts);
  const [address, setAddress] = useState("");
  useEffect(() => {
    if (city === "location") {
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
          setAddress(res);
        });
      });
    } else {
      getData //
        .getWeather(city[0].coord.lat, city[0].coord.lon)
        .then((datas) => {
          console.log(datas);
          setData({
            currentTemp: datas.current.temp,
            currentIcon: datas.current.weather[0].icon,
            daily: datas.daily,
            hourly: datas.hourly,
          });
        });
      setAddress({ state: "", city: city[0].value });
    }
  }, [getData, city]);
  const onClickCategory = (category) => {
    if(category)
      posts = posts.filter(post => post.style === category)
    setFIlteredPosts(posts);
  }

  return (
    <section className={styles.section}>
      <section className={styles.weather}>
        {address && <Weather data={data} address={address} />}
        {address === null && <Loading />}
        <Recommend temp={data.currentTemp} />
      </section>
      <section className={styles.posts}>
        <Category onClickCategory={onClickCategory}></Category> 
        <Posts posts={filteredPosts} userId={location.state ? location.state.userId : null}></Posts>
      </section>
    </section>
  );
};

export default Section;
