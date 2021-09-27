import React from 'react';
import styles from './label_select.module.css';
import Label from '../../atoms/label/label';
import Select from '../../atoms/select/select';
const LabelSelect = ({className,htmlFor,text,name,id,data,value}) => {
    return (
        <div className={styles[className]}>
            <Label className={className} htmlFor={htmlFor} text={text} ></Label>
            <Select  className={className} name={name} id={id} data={data} value={value}></Select>
        </div>
    );
};

export default LabelSelect;