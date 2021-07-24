import styles from "./header.module.css";
import { FaSearch } from "react-icons/fa";
import { useHistory, useLocation } from "react-router";
import { useEffect, useState } from "react";
import Card from "../card/card";

const Header = ({ authService,userId }) => {
  const [id, setId] = useState(userId? userId : null);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.state != null && id == null) {
      setId(location.state.id);
    }
  }, [location]);
  const onClickLogo = () => {
    history.push({
      pathname: '/',
      state: { id:userId}
  });
  }
  const onLogin = () => {
    history.push("/login");
  };
  const onLogout = () => {
    setId(null);
    authService.logout();
  };
  const onMenu = () => {
    console.log("wow");
  };
  return (
    <header className={styles.header}>
      <h2 className={styles.logo} onClick={onClickLogo} >25도씨</h2>
      <div className={styles.search}>
        <input type="search" placeholder="Search" className={styles.inputbox} />
        <button className={styles.inputBtn}>
          <FaSearch className={styles.icon} />
        </button>
      </div>

      {id && <Card onLogout={onLogout} userId={id} />}
      {id == null && (
        <button className={styles.loginBtn} onClick={onLogin}>
          로그인
        </button>
      )}
    </header>
  );
};

export default Header;
