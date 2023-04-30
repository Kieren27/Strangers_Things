import React from "react";

const ProfileMessages = ({messages}) => {
    return (
        <div key={messages._id ?? idx}>
            <h4>From: {messages.fromUser.username}</h4>
            <h4>On: {messages.post.title}</h4>
            <h4>{messages.content}</h4>
        </div>
    )
}

export default ProfileMessages;