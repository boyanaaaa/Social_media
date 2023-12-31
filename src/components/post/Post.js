import React from 'react'
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Users } from "../../userData"
import { useState } from 'react';



function Post({ post }) {

    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)
    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}/>
                    <span className="postUserName">
                        {Users.filter((u) => u.id === post?.userId)[0].username}
                    </span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon />
                </div>
            </div>
            <div className="postCenter">
                <span className="postTex">{post?.desc}</span>
                <img className='postImg' src={post.photo}/>
                
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <ThumbUpIcon className='likeButton' onClick={likeHandler} />
                        <FavoriteIcon className='loveButton' onClick={likeHandler} />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Post