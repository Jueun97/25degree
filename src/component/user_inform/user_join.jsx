import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import styles from "./inform.module.css";

const Join = ({ joinUser, updateUser, userInfo, user }) => {
  const [redundancy, setRedundancy] = useState("");
  const nameRef = useRef();
  const idRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const genderRef = useRef();
  const history = useHistory();
  const joined = () => {
    alert("가입이 완료되었습니다:)");
    window.location.reload();
  };
  const updated = () => {
    alert("수정 완료되었습니다:) 다시 로그인해주세요!");
    history.push({
      pathname: "/",
    });
    window.location.reload();
  };

  const handleJoin = (join) => {
    const nameInput = nameRef.current.value;
    const idInput = idRef.current.value;
    const passwordInput = passwordRef.current.value;
    const emailInput = emailRef.current.value;
    const genderInput = genderRef.current.value;

    if (join) {
      if (redundancy === "unused" || redundancy === "") {
        alert("아이디 중복을 확인해주세요!");
      } else {
        joinUser({
          userId: idInput,
          name: nameInput,
          gender: genderInput,
          password: passwordInput,
          email: emailInput,
        });
        joined();
      }
    } else {
      if ((redundancy === "unused" || redundancy === "") && idRef.current.value !== userInfo.userId) {
        alert("아이디 중복을 확인해주세요!");
      } else {
        updateUser({
          defaultUserId: userInfo.userId,
          userId: idInput,
          name: nameInput,
          gender: genderInput,
          password: passwordInput,
          email: emailInput,
        });
        updated();
      }
    }
  };

  const onKeyPress = (event) => {
    if (event.code === "Enter") {
      handleJoin();
    }
  };
  const onClick = () => {
    const join = true;
    handleJoin(join);
  };
  const onClickUpdate = () => {
    const join = false;
    handleJoin(join);
  };
  const redundancyCheck = () => {
    let check = false;
    user.forEach((user) => {
      if (idRef.current.value === user.userId) {
        setRedundancy("unused");
        check = true;
      }
    });
    if (!check) {
      setRedundancy("used");
    }
  };
  return (
    <section className={styles.input}>
      <div className={styles.section}>
        <p className={styles.text}>아이디</p>
        <div className={styles.idSection}>
          <input
            ref={idRef}
            type="text"
            defaultValue={userInfo ? userInfo.userId : ""}
            placeholder="아이디를 입력하세요"
            className={`${styles.inputBox} ${styles.id}`}
            onKeyPress={onKeyPress}
          />
          <button
            className={`${styles.loginBtn} ${styles.redundancy}`}
            onClick={redundancyCheck}
          >
            중복 확인
          </button>
        </div>
      </div>
      {redundancy === "unused" && (
        <p className={styles.alertNo}>해당 아이디는 사용할 수 없습니다.</p>
      )}
      {redundancy === "used" && (
        <p className={styles.alertYes}>사용 가능한 아이디입니다.</p>
      )}
      <div className={styles.section}>
        <p className={styles.text}>이름</p>
        <input
          ref={nameRef}
          type="text"
          defaultValue={userInfo ? userInfo.name : ""}
          placeholder="이름을 입력하세요"
          className={styles.inputBox}
          onKeyPress={onKeyPress}
        />
      </div>
      <div className={styles.section}>
        <p className={styles.text}>비밀번호</p>
        <input
          ref={passwordRef}
          type="password"
          defaultValue={userInfo ? userInfo.password : ""}
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
          defaultValue={userInfo ? userInfo.email : ""}
          placeholder="이메일을 입력하세요"
          className={styles.inputBox}
          onKeyPress={onKeyPress}
        />
      </div>
      <div className={styles.section}>
        <p className={styles.text}>성별</p>
        <select
          name="gender"
          value={userInfo.gender}
          ref={genderRef}
          className={styles.inputBox}
        >
          <option>male</option>
          <option>female</option>
        </select>
        {/*     <input
          ref={genderRef}
          type="text"
          placeholder="성별을 입력하세요"
          className={styles.inputBox}
          onKeyPress={onKeyPress}
        /> */}
      </div>
      {userInfo && (
        <button className={styles.btn} onClick={onClickUpdate}>
          수정
        </button>
      )}
      {!userInfo && (
        <button className={styles.btn} onClick={onClick}>
          가입
        </button>
      )}
    </section>
  );
};

export default Join;
