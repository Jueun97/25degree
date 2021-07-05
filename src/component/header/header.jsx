import styles from "./header.module.css";
import { FaSearch } from "react-icons/fa";
import { useHistory, useLocation } from "react-router";
import { useEffect, useState } from "react";

const Header = ({ authService }) => {
  const [id, setId] = useState(null);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    if (location.state != null) {
      setId(location.state.id);
    }
  }, [location]);
  console.log(id);

  const onLogin = () => {
    history.push("/login");
  };
  const onLogout = () => {
    setId(null);
    authService.logout();
  };
  return (
    <header className={styles.header}>
      <h2 className={styles.logo}>25도씨</h2>
      <div className={styles.search}>
        <input type="search" placeholder="Search" className={styles.inputbox} />
        <button className={styles.inputBtn}>
          <FaSearch className={styles.icon} />
        </button>
      </div>

      {id && (
        <button className={styles.loginBtn} onClick={onLogout}>
          로그아웃
        </button>
      )}
      {id == null && (
        <button className={styles.loginBtn} onClick={onLogin}>
          로그인
        </button>
      )}
    </header>
  );
};

export default Header;
