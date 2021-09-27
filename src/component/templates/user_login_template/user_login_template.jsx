import React from 'react';
import styles from './user_login_template.module.css';
import Heading1 from '../../atoms/heading1/heading1';
import LoginFindForm from '../../organisms/login_find_form/login_find_form';
import Button from '../../atoms/button/button';
import Buttons from '../../molecules/buttons/buttons';
import Span from '../../atoms/span/span';
import { useHistory } from 'react-router';

const UserLoginTemplate = ({ onSubmit,googleLoginHandler,githubLoginHandler }) => {
    const history = useHistory();

    const onClickFInd = () => {
        history.push({
            pathname: "/findUser"
        });
    };
    const onClickJoin = () => {
        history.push({
            pathname: "/joinUser"
        });
    };

    return (
        <div className={styles.container}>
            <Heading1 className="user_logo" text="25도씨" />
            <form action="" method="get" className={styles.form} onSubmit={onSubmit}>
                <LoginFindForm />
                <Button className="user" text="로그인"></Button>
            </form>
            <Span className="user_login" text="or"></Span>
            <Buttons className="user_login1" text1="구글 로그인" text2="깃헙 로그인" onClick1={googleLoginHandler} onClick2={githubLoginHandler} />
            <Buttons className="user_login2" text1="아이디/비밀번호 찾기" text2="회원가입" onClick1={onClickFInd} onClick2={onClickJoin}/>
        </div>
    );
};

export default UserLoginTemplate;