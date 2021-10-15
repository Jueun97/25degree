import React,{useEffect,useState} from 'react';
import styles from './buttons.module.css';
import Button from '../../atoms/button/button';
const Buttons = ({ className, text1, text2, onClick1, onClick2, findAction }) => {
    const [classNames1, setClassNames1] = useState('');
    const [classNames2, setClassNames2] = useState('');
    useEffect(() => {
        let classNames = className;
        console.log("hello",findAction)
        if(findAction === 'id') {
            classNames += ',clicked';
            setClassNames1(classNames);
            setClassNames2(className);
        }else if(findAction === 'password') {
            classNames += ',clicked';
            setClassNames2(classNames);
            setClassNames1(className);
        };
    });

    return (
        <div className={`${styles.container} ${styles[className]}`}>
            <Button className={classNames1?classNames1:className} text={text1} onClick={onClick1} findAction={findAction}></Button>
            <Button className={classNames2?classNames2:className}  text={text2} onClick={onClick2} findAction={findAction}></Button>
        </div>
    );
};

export default Buttons;