import React from 'react';
import styles from './comment.module.css';
const Comment = ({comment,userProfile}) => {
    return (
        <div className={styles.comment}>
            <img className={styles.image} src={userProfile === 'null' ?'./images/user.png':userProfile} alt="'" />
{/*             <span className={styles.user}>@Jueun97</span> */}
            <span className={styles.message}><b>{comment.writer}</b>&nbsp;{comment.description}</span>
        </div>    
    )
};

export default Comment;