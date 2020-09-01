import React from 'react'
import "../assets/css/Post.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { Avatar } from '@material-ui/core';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, userName, verified, text, image, avatar }) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Anthony Simone{" "}
                            <span>
                                <VerifiedUserIcon className="post__badge" />
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>This is a demo tweet</p>
                    </div>
                </div>
                <img src="https://media.giphy.com/media/rCmC12OWz9kTS/giphy.gif" alt="Post IMG" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>

        </div>
    )
}

export default Post;