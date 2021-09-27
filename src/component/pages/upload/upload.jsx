import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { useEffect, useState } from 'react/cjs/react.development';
import UploadTemplate from '../../templates/upload_template/upload_template';
const Upload = ({ uploadPost,uploadImages }) => {
    const history = useHistory();
    const location = useLocation();
    const { user } = location.state ? location.state : '';
    const userId = user && user.userId;
    const [loading, setLoading] = useState('');
    useEffect(() => {
        console.log("hellooooo upload");
    });

    const onUploadPost = async (event) => {
        event.preventDefault();
        setLoading('loading');
        const image1 = event.target.elements[0].files[0];
        const image2 = event.target.elements[1].files[0];
        const image3 = event.target.elements[2].files[0];
        const image4 = event.target.elements[3].files[0];
        const image5 = event.target.elements[4].files[0];
        const message = event.target.elements[5].value;
        const overcoat = event.target.elements[6].value;
        const top  = event.target.elements[7].value;
        const type = event.target.elements[8].value;
        const suitablity = event.target.elements[9].value;
        const style = event.target.elements[10].value;
        const underwear = event.target.elements[11].value;
        const gender = 'female';
        const degree = null;
        const region = null;

        const images = [];
        if (image1) images.push(image1);
        if (image2) images.push(image2);
        if (image3) images.push(image3);
        if (image4) images.push(image4);
        if (image5) images.push(image5);

        if (images.length === 0 || message === '') {
            alert("내용을 채워주세요!");
        } else {
            const imagesUrl = await uploadImages.uploadImage(images);
            const userData = { userId, imagesUrl, message, gender, overcoat, top, type, underwear, suitablity, style, degree, region };
            uploadPost(userData);
            alert("게시물이 업로드되었습니다!");
            history.push({ pathname: '/', state: { user } })
        };

    }
    return (
        <UploadTemplate onSubmit={onUploadPost} loading={loading}/>
    );
};

export default Upload;