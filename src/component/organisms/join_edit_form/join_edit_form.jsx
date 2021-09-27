import React from 'react';
import styles from './join_edit_form.module.css';
import LabelInput from '../../molecules/label_input/label_input';
import LabelSelect from '../../molecules/label_select/label_select';
import Button from '../../atoms/button/button';
const JoinEditForm = ({user,rebundancyStatus,onCheckIdRedundancy,onChagneInput}) => {
    const genderData = [
        { value: 'female', text: 'female' },
        {value:'male',text:'male'}
    ]
    const { userId, name, password, email, gender } = user ? user : '';
    const buttonClassName = rebundancyStatus ? 'user_join_edit,rebundancyChecked' : 'user_join_edit' ;
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <LabelInput className="user_join_edit" htmlFor="id" text="아이디" id="id" type="text" defaultValue={userId} placeholder="아이디를 입력하세요." onChange={onChagneInput} ></LabelInput>
                {rebundancyStatus && <Button type="button" className={buttonClassName} text="확인완료" onClick={onCheckIdRedundancy}></Button>}
                {!rebundancyStatus && <Button type="button" className={buttonClassName} text="중복확인" onClick={onCheckIdRedundancy}></Button>}
            </div>
            <LabelInput className="user_join_edit" htmlFor="name" text="이름" id="name" type="text" defaultValue={name} placeholder="이름을 입력하세요." />
            <LabelInput className="user_join_edit" htmlFor="password" text="비밀번호" id="password" type="password" defaultValue={password} placeholder="비밀번호를 입력하세요."/>
            <LabelInput className="user_join_edit" htmlFor="email" text="이메일" id="email" type="text" defaultValue={email} placeholder="이메일을 입력하세요." />
            <LabelSelect className="user_join_edit" htmlFor="gender" text="성별" name="gender" id="gender" value={gender} data={genderData}/>
            <LabelInput className="user_join_edit" htmlFor="profile" text="프로필" id="profile" type="file" accept="image/png, image/jpeg"/>
        </div>
    );
};

export default JoinEditForm;