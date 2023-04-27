import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { fetchFromAPI } from "../api";

const PostForm = ({ token }) => {
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [willDeliver, setWilldeliver] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const postData = await fetchFromAPI({
            endpoint: "post",
            token,
            body : {
                post : {
                    title,
                    description,
                    price,
                    location,
                    willDeliver
                }
            }
        })
        console.log(postData);
        
        const { post } = postData;
        if (post) {
            setTitle('');
            setLocation('');
            setPrice('');
            setDescription('');
            setWilldeliver(false);

            history.push('/posts');
        }

    }

    return (
        <>
            <h1 className="page-title">Create New Post</h1>
            <form onSubmit={handleSubmit}>
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
                    <label htmlFor="willDeliver">Will deliver</label>
                    <input
                        name="willDeliver"
                        type="checkbox"
                        value={willDeliver}
                        onChange={event => setWilldeliver(event.target.value)}
                    />
                </div>
            </form>
        </>
    )

}

export default PostForm;