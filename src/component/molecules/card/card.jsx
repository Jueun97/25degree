import React from 'react';
import { useHistory, useLocation } from "react-router";
import styles from './card.module.css';
import Image from '../../atoms/image/image';
import Menu from '../menu/menu';
import { useState } from 'react/cjs/react.development';
const Card = ({user }) => {
    const history = useHistory();
    const location = useLocation();
    const [menu, setMenu] = useState(false);
    const userProfile = user && user.profile;
    const menuTitle = [
        '마이페이지',
        '개인정보수정',
        '업로드',
        '로그아웃'
    ]
    const onClickProfile = () => {
        if (menu)
            setMenu(false);
        else
            setMenu(true);
    }

    const onClickMenu = (event) => {
        const menu = event.target.value;
        let path = '/';
        
        switch (menu) {
            case '마이페이지':
                path = `/mypage/${user.userId}`;
                break;
            case '개인정보수정':
                path = `/settings/${user.userId}`;
                break;
            case '업로드':
                path = '/upload';
                break;
            case '로그아웃':
                path = '/';
                history.replace(location.state.user, null);
                alert("로그아웃 되었습니다.");
                //authService.logout();
            default:
                new Error("잘못된 메뉴입니다.");
        }
        if (menu === '로그아웃') {
            history.push('/');
        } else {
            history.push({
                pathname: path,
                state: {
                    user
                }
            });
        }
    }
    return (
        <div className={styles.card}>
            <Image className="profile_image_medium" src={userProfile ? userProfile : './images/user.png'} alt="example" onClick={onClickProfile}></Image>
            {menu &&  <Menu className="menu" menuTitle={menuTitle} onClickMenu={onClickMenu}></Menu> }
        </div>
    );
};

export default Card;