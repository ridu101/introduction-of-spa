// import React from 'react';

import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SIdebar from "../SIdebar/SIdebar";
import './Root.css'

const Root = () => {
  return (
    <div>
      <Header></Header>
      <div className="root-main" >
        <SIdebar></SIdebar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
