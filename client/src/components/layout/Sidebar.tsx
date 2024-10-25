import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { BsCollection } from "react-icons/bs";
import { MdOutlineLeaderboard } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { logoutUser } from "../../features/auth/authActions";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { MdOutlineExplore } from "react-icons/md";

const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <section className="sidebar bg-white border-r border-gray-200 relative bottom-0 pr-1 h-screen top-0 left-0 flex flex-col gap-10">
      <div className="sidebar__logo flex items-center justify-center p-5">
        <h2 className="font-bold bg-green-500 py-1 px-3 rounded-full text-white">
          U-Track
        </h2>
      </div>
      <nav className="justify-self-end flex flex-col justify-between gap-10">
        <ul className="flex justify-center align-center flex-col gap-5">
          <NavLink
            to="/in"
            className={({ isActive }) => `
            flex items-center gap-3 p-2 text-[#333] border border-transparent
            ${isActive ? "active font-bold  border-r-4 border border-sky-500 bg-gradient-to-r shadow-xl to-white from-sky-300 text-black" : "hover:text-black hover:bg-gray-200 hover:border-gray-200"}
            cursor-pointer transform transition-all duration-200 text-[15px]
        `}
        end
          >
            <LuLayoutDashboard />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to={'/in/challenges'} 
          className={({ isActive }) => `
          flex items-center gap-3 p-2 text-[#333] border border-transparent
          ${isActive ? "active font-bold border border-r-4 border-sky-500 bg-gradient-to-r shadow-xl to-white from-sky-300 text-black" : "hover:text-black hover:bg-gray-200 hover:border-gray-200"}
          cursor-pointer transform transition-all duration-200 text-[15px]
      `}
          >
            <MdOutlineExplore className="text-1xl" />
            <Link to="/in/challenges">Explore</Link>
          </NavLink>
          <NavLink to={"/in/my-challenges"}
           className={({ isActive }) => `
           flex items-center gap-3 p-2 text-[#333] border border-transparent
           ${isActive ? "active border-r-4 font-bold border border-sky-500 bg-gradient-to-r shadow-xl to-white from-sky-300 text-black" : "hover:text-black hover:bg-gray-200 hover:border-gray-200"}
           cursor-pointer transform transition-all duration-200 text-[15px]
       `}
          >
            <BsCollection />
            <Link to="/in/my-challenges">Challenges</Link>
          </NavLink>
          <NavLink to={'/in/leaderboard'} 
           className={({ isActive }) => `
           flex items-center gap-3 p-2 text-[#333] border border-transparent
           ${isActive ? "active font-bold border border-r-4 border-sky-500 bg-gradient-to-r shadow-xl to-white from-sky-300 text-black" : "hover:text-black hover:bg-gray-200 hover:border-gray-200"}
           cursor-pointer transform transition-all duration-200 text-[15px]
       `}
           >
            <MdOutlineLeaderboard />
            <Link to="/in/leaderboard">LeaderBoard</Link>
          </NavLink>
          <NavLink to={'/in/categories'} 
          className={({ isActive }) => `
          flex items-center gap-3 p-2 text-[#333] border border-transparent
          ${isActive ? "active font-bold border border-r-4 border-sky-500 bg-gradient-to-r shadow-xl to-white from-sky-300 text-black" : "hover:text-black hover:bg-gray-200 hover:border-gray-200"}
          cursor-pointer transform transition-all duration-200 text-[15px]
      `}
        >
            <MdOutlineLeaderboard />
            <Link to="/in/categories">Categories</Link>
          </NavLink>
          <NavLink to="/in/notifications" 
          className={({ isActive }) => `
          flex items-center gap-3 p-2 text-[#333] border border-transparent
          ${isActive ? "active font-bold border border-r-4 border-sky-500 bg-gradient-to-r shadow-xl to-white from-sky-300 text-black" : "hover:text-black hover:bg-gray-200 hover:border-gray-200"}
          cursor-pointer transform transition-all duration-200 text-[15px]
      `}
        >
            <IoNotificationsOutline />
            <Link to="/in/notifications">Notification</Link>
          </NavLink>
          <NavLink to="/in/settings"  
         className={({ isActive }) => `
         flex items-center gap-3 p-2 text-[#333] border border-transparent
         ${isActive ? "active font-bold border border-r-4 border-sky-500 bg-gradient-to-r shadow-xl to-white from-sky-300 text-black" : "hover:text-black hover:bg-gray-200 hover:border-gray-200"}
         cursor-pointer transform transition-all duration-200 text-[15px]
     `}
        >
            <IoSettingsOutline />
            <Link to="/in/settings">Settings</Link>
          </NavLink>
        </ul>
        <ul>
          <NavLink to="/login"
            onClick={() => dispatch(logoutUser())}
            className={({ isActive }) => `
            flex items-center gap-3 p-2 text-[#333]
            ${isActive ? "active font-bold border border-r-4 border-sky-500 bg-gradient-to-r shadow-xl to-white from-sky-300 text-black" : "hover:text-black hover:bg-gray-200 hover:border-gray-200"}
            cursor-pointer transform transition-all duration-200 text-[15px]
        `}
          >
            <IoLogOutOutline />
            <Link to="/login">Logout</Link>
          </NavLink>
        </ul>
      </nav>
    </section>
  );
};

export default Sidebar;
