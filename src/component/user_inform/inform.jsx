import { useState, useEffect } from "react";
import Join from "./user_join";
import Find from "./user_find";
import styles from "./inform.module.css";
import Login from "./user_login";

const Inform = ({ authService, getData }) => {
  const [action, setAction] = useState("login");
  const [user, setUser] = useState([]);

  const handelAction = (name) => {
    setAction(name);
  };

  useEffect(() => {
    getData //
      .getUserInfo()
      .then((datas) => setUser(datas));
  }, [getData]);

  return (
    <div className={styles.informBox}>
      <h1 className={styles.logo}>25도씨</h1>
      {action === "login" && (
        <Login onFind={handelAction} authService={authService} user={user} />
      )}
      {action === "find" && <Find user={user} />}
      {action === "join" && <Join />}
    </div>
  );
};

export default Inform;
