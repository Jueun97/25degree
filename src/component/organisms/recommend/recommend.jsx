import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import styles from "./recommend.module.css";
import Heading1 from "../../atoms/heading1/heading1";
import Heading2 from "../../atoms/heading2/heading2";
import Image from "../../atoms/image/image";

const Recommend = ({ temp }) => {
  const [information, setInformation] = useState({ clothes: '', image: '' });

  useEffect(() => {
    let clothes = "";
    let image = "";
    const tempData = Math.round(temp);
    switch (true) {
      case tempData < 5:
        clothes = "패딩, 두꺼운 코트, 목도리, 장갑";
        image = "./25degree_under_5";
        break;
      case tempData < 10:
        clothes = "패딩, 두꺼운 코트, 털 자켓, 무스탕";
        image = "./25degree_6_to_9";
        break;
      case tempData < 15:
        clothes = "코트, 야상, 자켓, 니트";
        image = "./25degree_10_to_14";
        break;
      case tempData < 19:
        clothes = "자켓, 가디건, 야상, 트렌치 코트";
        image = "./25degree_15_to_18";
        break;
      case tempData < 23:
        clothes = "가디건, 자켓, 후드집업, 니트, 셔츠, 후드티, 맨투맨";
        image = "./25degree_19_to_22";
        break;
      case tempData < 27:
        clothes = "긴팔티, 셔츠, 블라우스";
        image = "./25degree_23_to_26";
        break;
      case tempData < 30:
        clothes = "반팔, 얇은 셔츠, 얇은 긴팔";
        image = "./25degree_27_to_29";
        break;
      case tempData >= 30:
        clothes = "민소매";
        image = "./25degree_more_than_30";
        break;
      default:
        break;
    };
    setInformation({ clothes, image });
  },[temp])
  return (
    <section className={styles.container}>
      {temp != null && (
        <div className={styles.box}>
          <div className={styles.message}>
            <Heading1 className={"recommendTitle"} text="오늘의 추천" />
            <Heading2 className={"recommendContent"} text={information.clothes}></Heading2>
          </div>
          <Image  src={`images/${information.image}.png`}
            alt="illust"
            className="illust"/>
        </div>
      )}
    </section>
  );
};

export default Recommend;
