import React, { useRef, useState } from "react";
import styles from "./card.module.css";
import { useHistory } from 'react-router-dom';

const Card = ({ onLogout, userId }) => {
  const dropdownRef = useRef(null);
  const history = useHistory();
  const [active, setActive] = useState(false);
  const onButtonClick = () => setActive(!active);
  const onLogoutClick = () => onLogout();
  const onClickProfile = () => {
    history.push({
      pathname: '/mypage',
      state: { userId}
  });
  }
  const onClickUpload = () => {
    history.push({
      pathname: '/upload',
      state: { userId}
  });
  }
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
            <button className={styles.button} onClick={onClickProfile}>프로필</button>
            <button className={styles.button}>개인정보수정</button>
            <button className={styles.button} onClick={onClickUpload}>업로드</button>
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
