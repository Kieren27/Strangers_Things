import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { fetchFromAPI } from "../api";

const PostForm = ({ fetchPosts, token }) => {
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const requestBody = {
            post: {
                title,
                description,
                price,
                location,
                willDeliver,
            }
        }

        const postData = await fetchFromAPI({
            path: "/posts",
            method: "post",
            token,
            body: requestBody,
        })
        console.log(postData);

        const { post } = postData;
        if (post) {
            setTitle('');
            setLocation('');
            setPrice('');
            setDescription('');
            setWillDeliver(false);
            await fetchPosts();

            history.push('/posts');
        }

    }

    return (
        <>
            <h1 className="page-title">Create New Post</h1>
            {token
                ? <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input
                            name="title"
                            type="text"
                            value={title}
                            onChange={event => setTitle(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="location">Location</label>
                        <input
                            name="location"
                            type="text"
                            value={location}
                            onChange={event => setLocation(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Price</label>
                        <input
                            name="price"
                            type="text"
                            value={price}
                            onChange={event => setPrice(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input
                            name="description"
                            type="text"
                            value={description}
                            onChange={event => setDescription(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="willDeliver">Will Deliver</label>
                        <input
                            name="willDeliver"
                            type="checkbox"
                            checked={willDeliver}
                            onChange={event => setWillDeliver(event.target.checked)}
                        />
                    </div>
                    <button type="submit">Post</button>
                </form>
                : <p className="hint-msg">please log in or register to create a new post.</p>
            }
        </>
    )

}

export default PostForm;