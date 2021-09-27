import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import styles from './button.module.css';

const Button = ({ type, className, onClick, text }) => {
    const [classNames, setClassNames] = useState();
    useEffect(() => {
        if (className) {
            const classNames = className.split(',');
            let classNamesContainer = ``;
            classNames.forEach((className) => classNamesContainer += ` ${styles[className]}`);
            classNamesContainer += ` ${styles.button}`;

            setClassNames(classNamesContainer);
        } else {
            setClassNames(styles.button);
        }
    })
    return (
        <button type={type} className={classNames} onClick={onClick} value={text}>{text}</button>
    );
};

export default Button;