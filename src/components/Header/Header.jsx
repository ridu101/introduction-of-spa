// import React from 'react';

import {  NavLink } from "react-router";
import './Header.css'

const Header = () => {
    return (
        <div>
            <h3 className="text-5xl">Explore By Clicking The Below Buttons</h3>
            <nav>
               <NavLink to='/'>Home</NavLink>
               <NavLink to='/mobiles'>Mobiles</NavLink>
               <NavLink to='/laptops'>Laptops</NavLink>
               <NavLink to='/users'>Users</NavLink>
               {/* <NavLink to='/users2'>Users2</NavLink> */}
               <NavLink to='/posts'>Posts</NavLink>

               
            </nav>
        </div>
    );
};

export default Header;