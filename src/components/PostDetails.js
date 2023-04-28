import React from "react";
import { fetchFromAPI } from "../api";

const PostDetails = ({
    post: {_id, isAuthor, location, description},
    token,
    onDelete,
    children
}) => {

    const handleDelete = async () => {
        await fetchFromAPI({
            endpoint: `/posts/${_id}`,
            method: "delete",
            token,
        });
        onDelete && onDelete();
    }

    return (
        <div key={_id ?? idx}>
            <h5>Location: {location}</h5>
            <p>Description: {description}</p>
            {isAuthor && <button onClick={handleDelete}>Delete</button>}
            {children}
        </div>
    );
}

export default PostDetails;