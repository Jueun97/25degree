import React, { useRef } from "react";
import { useHistory  } from "react-router";
import styles from "./inform.module.css";

const Join = ({ authService,joinUser,updateUser,userInfo }) => {
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
      pathname: '/'
    })

    
  }

  const handleJoin = (join) => {
    const nameInput = nameRef.current.value;
    const idInput = idRef.current.value;
    const passwordInput = passwordRef.current.value;
    const emailInput = emailRef.current.value;
    const genderInput = genderRef.current.value;

    if (join) {
      joinUser({
        userId: idInput,
        name: nameInput,
        gender: genderInput,
        password: passwordInput,
        email: emailInput,
      });
      joined();
    } else {
      updateUser({
        defaultUserId : userInfo.userId,
        userId: idInput,
        name: nameInput,
        gender: genderInput,
        password: passwordInput,
        email: emailInput,
      })
      updated();
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
  }
  return (
    <section className={styles.input}>
      <div className={styles.section}>
        <p className={styles.text}>이름</p>
        <input
          ref={nameRef}
          type="text"
          defaultValue={userInfo?userInfo.name:''}
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
          defaultValue={userInfo?userInfo.userId:''}
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
          defaultValue={userInfo?userInfo.password:''}
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
          defaultValue={userInfo?userInfo.email:''}
          placeholder="이메일을 입력하세요"
          className={styles.inputBox}
          onKeyPress={onKeyPress}
        />
      </div>
      <div className={styles.section}>
        <p className={styles.text}>성별</p>
        <select name="gender" value={userInfo.gender} ref={genderRef} className={styles.inputBox}>
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
      {userInfo &&
        <button className={styles.btn} onClick={onClickUpdate}>
          수정
        </button>
      }
       {!userInfo &&
        <button className={styles.btn} onClick={onClick}>
          가입
        </button>
      }
    </section>
  );
};

export default Join;
