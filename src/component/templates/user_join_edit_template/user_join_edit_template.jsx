import React from 'react';
import styles from './user_join_edit_template.module.css';
import Heading1 from '../../atoms/heading1/heading1';
import JoinEditForm from '../../organisms/join_edit_form/join_edit_form';
import Button from '../../atoms/button/button';
import Loading from '../../atoms/loading/loading';
const UserJoinEditTemplate = ({user,rebundancyStatus,onSubmit,onCheckIdRedundancy,onChagneInput,loading}) => {
    return (
        <div className={styles.container}>
            <div className={`${styles.box} ${styles[loading]}`} >
                <Heading1 className="user_logo" text="25도씨" />
                <form action="" method="get" onSubmit={onSubmit}>
                    <JoinEditForm user={user} rebundancyStatus={rebundancyStatus} onCheckIdRedundancy={onCheckIdRedundancy} onChagneInput={onChagneInput} />
                    <Button className="user_join_edit_submit" text="확인" />
                </form>
            </div>
            <Loading loading={loading} />
        </div>
    );
};

export default UserJoinEditTemplate;