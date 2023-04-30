import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ProfilePosts from "./ProfilePosts";


const Profile = ({ user: {
    username,
    messages,
    posts,
},
    token }) => {

    const history = useHistory();

    if (!token) {
        history.push('/users/login')
    }

    return (
        <>
            <h1 className="page-title">{username}'s profile</h1>
            <div id="profile-el">
                <section id="my-posts">
                    <h1>My Posts</h1>
                    {posts.map(
                        (posts, idx) => (
                            <ProfilePosts
                            key={posts._id ?? idx}
                            posts={posts}
                            />
                        )
                    )}
                </section>
            </div>
        </>
    )
}

export default Profile;