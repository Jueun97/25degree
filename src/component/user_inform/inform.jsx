import { useState } from "react";
import Join from "./user_join";
import Find from "./user_find";
import styles from "./inform.module.css";
import Login from "./user_login";

const Inform = ({ authService, user, loginedUser, joinUser }) => {
  const [action, setAction] = useState("login");

  const handelAction = (name) => {
    setAction(name);
  };

  return (
    <div className={styles.informBox}>
      <h1 className={styles.logo}>25도씨</h1>
      {action === "login" && (
        <Login
          onFind={handelAction}
          authService={authService}
          user={user}
          loginedUser={loginedUser}
        />
      )}
      {action === "find" && <Find user={user} />}
      {action === "join" && <Join joinUser={joinUser} />}
    </div>
  );
};

export default Inform;
