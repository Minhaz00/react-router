import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const { title, id, userId } = post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/friend/${userId}`)
    }
    
    return (
        <div>
            <h1>Post Details</h1>
            <h3>{title}</h3>
            <p><small>Post ID: {id} Author ID: {userId}</small> </p>
            <p>{post.body}</p>
            <button onClick={handleNavigate}>View Author</button>
        </div>
    );
};

export default PostDetails;