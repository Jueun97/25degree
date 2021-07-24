import styles from "./header.module.css";
import { useHistory, useLocation } from "react-router";
import { useEffect, useRef, useState } from "react";
import Card from "../card/card";
import city from "../../service/location.json";

const Header = ({ authService, changeCity }) => {
  const [id, setId] = useState(null);

  const history = useHistory();
  const location = useLocation();
  const selectRef = useRef();

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
  const onChange = () => {
    if (selectRef.current.value === "location") {
      changeCity("location");
    } else {
      changeCity(city.filter((item) => selectRef.current.value === item.name));
    }
  };
  return (
    <header className={styles.header}>
      <h2 className={styles.logo}>25도씨</h2>
      <div className={styles.search}>
        <select
          ref={selectRef}
          className={styles.select}
          name="choose"
          onChange={onChange}
        >
          <option value="location">지역을 선택해주세요</option>
          <option value="Seoul">서울</option>
          <option value="Gyeonggi-do">경기도</option>
          <option value="Incheon">인천</option>
          <option value="Gangwon-do">강원도</option>
          <option value="Chungcheongnam-do">충청남도</option>
          <option value="Chungcheongbuk-do">충청북도</option>
          <option value="Gyeongsangbuk-do">경상북도</option>
          <option value="Busan">부산</option>
          <option value="Jeollanam-do">전라남도</option>
          <option value="Jeollabuk-do">전라북도</option>
          <option value="Jeju-do">제주도</option>
        </select>
      </div>

      {id && <Card onLogout={onLogout} />}
      {id == null && (
        <button className={styles.loginBtn} onClick={onLogin}>
          로그인
        </button>
      )}
    </header>
  );
};

export default Header;
