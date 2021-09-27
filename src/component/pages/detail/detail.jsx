import React, { useState,useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import styles from './detail.module.css';
import DetailTemplate from '../../templates/detail_template/detail_template';

const Detail = ({ getData, posts, likes, users, onPopLikes, onPushLikes, deletePost }) => {
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    const history = useHistory();
    const location = useLocation();
    const { user } = location.state ? location.state : '';
    const postId = location.state ? location.state.postId : '';

    const filteredComments = post && comments.filter(comment => comment.postId === post.postId);
    const filteredUser = users.filter(user => {
        if (user)
            return user.userId === posts.filter(post => post.postId === postId)[0].userId;
    })[0];
    const filteredUsers = filteredComments && users.filter(user => filteredComments.map(comment => comment.writer).includes(user.userId));
    const filteredLikes = post && likes.filter(like => like.postId === post.postId);
    const category = post && {
        gender: post.gender,
        overcoate: post.overcoat,
        top: post.top,
        underwear: post.underwear,
        suitablity: post.suitablity,
        style: post.style,
        type: post.type,
        degree: post.degree,
        region: post.region
    };

    useEffect(() => {
        const filteredPost = posts.filter(post => post.postId === postId);
        setPost(filteredPost[0]);

        getData.getComment().then((data) => {
            setComments(data);
        });
    }, [posts]);

    const onEditPost = (postId, userId, editedMessage) => {
        alert("수정이 완료되었습니다.");
        const tempPost = { ...post };
        tempPost.description = editedMessage;
        setPost(tempPost);
        getData.updatePost({ postId, editedMessage, userId });
    };
    const onDeletePost = (postId, userId) => {
        history.push({
            pathname: '/',
            state: { user }
        });
        deletePost(postId, userId);
      
    };
    const onWriteComment = (postId, comment, userId) => {
        const commentData = { postId: postId, description: comment, writer: userId };
        getData.uploadComment(commentData);
        getData.getComment().then((data) => {
            setComments(data);
        });
    };
    
    return (
        <div className={styles.container}>
            {post && <DetailTemplate post={post} users={filteredUsers} user={user} postId={postId} postUser={filteredUser}  comments={filteredComments} likes={filteredLikes} category={category} onEditPost={onEditPost} onDeletePost={onDeletePost} onWriteComment={onWriteComment} onPushLikes={onPushLikes} onPopLikes={onPopLikes} /> }
        </div>
    );
};

export default Detail;