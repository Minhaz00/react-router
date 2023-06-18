import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Post.css';


const Post = ({ post }) => {
    const { id, title, body } = post;

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/posts/${id}`)
    }

    return (
        <div className='post'>
            <h4>{title}</h4>
            <p>{body}</p>
        
            <Link to={`/posts/${id}`}>Details 1</Link>
            
            <Link to={`/posts/${id}`}>
                <button>Details 2</button>
            </Link>

            <button onClick={handleNavigate}>Details 3</button>
            
        </div>
    );
};

export default Post;