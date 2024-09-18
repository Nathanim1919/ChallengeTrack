import React from "react";
import HeroCard from "./HeroCards.tsx";
import CodeImage from "../../assets/heroImages/code.png";
import FitnessImage from "../../assets/heroImages/sport.png";
import CreativeImage from "../../assets/heroImages/art.png";
import HeroImage from "../../assets/heroImages/hero1.png";
import Abstract from "../../assets/heroImages/hero3.png";
import ReadingImage from "../../assets/heroImages/book.png";

const Hero: React.FC = () => {
    return (
        <section className="font-Montserrat h-[calc(100vh-4rem)] hero overflow-hidden grid justify-center">
            <img src={Abstract as string} alt="Abstract" className="absolute w-[50vw] left-0 transform rotate-180 -top-1/2 opacity-100 object-cover"/>
            <img src={Abstract as string} alt="Abstract" className="absolute w-[50vw] right-0 opacity-30 object-cover"/>
            <div className="hero-content overflow-hidden">
                <div className={'flex flex-col items-center gap-2 pt-3 md:pt-8 lg:pt-16'}>
                    <h1 className="hero-title text-2xl md:text-4xl lg:text-6xl font-bold text-center"> Discover New
                        Challenges<br/>and
                        Achieve Greatness </h1>
                    <p className="hero-text text-center text-gray-500">Join the global platform where you can challenge
                        yourself, compete, and grow. </p>
                    <button
                        className="btn btn-primary py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Join
                        Now
                    </button>
                </div>
                <div
                    className={'challenge-card-lists absolute overflow-hidden bottom-0 right-0 left-0 flex  justify-center gap-2'}>
                    <HeroCard
                        imgSrc={CreativeImage}
                        title={"Creative Art"}
                        description={"Unleash your creativity through digital art and design projects."}
                        bgColor={"bg-orange-400"}
                        customClasses={"-right-32 -rotate-12 text-white flex-1 -bottom-32 rounded-3xl"}
                        childClasses={"relative w-[170px] -top-5"}
                    />

                    <HeroCard
                        imgSrc={FitnessImage}
                        title={"Fitness"}
                        description={"Test your limits with daily workout goals and sports activities."}
                        bgColor={"bg-red-700"}
                        customClasses={"-right-16 -rotate-6 bg-sky-400 text-white flex-1 -bottom-10 rounded-3xl"}
                        childClasses={"relative w-[250px] -top-10"}
                    />

                    <HeroCard
                        imgSrc={HeroImage}
                        title={"Coding"}
                        description={"Sharpen your coding skills by solving real-world problems."}
                        bgColor={"bg-gray-800"}
                        customClasses={" bg-green-500 text-white flex-1  rounded-tl-3xl rounded-tr-3xl z-20"}
                        childClasses={"m-0 relative w-[250px] -top-1"}
                    />

                    <HeroCard
                        imgSrc={CodeImage}
                        title={"Coding"}
                        description={"Sharpen your coding skills by solving real-world problems."}
                        bgColor={"bg-blue-700"}
                        customClasses={"z-10 flex-1 right-16 rotate-6 -bottom-10 rounded-3xl"}
                        childClasses={"relative w-[250px] -top-10"}
                    />

                    <HeroCard
                        imgSrc={ReadingImage}
                        title={"Reading"}
                        description={"Explore nature and complete fun outdoor activities."}
                        bgColor={"bg-red-700 "}
                        customClasses={"right-32 rotate-12 text-white flex-1 -bottom-32 rounded-3xl"}
                        childClasses={"relative w-[170px] -top-5"}
                    />

                </div>
            </div>
        </section>
    );
};


export default Hero;
