import React from "react";
import { Route, Link } from "react-router-dom";

const App = () => {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/account">Account</Link>
                <Link to="/posts">Posts</Link>
            </nav>

            <Route exact path="/">
                <h1>Welcome to Stranger's Things!</h1>
            </Route>
            
            <Route path="/account">
                <h1>My Account</h1>
            </Route>

            <Route path="/posts">
                <h1>Posts</h1>
            </Route>
        </>
    )
}

export default App;