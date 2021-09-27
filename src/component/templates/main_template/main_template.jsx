import React from 'react';
import styles from './main_template.module.css';
import Header from '../../organisms/header/header';
import Category from '../../organisms/category/category';
import Posts from '../../organisms/posts/posts';
import Weather from '../../organisms/weather/weather';
import Recommend from '../../organisms/recommend/recommend';
import Loading from '../../atoms/loading/loading';
const MainTemplate = ({ posts, user, data,address,onClickCategory,onChangeCity }) => {
    return (
        <section>
            <Header status="mainpage" user={user} onChangeCity={onChangeCity} ></Header>
            {data.currentTemp === null &&
                <div className={`${styles.box} ${styles.loading}`}>
                    <Loading loading="loading" />
                </div>}
            {data.currentTemp &&
                <div className={styles.box}>
                    <Weather data={data} address={address} />
                    <Recommend temp={data.currentTemp} />
                </div>
            }
            <Category className="category" onClickCategory={onClickCategory}></Category>
            <Posts posts={posts} user={user}></Posts>
        </section>
    );
};

export default MainTemplate;