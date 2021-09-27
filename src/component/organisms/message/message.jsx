import React, { forwardRef } from 'react';
import styles from './message.module.css';
import Span from '../../atoms/span/span';
import Button from '../../atoms/button/button';
const Message = forwardRef(({ editStatus, message, category, onClickEdit},ref) => {

    return (
        <div className={editStatus?`${styles.container} ${styles.editContainer}` : styles.container }>
            {editStatus &&
                <>
                <textarea ref={ref} className={styles.textareaBox} defaultValue={message}/>
                <Button className="editMessage"text="수정" onClick={onClickEdit} />
                </>}
            {!editStatus &&
                (
                <>
                    <p className={styles.messageBox}>{message}</p>
                    <div className={styles.categoryBox}>
                        {Object.keys(category).map((key,index)=><Span key={index} text={`#${category[key]}`}></Span>)}
                    </div>
                </>)}
         
        </div>
    );
});

export default Message;