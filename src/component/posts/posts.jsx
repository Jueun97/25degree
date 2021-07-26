import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import styles from './posts.module.css';
import Post from '../post/post';

const Posts = ({ posts, userId }) => {
    const location = useLocation();
    console.log("posts",location.state.id,userId)
    return (
        <section className={styles.posts}>
            {Object.keys(posts).map(key => <Post key={key} post={posts[key]} userId={userId = userId ? userId : location.state.id}></Post>)}
        </section>
    );
};

export default Posts;