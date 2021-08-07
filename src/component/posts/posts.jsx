import React from 'react';
import styles from './posts.module.css';
import Post from '../post/post';

const Posts = ({ posts, userId, user }) => {
    return (
        <section className={styles.posts}>
            {posts.map((post) => {
                const filteredUser = user.filter(u => u.userId === post.userId);
                const userProfile = filteredUser[0]?filteredUser[0].profile:null
                if (post.userId === user.userId) {
                    userProfile = user.proifle;
                }
               return <Post key={post.postId} post={post} userId={userId} userProfile={userProfile} user={user} ></Post>
            })}
        </section>
    );
};

export default Posts;