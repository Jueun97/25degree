import React, { useRef } from 'react';
import { useHistory,useLocation} from 'react-router-dom';
import styles from './upload.module.css';

const Upload = ({uploadPost, uploadImages }) => {
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
    const image1Ref = useRef();
    const image2Ref = useRef();
    const image3Ref = useRef();
    const image4Ref = useRef();
    const image5Ref = useRef();

    const onClick = async (event) => {
        event.preventDefault();
        const message = messageRef.current.value;
        const gender = genderRef.current.value;
        const overcoat = overcoatRef.current.value;
        const top = topRef.current.value;
        const type = typeRef.current.value;
        const underwear = underwearRef.current.value;
        const suitablity = suitablityRef.current.value;
        const style = styleRef.current.value;
        const images = []
        for (let i = 0; i < 5; i++){
            var image = eval("image" + (i + 1) + "Ref.current.files[0]");
            if (image)
                images.push(image)
        }
        console.log(">>>",images,images.length,message)
        if (images.length === 0 || message === '') {
            alert("내용을 채워주세요!");
        } else {
            const imagesUrl = await uploadImages.uploadImage(images);
            const upload_data = { userId: location.state.userId, imagesUrl, message, gender, overcoat, top, type, underwear, suitablity, style }
            uploadPost(upload_data);
            history.push({ pathname: '/', state: { userId: location.state.userId } })
        }
    }
    
    return (
        <form className={styles.upload}>
            <h1 className={styles.title}>너의 날씨를 기록해</h1>
            <section>
                <div className={styles.imageBox}>
                    <h2 className={styles.subtitle}>사진업로드</h2>
                    <div className={styles.images}>
                        <input ref={image1Ref}className={styles.image} type="file" />
                        <input ref={image2Ref}className={styles.image} type="file" />
                        <input ref={image3Ref}className={styles.image} type="file" />
                        <input ref={image4Ref}className={styles.image} type="file" />
                        <input ref={image5Ref}className={styles.image} type="file" />
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
    )
};

export default Upload;