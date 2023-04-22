import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";

import {
    Home,
    Posts,
    // Account,
    // Profile,
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
                    <Link to="/posts">Posts</Link>
                    {
                        token
                            ? <Link to="users/me">My Profile</Link>
                            : <Link to="users/login">Login</Link>
                    }
                </nav>

            </header>

            <Route exact path="/">
                <Home />
            </Route>

            <Route path="users/me">
                {/* <Profile /> */}
            </Route>

            <Route path="/users/:actionType">
                <Account 
                    setToken={setToken}
                    setUser={setUser}
                />
            </Route>

            <Route path="/posts">
                <Posts token={token}/>
            </Route>
        </>
    )
}

export default App;