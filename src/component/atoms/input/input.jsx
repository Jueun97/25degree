import React, { forwardRef } from 'react';
import styles from './input.module.css';

const Input = forwardRef(({ className, name,id,type, defaultValue, placeholder, accept,onChange },ref) => {
    return (
        <input ref={ref} className={styles[className]} name={name} id={id} type={type} defaultValue={defaultValue} placeholder={placeholder} accept={accept} onChange={onChange} />
    );
});

export default Input;