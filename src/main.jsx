import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Mobiles from './components/Mobiles/Mobiles';
import Laptop from './components/Laptops/Laptop';

const router = createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[
      { index:true, Component:Home},
      {path: 'mobiles', Component: Mobiles},
      {path: 'laptops', Component:Laptop}
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
