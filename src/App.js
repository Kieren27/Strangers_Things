import React from "react";
import { Route, Link } from "react-router-dom";

import {
    Home,
    Account,
    Posts,
    // Register,
    // Login
} from './components';

const App = () => {
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

            <Route path="/account/register">
                <Register />
            </Route>

            <Route path="/account/login">
                <Login />
            </Route>

            <Route path="/posts">
                <Posts />
            </Route>
        </>
    )
}

export default App;