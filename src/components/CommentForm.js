import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { fetchFromAPI } from "../api";

const CommentForm = ({POST_ID, token}) => {
    const [content, setContent] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const messageData = await fetchFromAPI({
            path: `/posts/${POST_ID}/messages`,
            method: "post",
            body: {
               message: {
                content,
               } 
            },
            token,
        })
        console.log(messageData);

        if (messageData.message) {
            setContent('');
        }
    }

    return (
        <>
            {token
                ? <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="content">Send a message to the author:</label>
                        <input
                            name="content"
                            type="text"
                            value={content}
                            onChange={event => setContent(event.target.value)}
                        />
                    </div>
                    <button type="submit">Send</button>
                </form>
                : <Link to="/users/login" className="hint-msg">please log in or register to send a message.</Link>}
        </>
    )
}

export default CommentForm;