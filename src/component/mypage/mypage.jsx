import React, { useEffect, useState } from 'react';
import Posts from '../posts/posts';
import styles from './mypage.module.css';
import { useLocation } from "react-router";
import Header from '../header/header';
const Mypage = ({ filterPosts, filteredPostsOriginal ,posts, likes }) => {
    const location = useLocation();
    const [userId] = useState(location.state.userId);
    const [filteredPosts, setFilteredPosts] = useState(posts);
    const [filteredLikedPosts, setFilteredLikedPosts] = useState('');
    const [myPostBtn, setMyPostBtn] = useState(styles.clicked);
    const [likesBtn, setLikesBtn] = useState(styles.unClicked);
    useEffect(() => {
        setFilteredPosts(posts.filter(post=>post.userId==userId))
    },[])
    function onClickMypost() {
        let tempPosts = [...posts];
        tempPosts = tempPosts.filter(post => post.userId===userId);
        console.log(tempPosts)
        setFilteredPosts(tempPosts);
        setFilteredLikedPosts('');
        setMyPostBtn(styles.clicked);
        setLikesBtn(styles.unClicked);
    }
    function onClickLikes() {
        console.log(likes)
        let tempLikes = [...likes];
        tempLikes = tempLikes.filter(like => like.userId === userId);
        let tempPosts = [...posts];
        tempPosts = tempPosts.filter(post => tempLikes.map(like => like.postId).includes(post.postId));
        setFilteredLikedPosts(tempPosts);
        setFilteredPosts('');
        setMyPostBtn(styles.unClicked);
        setLikesBtn(styles.clicked);
    }
    return (
        <>
            <Header userId={userId}></Header>
            <section className={styles.profile}>
                <img className={styles.image}src={process.env.PUBLIC_URL + '/images/react.png'} alt="user" />
                <h1 className={styles.account}>@{userId}</h1>
            </section>
            <div className={styles.buttons}>
            <button className={`${styles.button} ${myPostBtn}`} onClick={onClickMypost}>내 게시물</button>
                <button className={`${styles.button} ${likesBtn}`} onClick={onClickLikes}>좋아요</button>
            </div>
            {filteredLikedPosts && <Posts posts={filteredLikedPosts} userId={userId}></Posts>}
            {filteredPosts &&  <Posts posts={filteredPosts} userId={userId}></Posts>}

        </>
    )
           
};

export default Mypage;