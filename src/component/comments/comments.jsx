import React,{useRef} from 'react';
import styles from './comments.module.css';
import Comment from '../comment/comment';
const Comments = ({filteredComments,uploadComment,postId,userId }) => {
    const commentRef = useRef();
    const onClick = () => {
        const comment = commentRef.current.value;
        commentRef.current.value = '';
        const upload_data = { postId:postId, description:comment, writer: userId };
        uploadComment(upload_data);
    }
    return (
        <section className={styles.container}>
        <div className={styles.reply}>
            <img className={styles.image} src={process.env.PUBLIC_URL + '/images/react.png'} alt="'" />
            <input ref={commentRef} className={styles.input} type="text" />
            <input className={styles.button} type="submit" value="확인" onClick={onClick}></input>
        </div>
        <div className={styles.comment}> 
            {filteredComments.map((comment,index) => ( <Comment key={index} comment={comment}></Comment>))
                }
        </div>  
        </section>
        
    )
};

export default Comments;