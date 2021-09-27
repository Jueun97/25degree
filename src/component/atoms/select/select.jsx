import React from 'react';
import styles from './select.module.css';

const Select = ({ className, name, id, data,value,onChange }) => {
    return (
        <select className={styles[className]} name={name} id={id} defaultValue={value} onChange={onChange}>
            {
                data.map((item,index) => {
                    return <option key={index} value={item.value}>{item.text}</option>
                })
            }
        </select>
    );
};

export default Select;