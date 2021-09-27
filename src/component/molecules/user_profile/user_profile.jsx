import React, { useEffect, useState } from 'react';
import styles from './user_profile.module.css';
import Image from '../../atoms/image/image';
import Span from '../../atoms/span/span';
const UserProfile = ({ className, src, alt, userId }) => {
    const [imageSize, setImageSize] = useState('');
    const [profileType, setProfileType] = useState('');
    useEffect(() => {
        switch (className) {
            case 'mypage':
                setImageSize('profile_image_large');
                setProfileType('vertical');
                break;
            case 'header':
                setImageSize('profile_image_medium');
                setProfileType('horizontal');
                break;;
            case 'comment':
                setImageSize('profile_image_micro');
                setProfileType('horizontal');
                break;;
                
        }
    })
    return (
        <div className={`${styles.container} ${styles[className]}`} >
            <Image className={imageSize} src={src} alt={alt}></Image>
            <Span className={profileType} text={`@${userId}`}></Span>
        </div>
    );
};

export default UserProfile;