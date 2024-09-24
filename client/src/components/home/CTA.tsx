import React from "react";
import CTAImage from "../../assets/cta.png";
import BG1Image from "../../assets/bg1.png";
import { Link } from "react-router-dom";

const CTA: React.FC = () => {
    return (
        <section className="relative z-10 cta bg-sky-500 text-white grid items-center justify-center overflow-hidden">
            <div className={"p-5 grid items-center justify-center grid-cols-1 md:grid-cols-2 w-[80%] m-auto"}>
                <div className={'w-[300px] md:w-[500px] relative'}>
                    <img src={CTAImage as string} alt="CTA" className="cta-image relative w-full h-full"/>
                </div>
                <div className="cta-content w-full flex flex-col gap-3 relative">
                    <img src={BG1Image as string} alt="BG1" className="w-full bg1-image hidden md:block absolute opacity-30"/>
                    <h2 className="cta-title font-bold text-2xl text-center md:text-4xl z-10">Achieve Your Goals, Stay Motivated, and Earn
                        Rewards</h2>
                    <p className="cta-text text-center z-10">
                        Join our community and start completing exciting challenges that boost your skills and
                        productivity.
                        Sign up for free and take the first step towards personal growth today.
                    </p>
                    <Link to={'/register'} className="btn grid items-center text-center rounded-full btn-primary bg-white text-gray-500 font-Montserrat px-3 py-2 z-10">Create Your
                        Free Account
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTA;
