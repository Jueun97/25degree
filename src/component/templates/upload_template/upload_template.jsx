import React from 'react';
import styles from './upload_template.module.css';
import Heading1 from '../../atoms/heading1/heading1';
import UploadForm from '../../organisms/upload_form/upload_form';
import Button from '../../atoms/button/button';
import Loading from '../../atoms/loading/loading';
const UploadTemplate = ({onSubmit,loading}) => {
    return (
        <div className={styles.container}>
            <div className={`${styles.box} ${styles[loading]}`} >
                <Heading1 className="upload" text="너의 날씨를 기록해!"/>
                <form action="" method="get" onSubmit={onSubmit}>
                    <UploadForm></UploadForm>
                    <Button className="upload" text="업로드"/>
                </form>
            </div>
            <Loading loading={loading}></Loading>
        </div>
    );
};

export default UploadTemplate;