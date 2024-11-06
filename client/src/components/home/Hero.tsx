import React from "react";
import HeroCard from "./HeroCards.tsx";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
    return (
        <section className="font-Montserrat h-[calc(100vh-4rem)] hero overflow-hidden grid justify-center relative z-10
        before:bg-gradient-to-r from-orange-500 to-blue-700 before:absolute before:inset-0 before:opacity-50 before:backdrop-blur-lg before:filter before:blur-lg before:z-[-1] before:overflow-hidden before:w-[70%] before:mx-auto before:h-[50%] before:rounded-full before:animate-pulse
        ">
            <div className="hero-content overflow-hidden w-[100vw] bg-white/30 backdrop-blur-lg">
                <div className={'flex flex-col items-center gap-2 pt-3 md:pt-8 lg:pt-8'}>
                    <h1 className="hero-title text-2xl md:text-4xl lg:text-6xl font-bold text-center"> Discover New
                        Challenges<br/>and
                        Achieve Greatness </h1>
                    <p className="hero-text text-center text-gray-500">Join the global platform where you can challenge
                        yourself, compete, and grow. </p>
                    <Link to={'/register'}
                        className="btn cursor-pointer relative z-50 hover:bg-blue-300 btn-primary py-2 px-4 bg-blue-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Join
                        Now
                    </Link>
                </div>
                <div
                    className={'challenge-card-lists absolute overflow-hidden bottom-0 right-0 left-0 flex  justify-center gap-2'}>
                    <HeroCard
                        title={"Creative Art"}
                        bgColor={"bg-gradient-to-r from-red-700 to-yellow-500"}
                        customClasses={"-right-32 -rotate-12 text-white flex-1 -bottom-44 rounded-3xl animate-slideup duration-200"}
                    />

                    <HeroCard
                        title={"Fitness"}
                        bgColor={"bg-gradient-to-r from-red-700 to-violet-500"}
                        customClasses={"-right-16 -rotate-6 bg-sky-400 text-white flex-1 -bottom-24 rounded-3xl animate-slideup duration-400"}
                    />

                    <HeroCard
                        title={"Coding"}
                        bgColor={"bg-gradient-to-r from-yellow-400 to-pink-500"}
                        customClasses={" bg-green-500 text-white flex-1 -bottom-4  rounded-tl-3xl rounded-tr-3xl z-20 animate-slideup duration-0"}
                    />

                    <HeroCard
                        title={"Coding"}
                        bgColor={"bg-gradient-to-r from-sky-400 to-orange-500"}
                        customClasses={"z-10 flex-1 right-16 rotate-6 -bottom-24 rounded-3xl animate-slideup duration-800"}
                        textStyle={"bg-red-500 self-end items-end"}
                    />

                    <HeroCard
                        title={"Reading"}
                        bgColor={"bg-gradient-to-r from-green-400 to-red-500"}
                        customClasses={"right-32 rotate-12 text-white flex-1 -bottom-44 rounded-3xl animate-slideup duration-1000"}
                        textStyle={"items-end"}
                    />

                </div>
            </div>
        </section>
    );
};


export default Hero;
