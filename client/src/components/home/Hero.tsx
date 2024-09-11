import React from "react";
import HeroCard from "./HeroCards.tsx";

const Hero: React.FC = () => {
    return (
        <section className="font-Montserrat h-[calc(100vh-4rem)] hero overflow-hidden grid justify-center">
            <div className="hero-content overflow-hidden">
                <div className={'flex flex-col items-center gap-2 pt-16'}>
                    <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold text-center"> Discover New Challenges<br/>and
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
                        imgSrc={"https://cdn3d.iconscout.com/3d/premium/thumb/nft-art-3d-icon-download-in-png-blend-fbx-gltf-file-formats--crypto-creation-color-palette-ethereum-logo-pack-cryptocurrency-icons-3664061.png?f=webp"}
                        title={"Creative Art"}
                        description={"Unleash your creativity through digital art and design projects."}
                        bgColor={"bg-orange-400"}
                        customClasses={"-right-32 -rotate-12 text-white flex-1 -bottom-32 rounded-3xl"}
                        childClasses={"relative w-[170px] -top-5"}
                    />

                    <HeroCard
                        imgSrc={"https://static.vecteezy.com/system/resources/previews/028/720/484/non_2x/sports-subject-school-3d-ai-generative-free-png.png"}
                        title={"Fitness"}
                        description={"Test your limits with daily workout goals and sports activities."}
                        bgColor={"bg-red-700"}
                        customClasses={"-right-16 -rotate-6 bg-sky-400 text-white flex-1 -bottom-10 rounded-3xl"}
                        childClasses={"relative w-[250px] -top-10"}
                    />

                    <HeroCard
                        imgSrc={"https://static.vecteezy.com/system/resources/previews/009/456/579/non_2x/3d-illustration-hand-and-code-png.png"}
                        title={"Coding"}
                        description={"Sharpen your coding skills by solving real-world problems."}
                        bgColor={"bg-green-500"}
                        customClasses={" bg-green-500 text-white flex-1  rounded-tl-3xl rounded-tr-3xl z-20"}
                        childClasses={"m-0 relative w-[250px] -top-5"}
                    />

                    <HeroCard
                        imgSrc={"https://cdn3d.iconscout.com/3d/premium/thumb/man-reading-book-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--reader-holding-exam-prepration-business-startup-pack-professionals-illustrations-3916844.png"}
                        title={"Public Speaking"}
                        description={"Build knowledge by reading books, articles, or technical papers."}
                        bgColor={"bg-blue-700"}
                        customClasses={"z-10 flex-1 right-16 rotate-6 -bottom-10 rounded-3xl"}
                        childClasses={"relative w-[250px] -top-10"}
                    />

                    <HeroCard
                        imgSrc={"https://static.vecteezy.com/system/resources/previews/028/720/484/non_2x/sports-subject-school-3d-ai-generative-free-png.png"}
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
