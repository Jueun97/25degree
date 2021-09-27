import React, { useState, useEffect,useRef } from 'react';
import styles from './login_find_form.module.css';
import LabelInput from '../../molecules/label_input/label_input';

const LoginFindForm = ({ status}) => {
    const [id1,setId1] = useState('id');
    const [id2,setId2] = useState('password');
    const [text1,setText1] = useState('아이디');
    const [text2,setText2] = useState('비밀번호');
    const [placeholder1,setPlaceholder1] = useState('아이디를 입력하세요');
    const [placeholder2, setPlaceholder2] = useState('비밀번호를 입력하세요');

    useEffect(() => {
        if (status === 'find') {
            setId1('name');
            setId2('email');
            setText1('이름');
            setText2('이메일');
            setPlaceholder1('이름을 입력하세요.');
            setPlaceholder2('이메일을 입력하세요');

        }
    })

    return (
        <div className={styles.container} >
            <LabelInput className="user_login_find" htmlFor={id1} text={text1} id={id1} type="text" placeholder={placeholder1} ></LabelInput>
            <LabelInput className="user_login_find" htmlFor={id2} text={text2} id={id2} type="password" placeholder={placeholder2}></LabelInput>
        </div>
    );
};

export default LoginFindForm;