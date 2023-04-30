import React from "react";
import { fetchFromAPI } from "../api";

const PostDetails = ({
    posts: { _id, isAuthor, author, location, price, title, description },
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
            <h5>{title}</h5>
            <h5>Location: {location}</h5>
            <h5>Price: {price}</h5>
            <h5>Description: {description}</h5>
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