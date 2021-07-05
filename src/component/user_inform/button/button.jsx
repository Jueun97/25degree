import React from "react";
import styles from "./button.module.css";

const Button = ({ onFind }) => {
  const onClick = (event) => {
    onFind(event.target.name);
  };

  return (
    <section className={styles.content}>
      <button name="find" className={styles.btn} onClick={onClick}>
        아이디/비밀번호 찾기
      </button>
      <button name="join" className={styles.btn} onClick={onClick}>
        회원가입
      </button>
    </section>
  );
};

export default Button;
