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

    const createPost = async (event) => {
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

}

export default PostForm;