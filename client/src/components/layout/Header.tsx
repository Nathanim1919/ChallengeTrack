import React from "react";
import {Link} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className={'font-Montserrat w-full bg-white sticky top-0 p-4 h-[4rem'}>
            <nav className={'flex justify-around items-center'}>
                <div className={'navbar-logo'}>
                    <Link to={'/'}>Logo</Link>
                </div>
                <ul className={'navbar-Links flex justify-between items-center gap-8'}>
                    <i><Link to={'/'}>Home</Link></i>
                    <i><Link to={'/features'}>Features</Link></i>
                    <i><Link to={'/about'}>About</Link></i>
                    <i><Link to={'/contact'}>Contact</Link></i>
                </ul>
                <div className={'navbar-actions flex items-center justify-center gap-3'}>
                    <button className={'btn btn-primary py-1 px-3 bg-blue-500 text-white rounded-sm'}>Sign In</button>
                    <button className={'btn btn-secondary'}>Sign Up</button>
                </div>
            </nav>
        </header>
    )
};

export default Header;
