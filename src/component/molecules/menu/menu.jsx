import React from 'react';
import styles from './menu.module.css';
import Button from '../../atoms/button/button';

const Menu = ({ className, menuTitle,onClickMenu }) => {
    return (
        <div className={styles[className]}>
            {menuTitle.map((title, index) => <Button key={index} className="menu" onClick={onClickMenu} text={title}/>
            )}
        </div>
    );
};

export default Menu;