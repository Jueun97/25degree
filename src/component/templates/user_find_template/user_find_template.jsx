import React from 'react';
import styles from './user_find_template.module.css';
import Heading1 from '../../atoms/heading1/heading1';
import LoginFindForm from '../../organisms/login_find_form/login_find_form';
import Button from '../../atoms/button/button';
import Buttons from '../../molecules/buttons/buttons';

const UserFindTemplate = ({findHandler,onClickFindAction, findAction}) => {
    return (
        <div className={styles.container}>
            <Heading1 className="user_logo" text="25도씨"/>
            <Buttons className="user_find" text1="아이디 찾기" text2="비밀번호 찾기" onClick1={onClickFindAction} onClick2={onClickFindAction} findAction={findAction}/>
            <form className={styles.box} action="post" onSubmit={findHandler} >
                <LoginFindForm status="find" />
                <Button className="user" text="확인"/>
            </form>
        </div>
    );
};

export default UserFindTemplate;