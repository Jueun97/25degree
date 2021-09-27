import React, { useRef } from 'react';
import styles from './input_button.module.css';
import Button from '../../atoms/button/button';
import Input from '../../atoms/input/input';

const InputButton = ({ className,onWriteComment,postId,userId }) => {
    const commentRef = useRef();

    const onClickCommentButton = () => {
        const comment = commentRef.current.value;
        commentRef.current.value = '';
        onWriteComment(postId,comment,userId);
    }
    return (
        <div className={`${styles.container} ${styles[className]}`}>
            <Input ref={commentRef} className={className} type="text" defaultValue={""} placeholder="댓글달기"></Input>
            <Button className={className} text={"확인"} onClick={onClickCommentButton}></Button>
        </div>
    );
};

export default InputButton;