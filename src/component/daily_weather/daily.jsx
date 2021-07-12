import React from "react";
import styles from "./daily.module.css";

const Daily = ({ daily }) => {
  let date = new Date().getDay();
  let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <section className={styles.container}>
      {daily.map((item) => {
        date === 6 ? (date = 0) : date++;
        return (
          <div className={styles.tempData}>
            <div className={styles.temp}>
              <p
                className={styles.text}
                style={{ color: "blue" }}
              >{`${Math.round(item.temp.min)}°`}</p>
              <p className={styles.text}>/</p>
              <p
                className={styles.text}
                style={{ color: "red" }}
              >{`${Math.round(item.temp.max)}°`}</p>
            </div>
            <p className={styles.text} style={{ fontWeight: "bold" }}>
              {day[date]}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default Daily;
