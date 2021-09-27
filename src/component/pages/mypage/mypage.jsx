import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { useEffect, useState } from 'react/cjs/react.development';
import MypageTemplate from '../../templates/mypage_template/mypage_template';
const Mypage = ({ posts, likes }) => {
    const history = useHistory();
    const location = useLocation();
    const { user } = location.state;
    const userId = user && user.userId;
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [likedPosts, setLikedPosts] = useState([]);
    const [category, setCategory] = useState('mypost');


    useEffect(() => {
        if (!location.state) {
            history.push('/');
        } else {
            const filtered = posts.filter(post => post.userId === userId);
            setFilteredPosts(filtered);
            const liked = posts.filter(post => likes.map(like => {
                if (like.userId === userId)
                    return like.postId
            }).includes(post.postId));
            setLikedPosts(liked);
        }
    }, [posts]);

    const onClickCategory = (event) => {
        console.log(event.target.value);
        const category = event.target.value;

        switch (category) {
            case '내 게시물':
                setCategory('mypost');
                break;
            case '좋아요':
                setCategory('likes');
                break;
        }
    }
    

    return (
        <MypageTemplate posts={filteredPosts} likedPosts={likedPosts} user={user} onClickCategory={onClickCategory} category={category}/>
    );
};

export default Mypage;