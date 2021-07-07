import React, { useRef, useState } from "react";
import styles from "./card.module.css";

const Card = ({ onLogout }) => {
  const dropdownRef = useRef(null);
  const [active, setActive] = useState(false);
  const onButtonClick = () => setActive(!active);
  const onLogoutClick = () => onLogout();
  return (
    <div className={styles.menucontainer}>
      <button onClick={onButtonClick} className={styles.menutrigger}>
        <img
          src="./images/profile.png"
          alt="profile"
          className={styles.profile}
        />
      </button>
      <nav
        ref={dropdownRef}
        className={`${styles.menu} ${active ? styles.active : styles.inactive}`}
      >
        <ul className={styles.list}>
          <li>
            <button className={styles.button}>프로필</button>
            <button className={styles.button}>개인정보수정</button>
            <button className={styles.button}>업로드</button>
            <button className={styles.button} onClick={onLogoutClick}>
              로그아웃
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Card;
