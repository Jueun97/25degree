import React from 'react';
import styles from './comment.module.css';
import CommentInput from '../../molecules/comment_input/comment_input';
import CommentComment from '../../molecules/comment_comment/comment_comment';

const Comment = ({ comments, users,userId,userProfile, postId ,onWriteComment }) => {

    return (
        <div className={styles.container}>
            {userId && <CommentInput onWriteComment={onWriteComment} postId={postId} userId={userId} userProfile={userProfile} />}
            <div className={styles.commentsBox}>
                <CommentComment comments={comments} users={users} />
            </div>
        </div>
    );
};

export default Comment;