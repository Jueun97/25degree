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
          <div className={styles.tempData} key={item.dt}>
            <div className={styles.temp}>
              <p className={styles.textMin}>{`${Math.round(
                item.temp.min
              )}°`}</p>
              <p className={styles.text}>/</p>
              <p className={styles.textMax}>{`${Math.round(
                item.temp.max
              )}°`}</p>
            </div>
            <p className={styles.textDay}>{day[date]}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Daily;
