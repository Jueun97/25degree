import React from "react";
import styles from "./inform.module.css";

const Join = (props) => (
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
    <div className={styles.section}>
      <p className={styles.text}>비밀번호</p>
      <input
        type="password"
        placeholder="비밀번호 입력하세요"
        className={styles.inputBox}
      />
    </div>
    <div className={styles.section}>
      <p className={styles.text}>이메일</p>
      <input
        type="text"
        placeholder="이메일을 입력하세요"
        className={styles.inputBox}
      />
    </div>
    <div className={styles.section}>
      <p className={styles.text}>성별</p>
      <input
        type="text"
        placeholder="성별을 입력하세요"
        className={styles.inputBox}
      />
    </div>
    <button className={styles.btn}>가입</button>
  </section>
);

export default Join;
