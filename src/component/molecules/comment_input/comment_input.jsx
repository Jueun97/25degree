import React from 'react';
import styles from './comment_input.module.css';
import Image from '../../atoms/image/image';
import InputButton from '../input_button/input_button';
const CommentInput = ({onWriteComment,postId,userId,userProfile}) => {
    return (
        <div className={styles.container}>
            <Image className="profile_image_small" src={userProfile} alt={userId}/>
            <InputButton className="comment" text="확인" onWriteComment={onWriteComment}postId={postId} userId={userId}/>
        </div>
    );
};

export default CommentInput;