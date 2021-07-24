import React from 'react';
import styles from './image.module.css';
const Image = ({ image }) => {
    return (
        <div className={styles.image}>
            <img className={styles.detailsImage} src={image} alt="'" />
        </div>
    );
};

export default Image;