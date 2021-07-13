import React from "react";
import Loading from "../loading/loading";
import styles from "./recommend.module.css";

const Recommend = ({ temp }) => {
  const onRecommend = (temp) => {
    let cloth = "";
    let img = "";
    switch (true) {
      case Math.round(temp) < 5:
        cloth = "패딩, 두꺼운 코트, 목도리, 장갑";
        img = "./images/25degree-5.png";
        break;
      case Math.round(temp) < 10:
        cloth = "패딩, 두꺼운 코트, 털 자켓, 무스탕";
        img = "./images/25degree-5-10.png";
        break;
      case Math.round(temp) < 15:
        cloth = "코트, 야상, 자켓, 니트";
        img = "./images/25degree-10-15.png";
        break;
      case Math.round(temp) < 19:
        cloth = "자켓, 가디건, 야상, 트렌치 코트";
        img = "./images/25degree-15-19.png";
        break;
      case Math.round(temp) < 23:
        cloth = "가디건, 자켓, 후드집업, 니트, 셔츠, 후드티, 맨투맨";
        img = "./images/25degree-19-23.png";
        break;
      case Math.round(temp) < 27:
        cloth = "긴팔티, 셔츠, 블라우스";
        img = "./images/25degree-23-27.png";
        break;
      case Math.round(temp) < 30:
        cloth = "반팔, 얇은 셔츠, 얇은 긴팔";
        img = "./images/25degree-27-30.png";
        break;
      case Math.round(temp) >= 30:
        cloth = "민소매";
        img = "./images/25degree-30.png";
        break;
    }
    return cloth;
  };
  return (
    <section className={styles.recommend}>
      {temp != null && (
        <div>
          <h1 className={styles.message}>{`오늘의 추천 : ${onRecommend(
            temp
          )}`}</h1>
          <img
            src="./images/25degree-23-27.png"
            alt="illus"
            className={styles.illus}
          />
        </div>
      )}
      {temp === null && <Loading />}
    </section>
  );
};

export default Recommend;
