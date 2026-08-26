// import React from 'react';

import { Suspense, useState } from "react";
import { Link } from "react-router";
import Userdetails2 from "../UserDetails2/Userdetails2";

const User = ({ user }) => {
    
  const [showInfo, setShowInfo] = useState(false);

  const { name, email, phone, id } = user;

  const userPromise= fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then( response => (response.json()))

  const userStyle = {
    border: "3px solid yellow",
    borderRadius: "20px",
    padding: "10px",
    margin: "10px",
  };
  return (
    <div style={userStyle}>
      <h2>{name}</h2>
      <p>Email:{email}</p>
      <p>
        <small>Phone:{phone}</small>
      </p>
      <Link to={`/users/${id}`}>Show Details</Link>
      <button onClick={() => setShowInfo(!showInfo)} style={{ marginLeft: "20px" }}>{showInfo ? "Hide" : "Show"} Info</button>
      {
        showInfo && <Suspense fallback={"Loading................."}>
            <Userdetails2 userPromise={userPromise}></Userdetails2>
        </Suspense>
      }
    </div>
  );
};

export default User;
