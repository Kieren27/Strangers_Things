import React, { useState } from "react";
import { Link } from "react-router-dom";
import PostDetails from "./PostDetails";

const Posts = ({ posts, fetchPosts, token }) => {
    const [searchValue, setSearchValue] = useState('');
    const [filteredPosts, setFilteredPosts] = useState(posts);

    const onDelete = async () => {
        await fetchPosts();
    }

    const handleSearch = (event) => {
        const substring = event.target.value;
        setSearchValue(substring);

        const filteredPosts = posts
            .filter(post =>
                post.title.toLowerCase().includes(substring.toLowerCase().trim()) ||
                post.location.toLowerCase().includes(substring.toLowerCase().trim()));

        setFilteredPosts(filteredPosts);
    }

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

            <div className="search-bar">
                <input
                    id="search-box"
                    type="text"
                    name="search"
                    value={searchValue}
                    onChange={handleSearch}
                />
            </div>

            <div id="post-div">
                {filteredPosts.length ?
                    filteredPosts.map(
                        (posts, idx) => (
                            <PostDetails
                                key={posts._id ?? idx}
                                posts={posts}
                                token={token}
                                onDelete={onDelete}>
                                <button>
                                    <Link to={`/posts/${posts._id}`} className="link">See Details</Link>
                                </button>
                            </PostDetails>
                        )
                    ) : <div>No Posts Found</div>}
            </div>
        </>
    );
}

export default Posts;