import React from 'react';
import styles from './icon.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({className,iconName, onClick}) => {
    return (
        <div className={styles.container}>
            <FontAwesomeIcon className={styles[className]} icon={iconName} onClick={onClick} />
        </div>
    );
};

export default Icon;