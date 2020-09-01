import React from 'react'
import TweetBox from "./TweetBox";
import Post from "../components/Post";
import "../assets/css/Feed.css";

function Feed() {
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>


            {/* TweetBox */}
            <TweetBox />

            {/* Post */}
            <Post />
            {/* Post */}
            {/* Post */}
            {/* Post */}


        </div>
    )
}

export default Feed
