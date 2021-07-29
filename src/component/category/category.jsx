import React from 'react';
import styles from './category.module.css';
const Category = ({onClickCategory}) => {
    const onClick = (event) => {
        const category = event.target.value;
        onClickCategory(category);
    }
    return (
        <div className={styles.container}>
                        <button className={styles.category} onClick={onClick} value=''>전체</button>
            <button className={styles.category} onClick={onClick} value='오피스룩'>오피스룩</button>
            <button className={styles.category} onClick={onClick} value='학생룩'>학생룩</button>
            <button className={styles.category} onClick={onClick} value='캐주얼룩'>캐주얼룩</button>
            <button className={styles.category} onClick={onClick} value='데이트룩'>데이트룩</button>
        </div>
    );
};

export default Category;