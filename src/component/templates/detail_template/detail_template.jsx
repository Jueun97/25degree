import React, { useRef } from 'react';
import styles from './detail_template.module.css';
import Image from '../../atoms/image/image';
import DetailHeader from '../../organisms/detail_header/detail_header';
import Message from '../../organisms/message/message';
import Likes from '../../organisms/likes/likes';
import Comment from '../../organisms/comment/comment';
import { useState } from 'react/cjs/react.development';

const DetailTemplate = ({ post, comments, likes, users, user,postId,postUser, category,onEditPost,onDeletePost,onWriteComment,onPushLikes,onPopLikes }) => {
    const images = post.images;
    const [menu, setMenu] = useState(false);
    const [editStatus, setEditStatus] = useState(false);
    const messageRef = useRef();
    const userId = user && user.userId;
    const userProfile = user && user.profile ? user.profile : './images/react.png';

    const onClickIcon = () => {
        if (menu)
            setMenu(false);
        else
            setMenu(true);
    }
    const onClickMenu = (event) => {
        const menu = event.target.value;
        if (postUser.userId === userId) {
            switch (menu) {
                case 'EDIT':
                    setEditStatus(true);
                    setMenu(false);
                    break;
                    ;
                case 'DELETE':
                    alert("게시물을 삭제하시겠습니까?");
                    onDeletePost(post.postId, post.userId);
                    break;
                default:
                    new Error("잘못된 메뉴입니다.");
            }
        } else {
            alert("작성자만 게시물을 수정하거나 삭제할 수 있습니다.");
            setMenu(false);
        }
    }
    const onClickEdit = () => {
        const editedMessage = messageRef.current.value;
        onEditPost(post.postId, post.userId, editedMessage);
        setEditStatus(false);
    }
    return (
        <div className={styles.container}>
            <div className={styles.imageBox}>
                {images && images.map((image, index) => <Image key={index} className="detail" src={image} alt="post" />)}
            </div>
            <div className={styles.content}>
                <DetailHeader post={post} postUser={postUser} onEditPost={onEditPost} onDeletePost={onDeletePost} onClickMenu={onClickMenu} onClickIcon={onClickIcon} menu={menu} />
                <Message ref={messageRef} editStatus={editStatus} message={post.description} category={category} onClickEdit={onClickEdit} />
                <Likes likes={likes} user={user} postId={postId} onPushLikes={onPushLikes} onPopLikes={onPopLikes} />
                <div className={styles.comment}>
                    <Comment comments={comments} users={users} userId={userId} userProfile={userProfile} postId={postId} onWriteComment={onWriteComment} />
                </div>
            </div>
        </div>
    );
};

export default DetailTemplate;