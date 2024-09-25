import React from "react";
import { Link } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { BsCollection } from "react-icons/bs";




const Sidebar: React.FC = () => {
    return (
        <section className="sidebar bg-gray-100 border-r border-gray-200 relative bottom-0 h-screen top-0 left-0 flex flex-col gap-10">
            <div className="sidebar__logo flex items-center justify-center p-5">
                <img src="https://res.cloudinary.com/dk2ot4z6g/image/upload/v1629821545/Logo/Logo_2x
                _wvz1wz.png" alt="logo" />
            </div>
            <nav className="justify-self-end">
                <ul className="flex justify-center align-center flex-col gap-5">
                    <li className="flex items-center gap-3 p-2 text-[#333] hover:text-black hover:bg-white border border-transparent hover:border hover:border-gray-200 cursor-pointer transform transition-all duration-200">
                        <LuLayoutDashboard />
                       <Link to="/in/dashboard">Dashboard</Link>
                    </li>
                    <li className="flex items-center gap-3 p-2 text-[#333] hover:text-black hover:bg-white border border-transparent hover:border hover:border-gray-200 cursor-pointer transform transition-all duration-200">
                        <LuLayoutDashboard />
                       <Link to="/in/users">Users</Link>
                    </li>
                    <li className="flex items-center gap-3 p-2 text-[#333] hover:text-black hover:bg-white border border-transparent hover:border hover:border-gray-200 cursor-pointer transform transition-all duration-200">
                        <BsCollection />
                        <Link to="/in/challenges">Challenges</Link>
                    </li>
                    <li className="flex items-center gap-3 p-2 text-[#333] hover:text-black hover:bg-white border border-transparent hover:border hover:border-gray-200 cursor-pointer transform transition-all duration-200">
                        <IoNotificationsOutline />
                        <Link to="/in/notification">Notification</Link>
                    </li>
                    <li className="flex items-center gap-3 p-2 text-[#333] hover:text-black hover:bg-white border border-transparent hover:border hover:border-gray-200 cursor-pointer transform transition-all duration-200">
                        <IoSettingsOutline />
                        <Link to="/in/settings">Settings</Link>
                    </li>
                
                </ul>
            </nav>
        </section>
    );
}

export default Sidebar;