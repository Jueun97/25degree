import React, {useEffect, useState } from "react";
import { useLocation } from "react-router";
import Recommend from "../recommend/recommend";
import Weather from "../weather/weather";
import styles from "./section.module.css";
import Loading from "../loading/loading";
import Posts from "../posts/posts";
import Category from "../category/category";

const Section = ({ data, address, posts, user }) => {
  const location = useLocation();
  const [filteredPosts, setFIlteredPosts] = useState("");

  const onClickCategory = (category,gender) => {
    if (category === '온도') {
      posts = posts.filter((post) => data.currentTemp-1 <= post.degree && post.degree <= data.currentTemp+1);
    }
    else if(category === '성별'){
      posts = posts.filter((post) => post.gender === gender);
    }
    else {
      if (category) posts = posts.filter((post) => post.style === category);
    }
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
          user={user}
        ></Posts>
      </section>
    </section>
  );
};

export default Section;
