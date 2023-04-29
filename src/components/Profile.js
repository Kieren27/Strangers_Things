import React from "react";
import { useHistory } from "react-router-dom";


const Profile = ({user: {
    username,
    messages,
    posts,
}, 
token}) => {
    const history = useHistory();

    if (!token) {
        history.push('/users/login')
    }

    return (
        <>
            <h1 className="page-title">{username}'s profile</h1>
        </>
    )
}

export default Profile;