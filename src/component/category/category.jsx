import React, { useState } from 'react';
import styles from './category.module.css';
const Category = ({ onClickCategory }) => {
    const [all, setAll] = useState(styles.clicked);
    const [office, setOffice] = useState(styles.unClicked);
    const [student, setStudent] = useState(styles.unClicked);
    const [casual, setCasual] = useState(styles.unClicked);
    const [dating, setDating] = useState(styles.unClicked);

    const onClick = (event) => {
        const category = event.target.value;
        onClickCategory(category);
        setAll(styles.unClicked);
        setOffice(styles.unClicked);
        setCasual(styles.unClicked);
        setStudent(styles.unClicked);
        setDating(styles.unClicked);
        switch (category) {
            case '':
                setAll(styles.clicked);
                break;
            case '오피스룩':
                setOffice(styles.clicked);
                break;
            case '학생룩':
                setStudent(styles.clicked);
                break;
            case '캐주얼룩':
                setCasual(styles.clicked);
                break;
            case '데이트룩':
                setDating(styles.clicked);
                break;
            default:
                new Error("잘못된 카테고리입니다.");
        }
    }
    return (
        <div className={styles.container}>
            <button className={`${styles.category} ${all}` } onClick={onClick} value=''>전체</button>
            <button className={`${styles.category} ${office}`} onClick={onClick} value='오피스룩'>오피스룩</button>
            <button className={`${styles.category} ${student}`} onClick={onClick} value='학생룩'>학생룩</button>
            <button className={`${styles.category} ${casual}`} onClick={onClick} value='캐주얼룩'>캐주얼룩</button>
            <button className={`${styles.category} ${dating}`} onClick={onClick} value='데이트룩'>데이트룩</button>
        </div>
    );
};

export default Category;