import React, { useRef, useState } from "react";
import styles from "./inform.module.css";

const Find = ({ user }) => {
  const [action, setAction] = useState("id");
  const nameRef = useRef();
  const idRef = useRef();
  const emailRef = useRef();

  const handelAction = (event) => {
    console.log(event.target.name);
    setAction(event.target.name);
  };

  const handleFind = () => {
    const nameInput = nameRef.current.value;
    let finded = false;

    if (action === "id") {
      const emailInput = emailRef.current.value;
      user.forEach((users) => {
        if (users.name === nameInput && users.email === emailInput) {
          finded = true;
          console.log(users.userId);
        }
      });
    } else if (action === "password") {
      const idInput = idRef.current.value;
      user.forEach((users) => {
        if (users.name === nameInput && users.userId === idInput) {
          finded = true;
          console.log(users.password);
        }
      });
    }
    if (!finded) {
      alert("정보가 없습니다.");
    }
  };

  const onKeyPress = (event) => {
    if (event.code === "Enter") {
      handleFind();
    }
  };
  const onClick = () => {
    handleFind();
  };

  return (
    <section className={styles.input}>
      <div className={styles.classify}>
        <button name="id" className={styles.classifyBtn} onClick={handelAction}>
          아이디 찾기
        </button>
        <button
          name="password"
          className={styles.classifyBtn}
          onClick={handelAction}
        >
          비밀번호 찾기
        </button>
      </div>

      <div className={styles.section}>
        <p className={styles.text}>이름</p>
        <input
          ref={nameRef}
          type="text"
          placeholder="이름을 입력하세요"
          className={styles.inputBox}
          onKeyPress={onKeyPress}
        />
      </div>
      {action === "id" && (
        <div className={styles.section}>
          <p className={styles.text}>이메일</p>
          <input
            ref={emailRef}
            type="text"
            placeholder="이메일을 입력하세요"
            className={styles.inputBox}
            onKeyPress={onKeyPress}
          />
        </div>
      )}
      {action === "password" && (
        <div className={styles.section}>
          <p className={styles.text}>아이디</p>
          <input
            ref={idRef}
            type="text"
            placeholder="아이디를 입력하세요"
            className={styles.inputBox}
            onKeyPress={onKeyPress}
          />
        </div>
      )}

      <button className={styles.btn} onClick={onClick}>
        확인
      </button>
    </section>
  );
};

export default Find;
