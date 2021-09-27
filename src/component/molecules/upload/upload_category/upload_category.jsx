import React from 'react';
import styles from './upload_category.module.css';
import Heading2 from '../../../atoms/heading2/heading2';
import Select from '../../../atoms/select/select';
const UploadCategory = () => {
    const overcoat = [
        { value: '아우터', text: '아우터' },
        { value: '가디건', text: '가디건' },
        { value: '자켓', text: '자켓' },
        { value: '코트', text: '코트' },
        { value: '점퍼', text: '점퍼' },
        { value: '야상', text: '야상' },
        { value: '패딩', text: '패딩' }];
    const top = [
        { value: '상의', text: '상의' },
        { value: '티셔츠', text: '티셔츠' },
        { value: '니트/스웨터', text: '니트/스웨터' },
        { value: '셔츠/남방', text: '셔츠/남방' },
        { value: '맨투맨', text: '맨투맨' },
        { value: '후드', text: '후드' },
        { value: '패딩', text: '패딩' },
        { value: '민소매/나시', text: '민소매/나시' }];
    const type = [
        { value: '체질', text: '체질' },
        { value: 'hot', text: '더위를 많이 타요' },
        { value: 'cold', text: '추위를 많이 타요' }];
    const suitablity = [
        { value: '적당함', text: '적당함' },
        { value: 'hot', text: '좀 덥게 입은 듯..?' },
        { value: 'cold', text: '좀 춥게 입은 듯..?' },
        { value: 'good', text: '적당하게 입었다!' }];
    const style = [
        { value: '스타일', text: '스타일' },
        { value: '학생룩', text: '학생룩' },
        { value: '캐주얼룩', text: '캐주얼룩' },
        { value: '데이트룩', text: '데이트룩' },
        { value: '오피스룩', text: '오피스룩' }];
    const underwear = [
        { value: '이너웨어', text: '이너웨어' },
        { value: '레깅스', text: '레깅스' },
        {value: '내복',text:'내복'}
    ]
    const gender = [
        { value: 'male', text: '남자' },
        { value: 'femlae', text: '여자' }
    ]
    return (
        <div>
            <Heading2 text="카테고리"></Heading2>
            <div className={styles.selectBox}>
                <Select className="upload" name="overcoat" id="overcoat" data={overcoat}></Select>
                <Select className="upload" name="top" id="top" data={top}></Select>
                <Select className="upload" name="type" id="type" data={type}></Select>
                <Select className="upload" name="suitablity" id="suitablity" data={suitablity}></Select>
                <Select className="upload" name="style" id="style" data={style}></Select>
                <Select className="upload" name="underwear" id="underwear" data={underwear}></Select>
                <Select className="upload" name="gender" id="gender" data={gender}></Select>
            </div>
        </div>
    );
};

export default UploadCategory;