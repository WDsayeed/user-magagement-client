import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './component/Home/Home';
import AddUser from './component/AddUser/AddUser';
import Update from './component/update/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'adduser',
        element:<AddUser></AddUser>
      },
      {
        path:'/updateUser/:id',
        element:<Update></Update>,
        loader: ({params})=> fetch(`http://localhost:5000/users/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
     <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
