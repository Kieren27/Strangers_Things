import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchFromAPI } from "../api";

const Posts = ({ token }) => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const data = await fetchFromAPI({
            endpoint: "posts",
            token
        })

        if (data?.posts) {
            setPosts(data.posts);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [token]);


    return (
        <>
            <h1 className="page-title">Posts</h1>
            {token
                ? <div className="create-button">
                    <button>
                        <Link to="/newpost" className="link">Create Post</Link>
                    </button>
                </div>
                
                : <h3 className="hint-msg">To create a post, login or register</h3>

            }

            <div>
                {
                    posts
                        ? posts.map(
                            ({ _id, isAuthor, author, location, price, title }, idx) => (
                                <div className="posts" key={_id ?? idx}>
                                    <h5>{title}</h5>
                                    <h5>{location}</h5>
                                    <h5>{price}</h5>
                                    {isAuthor
                                        ? <small>Created By You</small>
                                        : <small>Created By {author.username}</small>}
                                </div>
                            )
                        ) : <strong>No Posts are available</strong>
                }
            </div>
        </>
    );
}

export default Posts;