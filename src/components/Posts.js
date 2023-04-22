import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../api";

const Posts = ({token}) => {
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
            <div>
                {
                    posts 
                    ? posts.map(
                        ({_id, isAuthor, author, location, desription, price, title}, idx) => (
                            <div className="posts" key={_id ?? idx}>
                                <h5>{title}</h5>
                                <h5>{price}</h5>
                                <h5>{location}</h5>
                                <p>{desription}</p>
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