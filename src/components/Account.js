import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';
import { fetchFromAPI } from "../api";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Account = ({ setToken, setUser }) => {
    const params = useParams();
    const history = useHistory();
    console.log(params);

    const { actionType } = params;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {

    }

    return (
        <>
            <h1>{actionType === "register" ? "Sign Up" : "Login"}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        name="username"
                        type="text"
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        name="password"
                        type="text"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                </div>
                <button type="submit">{actionType === "register" ? "Register" : "Login"}</button>
                {actionType === "register"
                    ? <Link to="users/login">Already have an account? Log in here.</Link>
                    : <Link to="users/register">Don't have an account? Register here.</Link>
                }
            </form>
        </>
    )
}

export default Account;