import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Join from "./user_join";
import Find from "./user_find";
import styles from "./inform.module.css";
import Login from "./user_login";

const Inform = ({
  authService,
  user,
  joinUser,
  updateUser,
  actionStatus,
  users,
}) => {
  const location = useLocation();
  const [action, setAction] = useState(actionStatus ? actionStatus : "login");
  const [userInfo, setUserinfo] = useState("");

  useEffect(() => {
    if (location.state) {
      console.log("settings", location.state);
      const userinfo = users.filter(
        (user) => user.userId === location.state.userId
      );
      setUserinfo(userinfo[0]);
    }
  });
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
          joinUser={joinUser}
        />
      )}
      {action === "find" && <Find user={user} />}
      {action === "join" && (
        <Join
          authService={authService}
          joinUser={joinUser}
          updateUser={updateUser}
          userInfo={userInfo}
          user={user}
        />
      )}
    </div>
  );
};

export default Inform;
