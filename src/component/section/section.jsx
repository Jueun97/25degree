import React, { useState } from "react";
import { useLocation } from "react-router";
import Recommend from "../recommend/recommend";
import Weather from "../weather/weather";
import styles from "./section.module.css";
import Loading from "../loading/loading";
import Posts from "../posts/posts";
import Category from "../category/category";

const Section = ({ data, address, posts }) => {
  const location = useLocation();

  const [filteredPosts, setFIlteredPosts] = useState("");

  const onClickCategory = (category) => {
    if (category) posts = posts.filter((post) => post.style === category);
    setFIlteredPosts(posts);
  };

  return (
    <section className={styles.section}>
      <section className={styles.weather}>
        {address && <Weather data={data} address={address} />}
        {address === null && <Loading />}
        <Recommend temp={data.currentTemp} />
      </section>
      <section className={styles.posts}>
        <Category onClickCategory={onClickCategory}></Category>
        <Posts
          posts={filteredPosts ? filteredPosts : posts}
          userId={location.state ? location.state.userId : null}
        ></Posts>
      </section>
    </section>
  );
};

export default Section;
