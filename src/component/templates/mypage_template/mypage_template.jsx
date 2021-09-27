import React from 'react';
import Header from '../../organisms/header/header';
import UserProfile from '../../molecules/user_profile/user_profile';
import Buttons from '../../molecules/buttons/buttons';
import Posts from '../../organisms/posts/posts';

const MypageTemplate = ({ posts,likedPosts, user,onClickCategory,category }) => {
    const userId = user && user.userId;
    const userProfile = user && user.profile;
    return (
        <div>
            <Header status="mypage" user={user}></Header>
            <UserProfile className="mypage" src={userProfile?userProfile:'./images/user.png'} alt={userId} userId={userId}/>
            <Buttons className="mypage" text1="내 게시물" text2="좋아요" onClick1={onClickCategory} onClick2={onClickCategory}/>
            {category === "mypost" && <Posts posts={posts} user={user}/>}
            {category === "likes" && <Posts posts={likedPosts} user={user}/>}
        </div>
    );
};

export default MypageTemplate;