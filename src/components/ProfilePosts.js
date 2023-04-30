import React from "react";

const ProfilePosts = ({posts}) => {
    return (
        <div key={posts._id ?? idx}>
            <h4>{posts.title}</h4>
            <h4>Loaction: {posts.location}</h4>
            <h4>Price: {posts.price}</h4>
            <h4>Active: {posts.active ? "Active" : "Inactive"}</h4>
        </div>
    )
}

export default ProfilePosts;