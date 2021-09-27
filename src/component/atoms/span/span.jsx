import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import styles from './span.module.css';

const Span = ({ className, idName, text }) => {
    return (
        <span className={styles[className]} id={styles[idName]}>{text}</span>
    );
};

export default Span;