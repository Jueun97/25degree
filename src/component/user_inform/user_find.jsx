import React from "react";
import styles from "./inform.module.css";

const Find = (props) => (
  <section className={styles.input}>
    <div className={styles.section}>
      <p className={styles.text}>이름</p>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        className={styles.inputBox}
      />
    </div>
    <div className={styles.section}>
      <p className={styles.text}>아이디</p>
      <input
        type="text"
        placeholder="아이디를 입력하세요"
        className={styles.inputBox}
      />
    </div>
    <button className={styles.btn}>확인</button>
  </section>
);

export default Find;
