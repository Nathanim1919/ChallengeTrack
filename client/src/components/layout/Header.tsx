import React from "react";
import {Link} from "react-router-dom";
import {IoMdMenu} from "react-icons/io";
import {IoMdClose} from "react-icons/io";


const Header: React.FC = () => {
    return (   
        <header className={'font-Montserrat w-[90%]  m-auto px-3 flex justify-between md:items-center md:sticky top-0 z-50'}>
            <div className={'navbar-logo lg:w-full'}>
                <Link to={'/'}>Logo</Link>
            </div>
            <nav
                className={'absolute md:relative justify-around md:justify-between items-center flex z-30 flex-col md:flex-row text-black py-3 w-screen gap-2'}>
                <div className={'flex justify-around md:hidden w-full'}>
                    <Link to={'/'}>Logo</Link>
                    <IoMdClose className={'cursor-pointer text-3xl'}/>
                </div>
                <div className={"flex border border-gray-200 flex-col md:flex-row justify-end bg-gray-100 rounded-full px-5 items-center w-ful gap-5"}>
                    <ul className={'flex flex-col md:flex-row w-ful py-2 px-3 gap-5 text-[#333] font-bold'}>
                        <Link  className={"grid items-center py-1 px-3 transform transition-all duration-500 rounded-full hover:bg-[#333] hover:text-white"} to={'/'}>Home</Link>
                        <Link className={"grid items-center py-1 px-3 transform transition-all duration-500 rounded-full hover:bg-[#333] hover:text-white"} to={'/features'}>Features</Link>
                        <Link className={"grid items-center py-1 px-3 transform transition-all duration-500 rounded-full hover:bg-[#333] hover:text-white"} to={'/about'}>About</Link>
                        <Link className={"grid items-center py-1 px-3 transform transition-all duration-500 rounded-full hover:bg-[#333] hover:text-white"} to={'/contact'}>Contact</Link>
                    </ul>
                    <div className={'navbar-actions flex items-center justify-center gap-3 w-full'}>
                        <Link to={"/login"} className={'btn btn-primary py-1 px-3 text-[#333] font-bold'}>Sign In
                        </Link>
                        <Link to={'/register'} className={'btn btn-secondary bg-black font-bold text-white rounded-full py-1 px-3'}>Sign Up</Link>
                    </div>
                </div>
            </nav>
            <div className={'md:hidden md:absolute'}>
                <IoMdMenu className={'cursor-pointer text-3xl'}/>
            </div>
        </header>
    )
};

export default Header;
