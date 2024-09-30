import React from "react";
import { Link } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { BsCollection } from "react-icons/bs";
import { MdOutlineLeaderboard } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { IoLogOutOutline } from "react-icons/io5";
import { logoutUser } from "../../features/auth/authActions";
import { useAppDispatch } from "../../hooks/useAppDispatch";



const Sidebar: React.FC = () => {
    const dispatch = useAppDispatch();
    return (
        <section className="sidebar bg-white border-r border-gray-200 relative bottom-0 h-screen top-0 left-0 flex flex-col gap-10">
            <div className="sidebar__logo flex items-center justify-center p-5">
                <h2 className="font-bold bg-green-500 py-1 px-3 rounded-full text-white">U-Track</h2>
            </div>
            <nav className="justify-self-end flex flex-col justify-between gap-10">
                <ul className="flex justify-center align-center flex-col gap-5">
                    <li className="flex items-center gap-3 p-2 text-[#333] hover:text-black hover:bg-gray-200 border border-transparent hover:border hover:border-gray-200 cursor-pointer transform transition-all duration-200">
                        <LuLayoutDashboard />
                       <Link to="/in">Dashboard</Link>
                    </li>
                    <li className="flex items-center gap-3 p-2 text-[#333] hover:text-black hover:bg-gray-200 border border-transparent hover:border hover:border-gray-200 cursor-pointer transform transition-all duration-200">
                        <LuUsers />
                       <Link to="/in/users">Users</Link>
                    </li>
                    <li className="flex items-center gap-3 p-2 text-[#333] hover:text-black hover:bg-gray-200 border border-transparent hover:border hover:border-gray-200 cursor-pointer transform transition-all duration-200">
                        <BsCollection />
                        <Link to="/in/challenges">Challenges</Link>
                    </li>
                    <li className="flex items-center gap-3 p-2 text-[#333] hover:text-black hover:bg-gray-200 border border-transparent hover:border hover:border-gray-200 cursor-pointer transform transition-all duration-200">
                        <MdOutlineLeaderboard />
                        <Link to="/in/leaderboard">LeaderBoard</Link>
                    </li>
                    <li className="flex items-center gap-3 p-2 text-[#333] hover:text-black hover:bg-gray-200 border border-transparent hover:border hover:border-gray-200 cursor-pointer transform transition-all duration-200">
                        <IoNotificationsOutline />
                        <Link to="/in/notifications">Notification</Link>
                    </li>
                    <li className="flex items-center gap-3 p-2 text-[#333] hover:text-black hover:bg-gray-200 border border-transparent hover:border hover:border-gray-200 cursor-pointer transform transition-all duration-200">
                        <IoSettingsOutline />
                        <Link to="/in/settings">Settings</Link>
                    </li>
                    <li className="flex items-center gap-3 p-2 text-[#333] hover:text-black hover:bg-gray-200 border border-transparent hover:border hover:border-gray-200 cursor-pointer transform transition-all duration-200">
                        <IoSettingsOutline />
                        <Link to="/in/detail">Detail</Link>
                    </li>
                
                </ul>
                <ul>
                    <li onClick={() => dispatch(logoutUser())} className="flex items-center gap-3 p-2 text-[#333] hover:text-black hover:bg-gray-200 border border-transparent hover:border hover:border-gray-200 cursor-pointer transform transition-all duration-200">
                        <IoLogOutOutline />
                        <Link to="/login">Logout</Link>
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default Sidebar;