import React, { useState } from 'react';
import styles from './category.module.css';
const Category = ({ onClickCategory }) => {
    const [all, setAll] = useState(styles.clicked);
    const [office, setOffice] = useState(styles.unClicked);
    const [student, setStudent] = useState(styles.unClicked);
    const [casual, setCasual] = useState(styles.unClicked);
    const [dating, setDating] = useState(styles.unClicked);
    const [degree, setDegree] = useState(styles.unClicked);
    const [gender, setGender] = useState(styles.unClicked);
    const onClick = (event) => {
        const category = event.target.value;
        if (category === '성별') {
            const gender = event.target.innerText;
            onClickCategory(category,gender);
        } else
            onClickCategory(category);
        
        setAll(styles.unClicked);
        setOffice(styles.unClicked);
        setCasual(styles.unClicked);
        setStudent(styles.unClicked);
        setDating(styles.unClicked);
        setDegree(styles.unClicked);
        setGender(styles.unClicked);
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
            case '온도':
                setDegree(styles.clicked);
                break;
            case '성별':
                setGender(styles.clicked);
                if (event.target.innerText === 'female')
                    event.target.innerText = 'male'
                else
                    event.target.innerText = 'female'
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
            <button className={`${styles.category} ${degree}`} onClick={onClick} value='온도'>현재 온도</button>
            <button className={`${styles.category} ${gender}`} onClick={onClick} value='성별'>female</button>
        </div>
    );
};

export default Category;