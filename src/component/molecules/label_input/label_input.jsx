import React from 'react';
import styles from './label_input.module.css';
import Label from '../../atoms/label/label';
import Input from '../../atoms/input/input';

const LabelInput = ({ className, htmlFor, text, onClick, id, type, defaultValue, placeholder, accept,onChange}) => {
 
    return (
        <div className={styles[className]}>
            <Label className={className} htmlFor={htmlFor} text={text} onClick={onClick}></Label>
            <Input className={className} name={id} id={id} type={type} defaultValue={defaultValue} placeholder={placeholder} accept={accept} onChange={onChange}></Input>
        </div>
    );
};

export default LabelInput;