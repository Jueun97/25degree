import React, { useRef } from "react";
import { useHistory } from "react-router";
import Button from "./button/button";
import styles from "./inform.module.css";

const Login = ({ onFind, authService, user, joinUser }) => {
  const history = useHistory();
  const idRef = useRef();
  const passwordRef = useRef();

  const goToHome = (userId,profile) => {
    history.push({
      pathname: "/",
      state: {
        userId,
        userProfile: profile
      },
    });
  };
  const onLogin = (event) => {
    authService //
      .login(event.target.name)
      .then((data) => {
        console.log(data);
        if (event.target.name === "Google") {
          joinUser({
            userId: data.user.uid.substring(0, 15),
            name: data.user.bc.displayName,
            password: data.user.uid.substring(0, 15),
            email: data.user.bc.email,
          });
        } else if (event.target.name === "Github") {
          joinUser({
            userId: data.user.uid.substring(0, 15),
            name: data.additionalUserInfo.username,
            password: data.user.uid.substring(0, 15),
            email: data.user.email,
          });
        }
        goToHome(data.user.uid);
      });
  };

  const handleLogin = () => {
    let logined = false;
    const idInput = idRef.current.value;
    const passwordInput = passwordRef.current.value;

    user.forEach((users) => {
      if (users.userId === idInput && users.password === passwordInput) {
        logined = true;
        goToHome(users.userId,users.profile);
      }
    });
    if (!logined) {
      alert("확인 필요");
    }
  };

  const onKeyPress = (event) => {
    if (event.code === "Enter") {
      handleLogin();
    }
  };
  const onClick = () => {
    handleLogin();
  };

  return (
    <section className={styles.input}>
      <input
        ref={idRef}
        type="text"
        placeholder="아이디를 입력하세요"
        className={styles.inputBox}
        style={{ margin: "0.8em 0" }}
        onKeyPress={onKeyPress}
      />
      <input
        ref={passwordRef}
        type="password"
        placeholder="비밀번호를 입력하세요"
        className={styles.inputBox}
        style={{ margin: "0.8em 0" }}
        onKeyPress={onKeyPress}
      />
      <button className={styles.btn} onClick={onClick}>
        로그인
      </button>
      <p style={{ color: "gray" }}>or</p>
      <section className={styles.firebaseLogin}>
        <button name="Google" className={styles.loginBtn} onClick={onLogin}>
          구글 로그인
        </button>
        <button name="Github" className={styles.loginBtn} onClick={onLogin}>
          깃헙 로그인
        </button>
      </section>
      <Button onFind={onFind} />
    </section>
  );
};

export default Login;
