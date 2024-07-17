import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Components/Home.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout/MainLayout.jsx';
import About from './Components/About.jsx';
import Login from './Components/Authentication/Login.jsx';
import Registration from './Components/Authentication/Registration.jsx';
import Authprovider from './Providers/Authprovider.jsx';
import DashboardLayout from './Layout/DashboardLayout.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import { ToastContainer } from 'react-toastify';
import Users from './Components/Dashboard/Users/Users.jsx';
import Manageshifts from './Components/Dashboard/Shifts/Manageshifts.jsx';
import Shifts from './Components/Dashboard/Shifts/Shifts.jsx';
import AllShifts from './Components/Dashboard/Shifts/AllShifts.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{
      path: "/",
      element: <Home />
    },
    {
      path: "/About",
      element: <About />
    },
    {
      path: "/Login",
      element: <Login />
    },
    {
      path: "/Registration",
      element: <Registration />
    }
    ]

  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element: <Users />
      },
      {
        path: "/dashboard/users",
        element: <Users />,

      },
      {
        path: "/dashboard/manageshifts",
        element: <Manageshifts />
      },
      {
        path: "/dashboard/shifts",
        element: <Shifts />
      },
      {
        path: "/dashboard/allShifts",
        element: <AllShifts />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
    <ToastContainer className="sm:w-1/3 text-xs" />
  </React.StrictMode>,
)
