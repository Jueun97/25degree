import React from 'react';
import Image from '../image/image';
import styles from './images.module.css';
const Images = ({images}) => {
    return (
        <div className={styles.image}>
            {
                images.map((image,index) =><Image key={index} image={image}></Image>)
            }
        </div>
    );
};

export default Images;