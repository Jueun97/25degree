import React from 'react';
import styles from './buttons.module.css';
import Button from '../../atoms/button/button';
const Buttons = ({className,text1,text2,onClick1,onClick2}) => {
    return (
        <div className={`${styles.container} ${styles[className]}`}>
            <Button className={className} text={text1} onClick={onClick1}></Button>
            <Button className={className} text={text2} onClick={onClick2}></Button>
        </div>
    );
};

export default Buttons;