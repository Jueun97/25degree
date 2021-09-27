import React from 'react';
import styles from './heading2.module.css';

const Heading2 = ({className,text,onClick}) => {
    return (
        <h2 className={styles[className]} onClick={onClick}>{text}</h2>
    );
};

export default Heading2;