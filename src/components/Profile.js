import React from "react";
import { useHistory } from "react-router-dom";


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
                <section id="active-posts">
                    <h1>Active Posts</h1>
                </section>

                <section id="messages">
                    <h1>messages</h1>
                </section>

                <section id="inactive-posts">
                    <h1>Inactive Posts</h1>
                </section>
            </div>
        </>
    )
}

export default Profile;