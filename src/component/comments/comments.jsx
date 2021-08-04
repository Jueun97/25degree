import React,{useEffect, useRef, useState} from 'react';
import styles from './comments.module.css';
import Comment from '../comment/comment';
const Comments = ({filteredComments,uploadComment,postId,userId,user }) => {
    const commentRef = useRef();
    const [userProfile, setUserProfile] = useState(null)
    useEffect(() => {
        user.map(u => {
            if (u.userId === userId) {
                setUserProfile(u.profile);
                return
            }
        })
    })
    const onClick = () => {
        const comment = commentRef.current.value;
        commentRef.current.value = '';
        const upload_data = { postId:postId, description:comment, writer: userId };
        uploadComment(upload_data);
    }
    return (
        <section className={styles.container}>
            {/* 로그인 한 사용자 이미지 삽입 */}
                {userId &&  <div className={styles.reply}><img className={styles.image} src={userProfile?userProfile:'./images/user.png'} alt="'" />
            <input ref={commentRef} className={styles.input} type="text" />
            <input className={styles.button} type="submit" value="확인" onClick={onClick}></input>
            </div>}
            <div className={styles.comment}>
            {/* 코멘트 작성자 이미지 삽입 */}
                {filteredComments.map((comment, index) => {
                    const filteredUser = user.filter(u => u.userId === comment.writer)
                    const userProfile = filteredUser[0] ? filteredUser[0].profile : null
                    return <Comment key={index} comment={comment} userProfile={userProfile}></Comment>
                })
                }
        </div>  
        </section>
        
    )
};

export default Comments;