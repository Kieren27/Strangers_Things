import React from "react";
import { useParams, Link } from "react-router-dom";
import PostDetails from "./PostDetails";

const PostPage = ({ posts }) => {
    const params = useParams();
    const { POST_ID } = params;

    const post = posts.find(post => post._id == POST_ID);

    if (!post) {
        return (
            <div>
                No Post Found with that ID
                <Link to="/posts">Back to Posts</Link>
            </div>
        );
    }

    return (
        <PostDetails posts={post}/>
    )
}

export default PostPage;