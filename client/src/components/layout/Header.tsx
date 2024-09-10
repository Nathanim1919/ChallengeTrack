import React from "react";
import {Link} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className={'w-full bg-gray-100 p-4'}>
            <nav className={'flex justify-around items-center'}>
                <div className={'navbar-logo'}>
                    <Link to={'/'}>Logo</Link>
                </div>
                <ul className={'navbar-Links flex justify-between items-center gap-8'}>
                    <i><Link to={'/'}>Home</Link></i>gitttt
                    <i><Link to={'/features'}>Features</Link></i>
                    <i><Link to={'/about'}>About</Link></i>
                    <i><Link to={'/contact'}>Contact</Link></i>
                </ul>
                <div className={'navbar-actions'}>
                    <button className={'btn btn-primary'}>Sign In</button>
                    <button className={'btn btn-secondary'}>Sign Up</button>
                </div>
            </nav>
        </header>
    )
};

export default Header;
