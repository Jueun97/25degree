import React from 'react';
import styles from './image.module.css';

const Image = ({ className,src, alt, onClick }) => {
    return (
        <div className={styles[className+"Container"]}>
            <img className={styles[className]} src={src} alt={alt} onClick={onClick} />
        </div>
    );
};

export default Image;