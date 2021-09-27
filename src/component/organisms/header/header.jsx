import React  from 'react';
import { useHistory } from "react-router";
import styles from './header.module.css';
import Heading2 from '../../atoms/heading2/heading2';
import Location from '../../molecules/location/location';
import Button from '../../atoms/button/button';
import Card from '../../molecules/card/card';

const Header = ({status,user,onChangeCity}) => {
    //status ==> mainpage or mypage
    //getStatus from prop
    const history = useHistory();
    const userId = user && user.userId;
    const onClickLogo = () => {
        history.push({
            pathname: "/",
            state: { user }
        });
    }
    const onClickLogin = () => {
        history.push({
            pathname: "/login",
            state: { status: 'login' }
        });
    };
    return (
        <div className={styles.container}>
            <Heading2 className="header" text="25도씨" onClick={onClickLogo}></Heading2>
            {status === 'mainpage' ? <Location className="header" onChangeCity={onChangeCity}/> : ''}
            {userId? <Card className="header" user={user} ></Card>: <Button className="header" onClick={onClickLogin} text="로그인" ></Button>}
        </div>
    );
};

export default Header;