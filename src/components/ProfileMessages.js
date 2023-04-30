import React from "react";

const ProfileMessages = ({messages}) => {
    return (
        <div key={messages._id ?? idx}>
            <p>From: {messages.fromUser.username}</p>
            <p id="message-title">On: {messages.post.title}</p>
            <p>{messages.content}</p>
        </div>
    )
}

export default ProfileMessages;