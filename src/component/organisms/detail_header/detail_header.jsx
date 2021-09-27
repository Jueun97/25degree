import React from 'react';
import styles from './detail_header.module.css';
import User from '../../molecules/user_profile/user_profile';
import Menu from '../../molecules/menu/menu';
import Icon from '../../atoms/icon/icon';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const DetailHeader = ({post,postUser,userId,onClickMenu,onClickIcon,menu}) => {
    const menuTitle = ['EDIT', 'DELETE'];
    const userProfile = postUser && postUser.profile !== 'null'? postUser.profile :'./images/user.png';

    return (
        <div className={styles.container}>
            <User className="header" src={userProfile} alt={post.userId} userId={post.userId}></User>
            <Icon  className="detail" iconName={faBars} onClick={onClickIcon} />
            {menu && <Menu className="menu" menuTitle={menuTitle} onClickMenu={onClickMenu}></Menu>}
        </div>
    );
};

export default DetailHeader;