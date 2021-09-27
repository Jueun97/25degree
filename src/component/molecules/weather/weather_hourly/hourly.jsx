import React from "react";
import styles from "./hourly.module.css";
import Span from "../../atoms/span/span";
const Hourly = ({ hourly }) => {
  let date = new Date().getHours() - 1;
  let day = ["내일", "모레"];
  let cnt = -1;

  return (
    <section>
      <div className={styles.container}>
        {hourly.slice(0, 24).map((item) => {
          if (date !== 24) date++;
          else {
            date = 0;
            cnt++;
          }
          return (
            <div className={styles.box} key={item.dt}>
              <Span className="hourly" idName="temp" text={`${Math.round(item.temp)}°`}/>
              {date !== 0 && <Span className="hourly" idName="tempTime" text={`${date}시`}/>}
              {date === 0 && <Span className="hourly" idName="tempDay" text={day[cnt]}/>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hourly;
