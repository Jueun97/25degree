import React, { useState } from 'react';
import styles from './upload_images.module.css';
import Heading2 from '../../../atoms/heading2/heading2';
import LabelInput from '../../label_input/label_input';
import Image from '../../../atoms/image/image';
import Icon from '../../../atoms/icon/icon';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const UploadImages = () => {
    const [text1, setText1] = useState(<Icon className="upload" iconName={faPlus}></Icon>);
    const [text2, setText2] = useState(<Icon className="upload" iconName={faPlus}></Icon>);
    const [text3, setText3] = useState(<Icon className="upload" iconName={faPlus}></Icon>);
    const [text4, setText4] = useState(<Icon className="upload" iconName={faPlus}></Icon>);
    const [text5, setText5] = useState(<Icon className="upload" iconName={faPlus}></Icon>);

    const onGetImage = (event) => {
        const imageId = event.target.id
        const reader = new FileReader();
        reader.onload = e => {
            switch (imageId) {
                case 'image1':
                    setText1(<Image className="upload" src={e.target.result}></Image>);
                    break;
                case 'image2':
                    setText2(<Image className="upload" src={e.target.result}></Image>);
                    break;
                case 'image3':
                    setText3(<Image className="upload" src={e.target.result}></Image>);
                    break;
                case 'image4':
                    setText4(<Image className="upload" src={e.target.result}></Image>);
                    break;
                case 'image5':
                    setText5(<Image className="upload" src={e.target.result}></Image>);
                    break;
                default:
                    new Error("잘못된 정보입니다", imageId);
                    
            };
        };
        // reader가 이미지 읽도록 하기
        reader.readAsDataURL(event.target.files[0]);

    };
    return (
        <div>
            <Heading2 text="사진업로드"></Heading2>
            <div className={styles.imageBox}>
                <LabelInput className="upload" htmlFor="image1" onChange={onGetImage} id="image1" type="file" text={text1}
                    accept="image/png, image/jpeg" />
                <LabelInput className="upload" htmlFor="image2" onChange={onGetImage} id="image2" type="file" text={text2}
                    accept="image/png, image/jpeg" />
                <LabelInput className="upload" htmlFor="image3" onChange={onGetImage} id="image3" type="file" text={text3}
                    accept="image/png, image/jpeg" />
                <LabelInput className="upload" htmlFor="image4" onChange={onGetImage} id="image4" type="file" text={text4}
                    accept="image/png, image/jpeg" />
                <LabelInput className="upload" htmlFor="image5" onChange={onGetImage} id="image5" type="file" text={text5}
                    accept="image/png, image/jpeg" />
            </div>
            
        </div>
    );
};

export default UploadImages;