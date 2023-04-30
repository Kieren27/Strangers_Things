import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';
import { fetchFromAPI } from "../api";

const Account = ({ setToken, setUser }) => {
    const params = useParams();
    const history = useHistory();

    const { actionType } = params;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const requestBody = {
            user: {
                username,
                password
            }
        }

        const data = await fetchFromAPI({
            path: `/users/${actionType}`,
            method: "post",
            body: requestBody,
        })

        const { token } = data;
        if (token) {
            const data = await fetchFromAPI({
                path: "/users/me",
                token
            })

            const user = data;
            if (token) {
                setUsername('');
                setPassword('');
                setToken(token);
                setUser(user);

                history.push('/');
            }
        }
    }

    return (
        <>
            <h1 className="page-title">{actionType === "register" ? "Sign Up" : "Login"}</h1>
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            name="username"
                            type="text"
                            minLength="3"
                            maxLength="10"
                            value={username}
                            onChange={event => setUsername(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            name="password"
                            type="password"
                            minLength="3"
                            maxLength="10"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        />
                    </div>
                    <button type="submit">{actionType === "register" ? "Register" : "Login"}</button>
                    {actionType === "register"
                        ? <Link to="/users/login" className="link">Already have an account? Log in here.</Link>
                        : <Link to="/users/register" className="link">Don't have an account? Register here.</Link>
                    }
                </form>
            </div>
        </>
    )
}

export default Account;