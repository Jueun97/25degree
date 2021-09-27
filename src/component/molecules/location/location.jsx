import React from 'react';
import Select from '../../atoms/select/select';
const Location = ({className,onChangeCity}) => {
    const location = [
        { value: 'locaiton', text:'지역을 선택해주세요.' },
        { value: 'Seoul', text:'서울.' },
        { value: 'Gyeonggi-do', text:'경기도' },
        { value: 'Incheon', text:'인천' },
        { value: 'Gangwon-do', text:'강원도' },
        { value: 'Chungcheongnam-do', text:'충청남도' },
        { value: 'Chungcheongbuk-do', text:'충청북도' },
         { value: 'Gyeongsangbuk-do', text:'경상북도' },
        { value: 'Busan', text:'부산' },
        { value: 'Jeollanam-do', text:'전라남도' },
        { value: 'Jeollabuk-do', text:'전라북도' },
        { value: 'Jeju-do', text:'제주도' },
    ]
    return (
        <Select className={className} name="location" id="location" data={location} onChange={onChangeCity}></Select>
    );
};

export default Location;