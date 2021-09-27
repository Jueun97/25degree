import React from 'react';
import styles from './comment_comment.module.css';
import UserProfile from '../user_profile/user_profile';
import Span from '../../atoms/span/span';
const CommentComment = ({ comments, users }) => {
    return (
        <>
            {comments.map((comment, index) => {
                let userProfile = users.filter(user => user.userId === comment.writer);
                userProfile = userProfile[0] && userProfile[0].profile!=="null" ? userProfile[0].profile : "./images/user.png";
                return (<div key={index} className={styles.container}> <UserProfile className="comment" src={userProfile} alt={comment.writer} userId={comment.writer}></UserProfile>
                    <Span className="comment" text={comment.description}></Span> </div>);
            })}
        </>

    );
};

export default CommentComment;