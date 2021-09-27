import React from 'react';
import styles from './label.module.css';
const Label = ({className,htmlFor,text,onClick}) => {
    return (
        <label className={styles[className]} htmlFor={htmlFor} onClick={onClick}>{text}</label>
    );
};

export default Label;