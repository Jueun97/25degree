import React from 'react';
import styles from './upload_message.module.css';
import Heading2 from '../../atoms/heading2/heading2';
const UploadMessage = () => {
    return (
        <div>
            <Heading2 text="내용"></Heading2>
            <div className={styles.textBox}>
            <textarea className={styles.textarea} name="message" id="message" ></textarea>   
            </div>
        </div>
    );
};

export default UploadMessage;