import React from "react";

const PostDetails = ({
    posts: { _id, isAuthor, author, location, price, title, description },
    children
}) => {
    return (
        <div className="posts" key={_id ?? idx}>
            <h5>{title}</h5>
            <h5>Location: {location}</h5>
            <h5>Price: {price}</h5>
            <h5>Description: {description}</h5>
            {isAuthor 
            ? <small>Created By You</small>
            : <small>Created by {author.username} </small>}
            {children}
        </div>
    )
};

export default PostDetails;