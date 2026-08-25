// import React from 'react';

const User2card = ({user}) => {
    const {name, email,phone}= user;
    return (
        <div>
            <h2>{name}</h2>
            <p>Email:{email}</p>
            <p><small>Phone:{phone}</small></p>
        </div>
    );
};

export default User2card;