import React from "react";
import styles from "./hourly.module.css";

const Hourly = ({ hourly }) => {
  let date = new Date().getHours() - 1;
  let day = ["내일", "모레", "글피"];
  let cnt = -1;

  return (
    <section>
      <div className={styles.container}>
        {hourly.map((item,index) => {
          if (date !== 24) date++;
          else {
            date = 0;
            cnt++;
          }
          return (
            <div className={styles.temp} key={index}>
              <p className={styles.text}>{Math.round(item.temp)}° </p>
              {date !== 0 && <p className={styles.text}>{date}시</p>}
              {date === 0 && <p className={styles.textDay}>{day[cnt]}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hourly;
