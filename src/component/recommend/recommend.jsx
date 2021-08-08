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
        img = "./25degree_under_5";
        break;
      case Math.round(temp) < 10:
        cloth = "패딩, 두꺼운 코트, 털 자켓, 무스탕";
        img = "./25degree_6_to_9";
        break;
      case Math.round(temp) < 15:
        cloth = "코트, 야상, 자켓, 니트";
        img = "./25degree_10_to_14";
        break;
      case Math.round(temp) < 19:
        cloth = "자켓, 가디건, 야상, 트렌치 코트";
        img = "./25degree_15_to_18";
        break;
      case Math.round(temp) < 23:
        cloth = "가디건, 자켓, 후드집업, 니트, 셔츠, 후드티, 맨투맨";
        img = "./25degree_19_to_22";
        break;
      case Math.round(temp) < 27:
        cloth = "긴팔티, 셔츠, 블라우스";
        img = "./25degree_23_to_26";
        break;
      case Math.round(temp) < 30:
        cloth = "반팔, 얇은 셔츠, 얇은 긴팔";
        img = "./25degree_27_to_29";
        break;
      case Math.round(temp) >= 30:
        cloth = "민소매";
        img = "./25degree_more_than_30";
        break;
      default:
        break;
    }
    return { cloth: cloth, img: img };
  };
  return (
    <section className={styles.recommend}>
      {temp != null && (
        <div className={styles.contents}>
          <h1 className={styles.message}>{`오늘의 추천 : ${
            onRecommend(temp).cloth
          }`}</h1>
          <img
            src={`images/${onRecommend(temp).img}.png`}
            alt="illust"
            className={styles.illust}
          />
        </div>
      )}
      {temp === null && <Loading />}
    </section>
  );
};

export default Recommend;
