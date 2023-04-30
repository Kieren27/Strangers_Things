import React from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import PostDetails from "./PostDetails";
import MessageForm from "./MessageForm";

const PostPage = ({ posts, token, fetchPosts }) => {
    const params = useParams();
    const history = useHistory();
    const { POST_ID } = params;

    const post = posts.find(post => post._id == POST_ID);

    const onDelete = async () => {
        await fetchPosts();
        history.push('/posts');
    }

    if (!post) {
        return (
            <>
                <div className="hint-msg">
                    No Post Found with that ID
                </div>
                <Link to="/posts" className="hint-msg">Back to Posts</Link>
            </>
        );
    }

    return (
        <>
            <div id="post-div">
                <PostDetails posts={post} token={token} onDelete={onDelete} />
                <MessageForm token={token} POST_ID={post._id} posts={posts} />
            </div>
        </>
    )
}

export default PostPage;