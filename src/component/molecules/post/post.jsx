import React from 'react';
import { useHistory } from 'react-router';
import Image from '../../atoms/image/image';
const Post = ({ postId, user,src, alt }) => {
    const history = useHistory();
    const onClickPost = () => {
        history.push({
            pathname: `../detail/${postId}`,
            state: {
                postId,
                user
            }
        })

    }
    return (
            <Image className="post" src={src} alt={alt} onClick={onClickPost}></Image>

    );
};

export default Post;