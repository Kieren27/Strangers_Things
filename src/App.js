import React from "react";
import { Route, Link } from "react-router-dom";

import {
    Home,
    // Account,
    // Posts
} from './components';

const App = () => {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/account">Account</Link>
                <Link to="/posts">Posts</Link>
            </nav>

            <Route exact path="/">
                <Home />
            </Route>
            
            <Route path="/account">
                {/* <Account /> */}
            </Route>

            <Route path="/posts">
                {/* <Posts /> */}
            </Route>
        </>
    )
}

export default App;