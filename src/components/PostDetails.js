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
            <h4>{title}</h4>
            <h4>Location: {location}</h4>
            <h4>Will Deliver: {willDeliver ? "Yes" : "No"}</h4>
            <h4>Price: {price}</h4>
            <h4>Description: {description}</h4>
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