import React, { useEffect, useState } from 'react';
import Posts from '../posts/posts';
import styles from './mypage.module.css';
const Mypage = ({ posts, likes }) => {
    const [filteredPosts, setFilteredPosts] = useState(posts);
    const [filteredLikedPosts, setFilteredLikedPosts] = useState('');
    useEffect(() => {
        setFilteredPosts(posts);
    },[posts])
    function onClickMypost(){
        setFilteredPosts(posts);
        setFilteredLikedPosts('');
    }
    function onClickLikes(){
        let tempLikes = [...likes];
        tempLikes = tempLikes.filter(like => like.userId === 'zxnm1234');
        let tempPosts = [...posts];
        tempPosts = tempPosts.filter(post => tempLikes.map(like => like.postId).includes(post.postId));
        setFilteredLikedPosts(tempPosts);
    }
    return (
        <>
            <header className={styles.header}>header</header>
            <section className={styles.profile}>
                <img className={styles.image}src={process.env.PUBLIC_URL + '/images/react.png'} alt="user" />
                <h1 className={styles.account}>@jueun97</h1>
            </section>
            <div className={styles.buttons}>
                <button className={styles.button} onClick={onClickMypost}>내 게시물</button>
                <button className={styles.button} onClick={onClickLikes}>좋아요</button>
            </div>
            {filteredLikedPosts && <Posts posts={filteredLikedPosts}></Posts>}
            {!filteredLikedPosts &&  <Posts posts={filteredPosts}></Posts>}

        </>
    )
           
};

export default Mypage;