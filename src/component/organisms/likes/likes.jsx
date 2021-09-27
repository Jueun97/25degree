import React from 'react';
import styles from './likes.module.css';
import Icon from '../../atoms/icon/icon';
import Span from '../../atoms/span/span';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'; //빈  하트
import { useEffect, useState } from 'react/cjs/react.development';

const Likes = ({ likes, user, postId, onPushLikes, onPopLikes }) => {
    const [icon, setIcon] = useState(farHeart);
    const userId = user && user.userId;

    useEffect(() => {
        likes.map(like => {
            if (like.userId === userId)
                setIcon(fasHeart);
        });

    },[likes])
    const onClickIcon = () => {
        if (userId) {
            if (icon === farHeart) {
                setIcon(fasHeart);
                onPushLikes(userId, postId);
            }
            else {
                setIcon(farHeart);
                onPopLikes(userId, postId);
            }
        } else {
            alert("좋아요를 누르시려면 로그인하셔야 합니다.");
        }


    }
    return (
        <div className={styles.container}>
            <Icon className="likes" iconName={icon} onClick={onClickIcon}></Icon>
            <Span className="likes" text={`${likes.length}명이 공감하였습니다.`} ></Span>
        </div>
    );
};

export default Likes;