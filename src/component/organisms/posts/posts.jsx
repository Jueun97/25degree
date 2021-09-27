import React from 'react';
import styles from './posts.module.css';
import Post from '../../molecules/post/post';
const Posts = ({posts,user}) => {
    return (
        <div className={styles.container}>
            {posts.map((post, index) => (<Post key={index} postId={post.postId} user={user} src={post.images[0]} alt={post.userId}></Post>))};
        </div>
    );
};

export default Posts;