import React from 'react';
import styles from './comment.module.css';
const Comment = ({comment}) => {
    return (
        <div className={styles.comment}>
            <img className={styles.image} src={process.env.PUBLIC_URL + '/images/react.png'} alt="'" />
{/*             <span className={styles.user}>@Jueun97</span> */}
            <span className={styles.message}><b>{comment.writer}</b>{comment.description}</span>
        </div>    
    )
};

export default Comment;