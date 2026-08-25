// import React from 'react';

import { Link } from "react-router";

const User = ({user}) => {
    const {name, email, phone, id} = user;

    const userStyle={
        border: '3px solid yellow',
        borderRadius:'20px',
        padding:'10px',
        margin:'10px',

    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email:{email}</p>
            <p><small>Phone:{phone}</small></p>
            <Link to={`/users/${id}`}>Show Details</Link>
            
        </div>
    );
};

export default User;