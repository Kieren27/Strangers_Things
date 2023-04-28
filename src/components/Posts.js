import React from "react";
import { Link } from "react-router-dom";
import PostDetails from "./PostDetails";

const Posts = ({ posts, fetchPosts, token }) => {

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
                {posts.map(
                    (posts, idx) => (
                        <PostDetails 
                        key={posts._id ?? idx}
                        posts={posts}>
                        <Link to={`/posts/${posts._id}`}>See Details</Link>
                        </PostDetails>
                    )
                )}
            </div>
        </>
    );
}

export default Posts;