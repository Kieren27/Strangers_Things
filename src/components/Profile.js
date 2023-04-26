import React from "react";
import { useHistory } from "react-router-dom";


const Profile = ({user, token}) => {
    const history = useHistory();

    if (!user) {
        history.push('/users/login')
    }

    return (
        <>
            <h1 className="page-title">{user.username}'s profile</h1>
        </>
    )
}

export default Profile;