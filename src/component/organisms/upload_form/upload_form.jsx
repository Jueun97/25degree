import React from 'react';
import UploadImages from '../../molecules/upload/upload_images/upload_images';
import UploadMessage from '../../molecules/upload/upload_message/upload_message';
import UploadCategory from '../../molecules/upload/upload_category/upload_category';
const UploadForm = () => {
    return (
        <div >
            <UploadImages></UploadImages>
            <UploadMessage></UploadMessage>
            <UploadCategory></UploadCategory>
        </div>
    );
};

export default UploadForm;