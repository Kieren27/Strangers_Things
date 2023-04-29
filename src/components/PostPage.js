import React from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import PostDetails from "./PostDetails";
import CommentForm from "./CommentForm";

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
            <div className="hint-msg">
                No Post Found with that ID
                <Link to="/posts">Back to Posts</Link>
            </div>
        );
    }

    return (
       <>
        <PostDetails posts={post} token={token} onDelete={onDelete}/>
        <CommentForm token={token} POST_ID={post._id}/>
       </>
    )
}

export default PostPage;