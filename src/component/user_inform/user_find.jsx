import React, { useRef, useState } from "react";
import styles from "./inform.module.css";
import emailjs from "emailjs-com";

const Find = ({ user }) => {
  const [action, setAction] = useState("");
  const [actionDone, setActionDone] = useState(true);
  const [data, setData] = useState("no data");
  const [state, setState] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const formRef = useRef();

  const handelAction = (event) => {
    setAction(event.target.name);
    setActionDone(false);
  };
  const buttonStatus = (actionName) => {
    if (actionDone) return;
    else {
      if (action === actionName) return styles.active;
      else return styles.inactive;
    }
  };

  const handleFind = () => {
    const nameInput = nameRef.current.value;
    const emailInput = emailRef.current.value;
    let finded = false;
    if (action === "") alert("아이디찾기인지 비밀번호찾기인지 클릭해주세요:)");
    else {
      user.forEach((users) => {
        if (users.name === nameInput && users.email === emailInput) {
          setState(true);
          finded = true;
          if (action === "id") setData(users.userId);
          else if (action === "password") setData(users.password);
          alert(
            "확인되었습니다. 아래 버튼을 클릭하면 이메일로 회원정보가 전송됩니다."
          );
        }
      });
      if (!finded) alert("정보가 없습니다.");
    }
  };

  const onKeyPress = (event) => {
    if (event.code === "Enter") {
      handleFind();
    }
  };
  const validation = () => {
    handleFind();
  };
  const sendEmail = (event) => {
    event.preventDefault();

    if (data !== "no data") {
      emailjs
        .sendForm(
          "25degree",
          `${process.env.REACT_APP_EMAILJS_TEMPLATE}`,
          event.target,
          `${process.env.REACT_APP_EMAILJS_USERID}`
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setState(false);
      setActionDone(true);
      setAction("");
      formRef.current.reset();
      setData("no data");
      alert("전송완료! 이메일을 확인해주세용");
    }
  };
  return (
    <div className={styles.input}>
      <div className={styles.classify}>
        <button
          name="id"
          className={`${styles.classifyBtn} ${buttonStatus("id")}`}
          onClick={handelAction}
        >
          아이디 찾기
        </button>
        <button
          name="password"
          className={`${styles.classifyBtn} ${buttonStatus("password")}`}
          onClick={handelAction}
        >
          비밀번호 찾기
        </button>
      </div>
      <form ref={formRef} className={styles.form} onSubmit={sendEmail}>
        <div className={styles.section}>
          <p className={styles.text}>이름</p>
          <input
            ref={nameRef}
            name="name"
            type="text"
            placeholder="이름을 입력하세요"
            className={styles.inputBox}
            onKeyPress={onKeyPress}
          />
        </div>
        <div className={styles.section}>
          <p className={styles.text}>이메일</p>
          <input
            ref={emailRef}
            name="email"
            type="text"
            placeholder="이메일을 입력하세요"
            className={styles.inputBox}
            onKeyPress={onKeyPress}
          />
        </div>
        {action === "id" && (
          <div className={styles.section}>
            <input type="hidden" value="아이디" name="title" />
            <input type="hidden" value={data} name="text" />
          </div>
        )}
        {action === "password" && (
          <div className={styles.section}>
            <input type="hidden" value="비밀번호" name="title" />
            <input type="hidden" value={data} name="text" />
          </div>
        )}

        {state === false && (
          <button className={styles.btn} onClick={validation}>
            check
          </button>
        )}
        {state === true && (
          <input className={styles.btn} type="submit" value="Send" />
        )}
      </form>
    </div>
  );
};

export default Find;
