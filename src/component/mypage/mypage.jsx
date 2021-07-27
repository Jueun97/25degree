import React, { useEffect, useState } from 'react';
import Posts from '../posts/posts';
import styles from './mypage.module.css';
import { useLocation } from "react-router";
import Header from '../header/header';
const Mypage = ({ filterPosts, filteredPostsOriginal ,posts, likes }) => {
    const location = useLocation();
    const [userId] = useState(location.state.userId);
    const [filteredPosts, setFilteredPosts] = useState(filteredPostsOriginal);
    const [filteredLikedPosts, setFilteredLikedPosts] = useState('');
    useEffect(() => {
        console.log("hello")
        filterPosts(userId);
    },[])
    function onClickMypost(){
        setFilteredPosts(filteredPosts);
        setFilteredLikedPosts('');
    }
    function onClickLikes(){
        let tempLikes = [...likes];
        tempLikes = tempLikes.filter(like => like.userId === userId);
        let tempPosts = [...posts];
        tempPosts = tempPosts.filter(post => tempLikes.map(like => like.postId).includes(post.postId));
        setFilteredLikedPosts(tempPosts);
    }
    return (
        <>
            <Header userId={userId}></Header>
            <section className={styles.profile}>
                <img className={styles.image}src={process.env.PUBLIC_URL + '/images/react.png'} alt="user" />
                <h1 className={styles.account}>@{userId}</h1>
            </section>
            <div className={styles.buttons}>
                <button className={styles.button} onClick={onClickMypost}>내 게시물</button>
                <button className={styles.button} onClick={onClickLikes}>좋아요</button>
            </div>
            {filteredLikedPosts && <Posts posts={filteredLikedPosts} userId={userId}></Posts>}
            {!filteredLikedPosts &&  <Posts posts={filteredPosts} userId={userId}></Posts>}

        </>
    )
           
};

export default Mypage;