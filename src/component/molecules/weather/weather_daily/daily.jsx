import React from "react";
import styles from "./daily.module.css";
import Span from '../../../atoms/span/span';
const Daily = ({ daily }) => {
  let date = new Date().getDay();
  let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <section className={styles.container}>
      {daily.map((item) => {
        date === 6 ? (date = 0) : date++;
        return (
          <div className={styles.tempContainer} key={item.dt}>
            <div className={styles.tempBox}>
              <Span className="temp" idName="tempMin" text={`${Math.round(
                item.temp.min
              )}°`}/>
              <Span text="/"/>
              <Span className="temp" idName="tempMax" text={`${Math.round(
                item.temp.max
              )}°`}/>
            </div>
            <Span className="temp" idName="tempDay" text={day[date]}/>
          </div>
        );
      })}
    </section>
  );
};

export default Daily;
