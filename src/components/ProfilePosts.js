import React from "react";

const ProfilePosts = ({posts}) => {
    return (
        <div key={posts._id ?? idx}>
            <p>{posts.title}</p>
            <p>Loaction: {posts.location}</p>
            <p>Price: {posts.price}</p>
            <p>Status: {posts.active ? "Active" : "Inactive"}</p>
        </div>
    )
}

export default ProfilePosts;