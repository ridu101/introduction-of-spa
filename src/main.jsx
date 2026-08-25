import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, useParams } from "react-router";
import App from "./App.jsx";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Mobiles from "./components/Mobiles/Mobiles.jsx";
import Laptop from "./components/Laptops/Laptop.jsx";
import Users from "./components/Users/Users.jsx";
import User2 from "./components/User2/User2.jsx";
import UserDetails from "./components/UserDetails/UserDetails.jsx";

const userPromise2= fetch('https://jsonplaceholder.typicode.com/users').then( res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptop },
      {
        path: "users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users,
      },
      {
        path:'users2',
        element:<Suspense fallback="Loading..........">
          <User2 userPromise2={userPromise2}></User2>
        </Suspense>
      },
      {
        path: 'users/:userID',
        loader:({params})=>fetch('https://jsonplaceholder.typicode.com/users'),
        Component: UserDetails
      }
    ],
  },
  {
    path: "about",
    element: <div>About me Here</div>,
  },
  {
    path: "app",
    Component: App,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </StrictMode>,
);
