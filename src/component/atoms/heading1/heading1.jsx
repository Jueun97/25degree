import React from 'react';
import styles from './heading1.module.css';

const Heading1 = ({className,text}) => {
    return (
        <h1 className={styles[className]}>{text}</h1>
    );
};

export default Heading1;