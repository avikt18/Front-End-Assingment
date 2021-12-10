import React, { useState } from 'react'
import { HeartOutlined, HeartFilled } from '@ant-design/icons'

function LikeBtn() {
    const [isLiked, setIsLiked] = useState(false);
    const handleLike = () => {
        console.log('💓', 'liked');
        setIsLiked(!isLiked)
        console.log(isLiked);
    }

    const likeBtnStyles = { fontSize: '20px', color: 'red' };
    
    return (
        <div>
            {isLiked ? (
                <HeartFilled key="like" style={likeBtnStyles} onClick={handleLike} />
            ) : (
                <HeartOutlined key="like" style={likeBtnStyles} onClick={handleLike} />
            )
            }
        </div>
    )
}

export default LikeBtn
