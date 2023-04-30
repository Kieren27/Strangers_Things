import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import { fetchFromAPI } from "./api";

import {
    Posts,
    Account,
    Profile,
    PostForm,
    PostPage,
} from './components';

const App = () => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        console.log('FETCH ALL POSTS');
        const data = await fetchFromAPI({
            path: "/posts",
            token
        })

        if (data?.posts) {
            setPosts(data.posts);
        }
    }

    useEffect(() => {
        console.log("TOKEN: " + token);
        console.log("USER: ", user);
        console.log("POSTS: ", posts);
        fetchPosts();
    }, [token]);

    const logout = () => {
        setToken('');
        setUser('');
        fetchPosts();
    }

    return (
        <>
            <header>
                <h1 className="logo">Stranger's Things</h1>

                <nav>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/posts" className="nav-link">Posts</Link>
                    {token
                        ? <>
                            <Link to="/profile" className="nav-link">Profile</Link>
                            <a href="#" onClick={logout} className="nav-link">Log Out</a>
                        </>

                        : <Link to="/users/login" className="nav-link">Login</Link>
                    }
                </nav>

            </header>

            <Route exact path="/">
                <h1 className="page-title">Welcome to Stranger's Things!</h1>
                {token && <p className="hint-msg">You are currently logged in as: {user.username}</p>}
            </Route>

            <Route exact path="/profile">
                <Profile
                    token={token}
                    user={user}
                />
            </Route>

            <Route path="/users/:actionType">
                <Account
                    setToken={setToken}
                    setUser={setUser}
                />
            </Route>

            <Route exact path="/posts">
                {posts
                    ? <Posts
                        token={token}
                        posts={posts}
                        fetchPosts={fetchPosts}
                    />
                    : <strong>No Posts are available</strong>
                }
            </Route>
            <Route path="/posts/:POST_ID">
                <PostPage
                    posts={posts}
                    token={token}
                    fetchPosts={fetchPosts} />
            </Route>

            <Route path="/newpost">
                <PostForm
                    token={token}
                    fetchPosts={fetchPosts} />
            </Route>
        </>
    )
}

export default App;