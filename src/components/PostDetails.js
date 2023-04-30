import React from "react";
import { fetchFromAPI } from "../api";

const PostDetails = ({
    posts: { _id, isAuthor, author, location, price, title, description, willDeliver },
    children,
    token,
    onDelete
}) => {

    const deletePost = async () => {
        await fetchFromAPI({
            path: `/posts/${_id}`,
            method: 'delete',
            token
        });
        onDelete && onDelete();
    }

    return (
        <div className="posts" key={_id ?? idx}>
            <p>{title}</p>
            <p>Location: {location}</p>
            <p>Will Deliver: {willDeliver ? "Yes" : "No"}</p>
            <p>Price: {price}</p>
            <p>Description: {description}</p>
            {isAuthor
                ?
                <>
                    <small>Created By You</small>
                    <button onClick={deletePost}>Delete</button>
                </>
                : <small>Created by {author.username} </small>}
            {children}
        </div>
    )
};

export default PostDetails;