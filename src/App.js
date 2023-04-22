import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";

import {
    Home,
    Account,
    Posts,
    // Register,
    // Login
} from './components';

const App = () => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

    useEffect (() => {
        console.log("TOKEN: " + token);
        console.log("USER ", user);
    }, [token, user]);

    return (
        <>
            <header>
                <h1 className="logo">Stranger's Things</h1>

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/account">Account</Link>
                    <Link to="/posts">Posts</Link>
                </nav>

            </header>

            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/account">
                <Account />
            </Route>

            <Route path="/users/register">
                {/* <Register /> */}
            </Route>

            <Route path="/users/login">
                {/* <Login /> */}
            </Route>

            <Route path="/posts">
                <Posts token={token}/>
            </Route>
        </>
    )
}

export default App;