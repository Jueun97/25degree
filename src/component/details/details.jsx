import React from 'react';
import styles from './details.module.css';
import Info from '../info/info';
import Images from '../images/images';
import {useLocation} from "react-router"
const Details = ({data,updatePost,comments,deletePost,uploadComment,likes,popLikes,pushLikes}) => {
    const location = useLocation();
    const post = location.state.post;
    const userId = location.state.userId;
    const filteredComments = comments.filter(comment => comment.postId === post.postId);
    const filteredLikes = likes.filter(like => like.postId === post.postId);

    return (
        <div className={styles.container}>
            <div className={styles.details}>
                <Images images={post.images}></Images>
                <Info data={data}post={post} updatePost={updatePost} deletePost={deletePost} filteredComments={filteredComments} uploadComment={uploadComment} filteredLikes={filteredLikes} popLikes={popLikes} pushLikes={pushLikes} userId={userId}></Info>
            </div>
        </div>
    );
};

export default Details;