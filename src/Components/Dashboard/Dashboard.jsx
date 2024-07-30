import React, { useContext } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Providers/Authprovider';

const Dashboard = () => {
  const { logOut, isAdmin } = useContext(AuthContext)


  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log('logout successful')
      })
      .catch((error) => {
        console.log(error.message)
      })
  }
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label htmlFor="my-drawer-2" className="btn absolute right-3 top-3  drawer-button lg:hidden">
          <AiOutlineMenu />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {/* <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
          <li><Link to="/dashboard/users">All Users</Link></li>



          <div className='divider'></div> */}
          {
            isAdmin ?

              <>           <li><Link to="/dashboard/manageshifts">Manage Shifts</Link></li>
                <li><Link to="/dashboard/allShifts">All Shifts</Link></li>
                <li><Link to="/dashboard/users">All Users</Link></li>
                <li><Link to="/dashboard/calendar">Calendar</Link></li>


                <div className='divider'></div>

              </>

              :

              <></>
          }

          <li >
            <Link to="/dashboard/shifts" >Your Shifts</Link>
            <Link to="/">Home</Link>
          </li>
          <li >
            <button onClick={handleLogout}>LogOut</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;