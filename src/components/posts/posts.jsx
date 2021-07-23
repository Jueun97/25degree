import React from 'react';
import styles from './posts.module.css';
import Post from '../post/post';

const Posts = ({posts}) => {
    return (
        <section className={styles.posts}>
            {Object.keys(posts).map(key=><Post key={key} post={posts[key]}></Post>)}
        </section>
    );
};

export default Posts;