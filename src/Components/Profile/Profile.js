import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Profile = () => {
    const friend = useLoaderData();
    return (
        <div>
            <h1>Detail Page of: {friend.name}</h1>
            <p>Usename: {friend.username}</p>
            <p>Email: {friend.email}</p>
            <p>Phone: {friend.phone}</p>
        </div>
    );
};

export default Profile;