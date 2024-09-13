// src/components/layout/Footer.tsx
import React from 'react';
import {FaFacebookSquare, FaYoutube} from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {Link} from "react-router-dom";
import { CiSquareCheck } from "react-icons/ci";
import BGImage from "../../assets/bg1.png"



const Footer: React.FC = () => {
    return (
        <footer
            className="footer overflow-hidden bg-gray-900 text-white grid grid-cols-1 items-center justify-between py-10 relative">
            <img src={BGImage as string} alt="BG1" className="w-1/3 -left-10 -top-10 bg1-image hidden md:block absolute opacity-5"/>
            <img src={BGImage as string} alt="BG1" className="w-1/5 -right-10 -bottom-10 bg1-image hidden md:block absolute opacity-5"/>
            <div className="footer-logo flex items-center justify-center">
                <Link to={'/'}>Logo</Link>
            </div>
            <div className="footer-content grid grid-cols-1 gap-2 md:grid-cols-3 justify-between m-auto">
                <div className="footer-links flex flex-col ">
                    <a className={'flex items-center gap-2'} href="/privacy"><CiSquareCheck/>Privacy Policy</a>
                    <a className={'flex items-center gap-2'} href="/terms"><CiSquareCheck/>Terms of Service</a>
                    <a className={'flex items-center gap-2'} href="/contact"><CiSquareCheck/>Contact Us</a>
                    <a className={'flex items-center gap-2'} href="/about"><CiSquareCheck/>About Us</a>
                    <a className={'flex items-center gap-2'} href="/faq"><CiSquareCheck/>FAQ</a>
                </div>
                <div className="social-media">
                    <Link className={"flex items-center justify-start gap-2"}
                          to={'/'}><FaFacebookSquare/>Facebook</Link>
                    <Link className={"flex items-center justify-start gap-2"} to={'/'}><FaTwitterSquare/>Twitter</Link>
                    <Link className={"flex items-center justify-start gap-2"} to={'/'}><FaInstagram/>Instagram</Link>
                    <Link className={"flex items-center justify-start gap-2"} to={'/'}><FaLinkedin/>Linkedin</Link>
                    <Link className={"flex items-center justify-start gap-2"} to={'/'}><FaYoutube/>YouTube</Link>
                </div>
                <div className="footer-newsletter">
                    <h4>Subscribe to our newsletter</h4>
                    <form className={'bg-white text-gray-500 py-1 px-3'}>
                        <input type="email" placeholder="Enter your email"/>
                        <button type="submit" className={'bg-sky-500 text-white py-1 px-2'}>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className={'self-center grid items-center justify-center text-center p-6'}>
                <p className="footer-copyright">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
                <p className="footer-madeby">Made by Nathanim with love 2024</p>
            </div>

        </footer>
    );
};

export default Footer;
