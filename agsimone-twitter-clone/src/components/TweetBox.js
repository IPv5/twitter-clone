import React, { useState } from 'react'
import { Avatar, Button } from "@material-ui/core";
import "../assets/css/TweetBox.css";
import db from '../firebase';

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = event => {
        event.preventDefault();

        db.collection('posts').add({
            displayName: 'Anthony Simone',
            userName: 'mrsimone',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: ''
        })

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="" />
                    <input
                        onChange={event => setTweetMessage(event.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?" />
                </div>
                <input
                    value={tweetImage}
                    onChange={event => setTweetImage(event.target.value)}
                    className="tweetBox__inputImage"
                    placeholder="Optional: Enter image URL"
                    type="text" />
                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
