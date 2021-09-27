import React, { useState } from 'react';
import styles from './user.module.css';
import { useHistory, useLocation } from "react-router";
import UserFindTemplate from '../../templates/user_find_template/user_find_template';
import UserJoinEditTemplate from '../../templates/user_join_edit_template/user_join_edit_template';
import UserLoginTemplate from '../../templates/user_login_template/user_login_template';

const User = ({ authService, userHandler,uploadImages,users,status }) => {
    const history = useHistory();
    const location = useLocation();
    const { user } = location.state ? location.state : '';
    const [rebundancyStatus, setRebundancyStatus] = useState(status === "edit" ? true : false);
    const [loading, setLoading] = useState('');

    const loginHandler = (event) => {
        event.preventDefault();
        const id = event.target.elements[0].value;
        const password = event.target.elements[1].value;
        onCheckUsers(id, password);
    };
    const googleLoginHandler = async () => {
        let user = {}
        await authService //
            .login('Google')
            .then((data) => {
                user = {
                    userId: data.user.uid.substring(0, 15),
                    name: data.user.bc.displayName,
                    password: data.user.uid.substring(0, 15),
                    email: data.user.bc.email,
                };
                userHandler(user);
            });
        alert("로그인에 성공하였습니다!");
        history.push({
            pathname: "/",
            state: {
                user
            }
        });
    };

    const githubLoginHandler = async () => {
        let user = {}
        await authService //
            .login('Github')
            .then((data) => {
                user = {
                    userId: data.user.uid.substring(0, 15),
                    name: data.additionalUserInfo.username,
                    password: data.user.uid.substring(0, 15),
                    email: data.user.email
                };
                userHandler(user);
            });
        alert("로그인에 성공하였습니다!");
        history.push({
            pathname: "/",
            state: {
                user
            }
        });
    };

    const onCheckUsers = (id, password) => {
        let check = false;
        
        for (let i = 0; i < users.length; i++){
            if (users[i].userId === id && users[i].password === password) {
                check = true;
                alert("로그인에 성공하였습니다!");
                history.push({
                    pathname: "/",
                    state: {
                        user:users[i]
                    }
                });
                break;
            }
        };

        !check && alert("잘못된 정보입니다.");
    };

    const joinEditHandler = async (event) => {
        event.preventDefault();
        setLoading('loading');
        const id = event.target.elements[0].value;
        const name = event.target.elements[2].value;
        const password = event.target.elements[3].value;
        const email = event.target.elements[4].value;
        const gender = event.target.elements[5].value;
        const profile = event.target.elements[6].files[0];

        if (rebundancyStatus || id === user.userId) {
            const profileConatiner = [];
            profileConatiner.push(profile && profile);
            const profileUrl = profileConatiner[0] && await uploadImages.uploadImage(profileConatiner);
            let newUser = {};
            if (status === 'join') {
                newUser = {
                    userId: id,
                    name: name,
                    gender: gender,
                    password: password,
                    email: email,
                    profile: profileUrl ? profileUrl : null
                };
                userHandler(newUser);

                alert("회원가입이 완료되었습니다.");
                
            } else {
                newUser = {
                    userId: id,
                    name: name,
                    gender: gender,
                    password: password,
                    email: email,
                    profile: profileUrl ? profileUrl : user.profile
                };
                userHandler({
                    defaultUserId: user.userId,
                    userId: id,
                    name: name,
                    gender: gender,
                    password: password,
                    email: email,
                    profile: profileUrl ? profileUrl : user.profile
                });
                alert("회원정보가 수정되었습니다!");
            }
            
            history.push({
                pathname: "/",
                state: {
                    user:newUser
                }
            });

        }else {
            alert("아이디 중복확인 해주세요.");
        }
    }

    const onCheckIdRedundancy = (event) => {
        const id = event.target.previousSibling.children[1].value;
        let rebundancy = false;

        for (let i = 0; i < users.length; i++)
            if (users[i].userId === id) {
                rebundancy = true;
                break;
            };
            
        if (rebundancy)
            alert(id + "는(은) 이미 사용중인 아이디 입니다.");
        else {
            alert(id + "는(은) 사용 가능한 아이디 입니다.");
            setRebundancyStatus(true);
        };
    };

    const onChagneInput = () => {
        setRebundancyStatus(false);
    }
    return (
        <div className={styles.container}>
            {status === "login" && <UserLoginTemplate onSubmit={loginHandler} googleLoginHandler={googleLoginHandler} githubLoginHandler={githubLoginHandler}/>}
            {status === "find" && <UserFindTemplate />}
            {(status === "join" || status === "edit") && <UserJoinEditTemplate user={user} rebundancyStatus={rebundancyStatus} onSubmit={joinEditHandler} onCheckIdRedundancy={onCheckIdRedundancy} onChagneInput={onChagneInput} loading={loading} />}
        </div>
    );
};

export default User;