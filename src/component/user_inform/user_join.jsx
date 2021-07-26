import React, { useRef } from "react";
import styles from "./inform.module.css";

const Join = ({ joinUser }) => {
  const nameRef = useRef();
  const idRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const genderRef = useRef();

  const joined = () => {
    alert("가입이 완료되었습니다:)");
    window.location.reload();
  };

  const handleJoin = () => {
    const nameInput = nameRef.current.value;
    const idInput = idRef.current.value;
    const passwordInput = passwordRef.current.value;
    const emailInput = emailRef.current.value;
    const genderInput = genderRef.current.value;

    joinUser({
      userId: idInput,
      name: nameInput,
      gender: genderInput,
      password: passwordInput,
      email: emailInput,
    });
    joined();
  };

  const onKeyPress = (event) => {
    if (event.code === "Enter") {
      handleJoin();
    }
  };
  const onClick = () => {
    handleJoin();
  };
  return (
    <section className={styles.input}>
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
      <div className={styles.section}>
        <p className={styles.text}>비밀번호</p>
        <input
          ref={passwordRef}
          type="password"
          placeholder="비밀번호 입력하세요"
          className={styles.inputBox}
          onKeyPress={onKeyPress}
        />
      </div>
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
      <div className={styles.section}>
        <p className={styles.text}>성별</p>
        <input
          ref={genderRef}
          type="text"
          placeholder="성별을 입력하세요"
          className={styles.inputBox}
          onKeyPress={onKeyPress}
        />
      </div>
      <button className={styles.btn} onClick={onClick}>
        가입
      </button>
    </section>
  );
};

export default Join;
