import React from "react";
import styles from "./hourly.module.css";

const Hourly = ({ hourly }) => {
  let date = new Date().getHours() - 1;

  return (
    <section>
      <div className={styles.container}>
        {hourly.map((item) => {
          date != 24 ? date++ : (date = 0);
          return (
            <div className={styles.temp}>
              <p className={styles.text}>{Math.round(item.temp)}° </p>
              <p className={styles.text}>{date}시</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hourly;
