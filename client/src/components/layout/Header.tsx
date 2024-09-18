import React from "react";
import {Link} from "react-router-dom";
import {IoMdMenu} from "react-icons/io";
import {IoMdClose} from "react-icons/io";


const Header: React.FC = () => {
    return (
        <header className={'font-Montserrat bg-white flex justify-around md:items-center md:sticky top-0 z-50'}>
            <div className={'navbar-logo lg:w-full'}>
                <Link to={'/'}>Logo</Link>
            </div>
            <nav
                className={'absolute md:relative justify-around md:justify-between bg-white items-center flex z-30 flex-col md:flex-row text-black py-3 w-screen gap-2'}>
                <div className={'flex justify-around md:hidden w-full'}>
                    <Link to={'/'}>Logo</Link>
                    <IoMdClose className={'cursor-pointer text-3xl'}/>
                </div>
                <div className={"flex flex-col md:flex-row justify-end items-center w-full"}>
                    <ul className={'flex flex-col md:flex-row w-full'}>
                        <Link className={"py-2 px-3"} to={'/'}>Home</Link>
                        <Link className={"py-2 px-3"} to={'/features'}>Features</Link>
                        <Link className={"py-2 px-3"} to={'/about'}>About</Link>
                        <Link className={"py-2 px-3"} to={'/contact'}>Contact</Link>
                    </ul>
                    <div className={'navbar-actions flex items-center justify-center gap-3 w-full'}>
                        <button className={'btn btn-primary py-1 px-3 bg-blue-500 text-white rounded-sm'}>Sign In
                        </button>
                        <button className={'btn btn-secondary'}>Sign Up</button>
                    </div>
                </div>
            </nav>
            <div className={'md:hidden md:absolute'}>
                <IoMdMenu/>
            </div>
        </header>
    )
};

export default Header;
