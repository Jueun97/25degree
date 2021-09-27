import React from 'react';
import styles from './loading.module.css';

const Loading = ({loading}) => {
    return (
        <div className={`${styles.loadingBar} ${styles[loading]}`}></div>
    );
};

export default Loading;