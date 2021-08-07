import React, { useRef, useState } from 'react';
import { useHistory,useLocation} from 'react-router-dom';
import styles from './upload.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Upload = ({ uploadPost, uploadImages, locationInfo, data }) => {
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');
    const [image4, setImage4] = useState('');
    const [image5, setImage5] = useState('');

    const [loading, setLoading] = useState('');

    const history = useHistory();
    const location = useLocation();

    const messageRef = useRef();    
    const genderRef = useRef(); 
    const overcoatRef = useRef();   
    const topRef = useRef();    
    const typeRef = useRef();   
    const underwearRef = useRef();  
    const suitablityRef = useRef(); 
    const styleRef = useRef();
    const image1FileRef = useRef();
    const image2FileRef = useRef();
    const image3FileRef = useRef();
    const image4FileRef = useRef();
    const image5FileRef = useRef();

    const onClick = async (event) => {
        setLoading(styles.loading);
        event.preventDefault();
        const description = messageRef.current.value;
        const gender = genderRef.current.value;
        const overcoat = overcoatRef.current.value;
        const top = topRef.current.value;
        const type = typeRef.current.value;
        const underwear = underwearRef.current.value;
        const suitablity = suitablityRef.current.value;
        const style = styleRef.current.value;
        const degree = data.currentTemp;
        const region = locationInfo.state? locationInfo.state : locationInfo.city;
        const images = []
        for (let i = 0; i < 5; i++) {
            let image = eval("image" + (i + 1) + "FileRef.current.files[0]");
            if (image)
                images.push(image)
        }
        if (images.length === 0 || description === '') {
            alert("내용을 채워주세요!");
        } else {
            const imagesUrl = await uploadImages.uploadImage(images);
            const upload_data = { userId: location.state.userId, imagesUrl, description, gender, overcoat, top, type, underwear, suitablity, style,degree,region}
            uploadPost(upload_data);
            setLoading(styles.loading);
            alert("게시물이 업로드되었습니다!");
            history.push({ pathname: '/', state: { userId: location.state.userId,userProfile:location.state.userProfile } })
        }
    }
    const onChangeImage = (event) => {
        const imageId = event.target.id
        const reader = new FileReader();
        reader.onload = e => {
            switch (imageId) {
                case 'image1':
                    setImage1(e.target.result);
                    break;
                case 'image2':
                    setImage2(e.target.result);
                    break;
                case 'image3':
                    setImage3(e.target.result);
                    break;
                case 'image4':
                    setImage4(e.target.result);
                    break;
                case 'image5':
                    setImage5(e.target.result);
                    break;
                default:
                new Error("잘못된 정보입니다",imageId)    ;
                    
            }
        }
        // reader가 이미지 읽도록 하기
        reader.readAsDataURL(event.target.files[0]);

    }
    
    return (
        <div className={styles.container}>
            <form className={`${styles.upload} ${loading}`}>
            <h1 className={styles.title}>너의 날씨를 기록해</h1>
            <section>
                <div className={styles.imageBox}>
                    <h2 className={styles.subtitle}>사진업로드</h2>
                    <div className={styles.images}>
                        <label htmlFor="image1" className={styles.imageLabel}>
                            {!image1 && <FontAwesomeIcon className={styles.icon} icon={faPlus}  />}
                            {image1 && <img src={image1} alt="preview" className={styles.preview} />}
                        </label>
                        <input ref={image1FileRef} id="image1" className={styles.imageFile} type="file"  accept="image/png, image/jpeg" onChange={onChangeImage}/>
                        <label htmlFor="image2" className={styles.imageLabel}>
                            {!image2 && <FontAwesomeIcon className={styles.icon} icon={faPlus}  />}
                            {image2 && <img src={image2} alt="preview" className={styles.preview} />}
                        </label>
                        <input ref={image2FileRef} id="image2" className={styles.imageFile} type="file" accept="image/png, image/jpeg"  onChange={onChangeImage}/>
                        <label htmlFor="image3" className={styles.imageLabel}>
                            {!image3 && <FontAwesomeIcon className={styles.icon} icon={faPlus}  />}
                            {image3 && <img src={image3} alt="preview" className={styles.preview} />}
                        </label>
                        <input ref={image3FileRef} id="image3" className={styles.imageFile} type="file"  accept="image/png, image/jpeg" onChange={onChangeImage}/>
                        <label htmlFor="image4" className={styles.imageLabel}>
                            {!image4 && <FontAwesomeIcon className={styles.icon} icon={faPlus}  />}
                            {image4 && <img src={image4} alt="preview" className={styles.preview} />}
                        </label>
                        <input ref={image4FileRef} id="image4" className={styles.imageFile} type="file"  accept="image/png, image/jpeg" onChange={onChangeImage}/>
                        <label htmlFor="image5" className={styles.imageLabel}>
                            {!image5 && <FontAwesomeIcon className={styles.icon} icon={faPlus}  />}
                            {image5 && <img src={image5} alt="preview" className={styles.preview} />}
                        </label>
                        <input ref={image5FileRef} id="image5" className={styles.imageFile} type="file"  accept="image/png, image/jpeg" onChange={onChangeImage}/>
                    </div>    
                </div>
                <div className={styles.messageBox}>
                    <h2 className={styles.subtitle}>내용</h2>
                    <textarea ref={messageRef}className={styles.message} name="message" ></textarea>
                </div>
                <div className={styles.categoryBox}>
                    <h2 className={styles.subtitle}>카테고리</h2>
                    <div className={styles.categories}>
                        <select ref={genderRef}className={styles.category} name="gender" id="">
                            <option>male</option>
                            <option>female</option>
                        </select>
                        <select ref={overcoatRef} className={styles.category} name="overcoat" id="">
                            <option>아우터</option>
                            <option>가디건</option>
                            <option>자켓</option>
                            <option>코트</option>
                            <option>점퍼</option>
                            <option>야상</option>
                            <option>패딩</option>
                        </select>
                        <select ref={topRef} className={styles.category} name="top" id="">
                            <option>상의</option>
                            <option>티셔츠</option>
                            <option>니트/스웨터</option>
                            <option>셔츠/남방</option>
                            <option>맨투맨</option>
                            <option>후드</option>
                            <option>블라우스</option>
                            <option>민소매/나시</option>
                        </select>
                        <select ref={typeRef} className={styles.category} name="type" id="">
                            <option>체질</option>
                            <option>더위를 많이 타요</option>
                            <option>추위를 많이 타요</option>
                        </select>
                        <select ref={underwearRef} className={styles.category} name="underwear" id="">
                            <option>이너웨어</option>
                            <option>레깅스</option>
                            <option>내복</option>
                        </select>
                        <select ref={suitablityRef} className={styles.category} name="suitablity" id="">
                            <option>적당함</option>
                            <option>좀 춥게 입은 듯..?</option>
                            <option>좀 덥게 입은 듯..?</option>
                            <option>적당하게 입었다!</option>
                        </select>
                        <select ref={styleRef} className={styles.category} name="style" id="">
                            <option>스타일</option>
                            <option>오피스룩</option>
                            <option>학생룩</option>
                            <option>캐주얼룩</option>
                            <option>데이트룩</option>
                        </select>
                    </div>    
                </div>
            </section>
                <button className={styles.button} onClick={onClick}>확인</button>
            </form>
            <div className={`${styles.loadingBar} ${loading}`}></div>
            </div>)
};

export default Upload;