import React from 'react';
import Button from '../../atoms/button/button';
import styles from './category.module.css';

const Category = ({className,onClickCategory}) => {
    return (
        <div className={styles[className]}>
            <Button className={className} onClick={onClickCategory} text="전체"></Button>
            <Button className={className} onClick={onClickCategory} text="오피스룩"></Button>
            <Button className={className} onClick={onClickCategory} text="학생룩"></Button>
            <Button className={className} onClick={onClickCategory} text="캐주얼룩"></Button>
            <Button className={className} onClick={onClickCategory} text="데이트룩"></Button>
            <Button className={className} onClick={onClickCategory} text="현재온도"></Button>
            <Button className={className} onClick={onClickCategory} text="female"></Button>
        </div>
    );
};

export default Category;