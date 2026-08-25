// import React from 'react';

const User = ({user}) => {
    const {name, email, phone} = user;

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
            
        </div>
    );
};

export default User;