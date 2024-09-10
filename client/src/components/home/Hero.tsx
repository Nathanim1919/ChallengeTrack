import React from "react";

const Hero: React.FC = () => {
    return (
        <section style={{height: 'calc(100vh - 4rem)'}} className="hero overflow-hidden grid justify-center">
            <div className="hero-content overflow-hidden">
                <div className={'flex flex-col items-center gap-2 pt-10'}>
                    <h1 className="hero-title text-7xl font-bold text-center"> Level Up Your Challenges<br/>and Achievements  </h1>
                    <p className="hero-text text-center text-gray-500">Join the global platform where you can
                         challenge yourself, compete, and grow. </p>
                    <button className="btn btn-primary px-3 py-2 bg-blue-500 text-white">Join Now</button>
                </div>
                <div className={'challenge-card-lists absolute border-2 border-white overflow-hidden bottom-0 right-0 left-0 flex  justify-center gap-2'}>
                    <div
                        className={'flex flex-col items-center h-[370px] relative -right-32 -rotate-12 bg-orange-400 text-white flex-1 -bottom-32 rounded-3xl'}>
                        <div className={'relative w-[250px] -top-20 m-0'}>
                            <img
                                src="https://cdn3d.iconscout.com/3d/premium/thumb/nft-art-3d-icon-download-in-png-blend-fbx-gltf-file-formats--crypto-creation-color-palette-ethereum-logo-pack-cryptocurrency-icons-3664061.png?f=webp"
                                alt="Challenge 1"/>
                        </div>
                        <div className={"flex flex-col items-center relative -top-10"}>
                            <h3 className={"m-0 text-black font-bold text-3xl"}>Learning<br/> Challenges</h3>
                            <p className={'m-0'}>Learn new skills and get certified</p>
                        </div>
                    </div>
                    <div
                        className={'flex flex-col items-center border-4 border-white h-[370px] shadow-lg relative -right-16 -rotate-6 bg-sky-400 text-white flex-1 -bottom-10 rounded-3xl'}>
                        <div className={'relative w-[250px] -top-10'}>
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/028/720/484/non_2x/sports-subject-school-3d-ai-generative-free-png.png"
                                alt="Challenge 1"/>
                        </div>
                        <div className={"flex flex-col items-center relative -top-10"}>
                            <h3 className={"m-0 text-black font-bold text-3xl"}>Learning<br/> Challenges</h3>
                            <p className={'m-0'}>Learn new skills and get certified</p>
                        </div>
                    </div>

                    <div
                        className={'flex flex-col items-center border-4 border-white h-[370px] shadow-lg z-20 relative bg-green-500 text-white flex-1 rounded-tl-3xl rounded-tr-3xl'}>
                        <div className={'m-0 relative w-[250px] -top-5'}>
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/009/456/579/non_2x/3d-illustration-hand-and-code-png.png"
                                alt="Challenge 1"/>
                        </div>
                        <div className={"flex flex-col items-center relative -top-10"}>
                            <h3 className={"m-0 text-black font-bold text-3xl"}>Learning<br/> Challenges</h3>
                            <p className={'m-0'}>Learn new skills and get certified</p>
                        </div>
                    </div>
                    <div
                        className={'flex flex-col items-center border-4 border-white h-[370px] relative bg-blue-700 text-white z-10 flex-1 right-16 rotate-6 -bottom-10 rounded-3xl'}>
                        <div className={'relative w-[250px] -top-5'}>
                            <img
                                src="https://cdn3d.iconscout.com/3d/premium/thumb/man-reading-book-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--reader-holding-exam-prepration-business-startup-pack-professionals-illustrations-3916844.png"
                                alt="Challenge 1"/>
                        </div>
                        <div className={"flex flex-col items-center relative -top-10"}>
                            <h3 className={"m-0 text-black font-bold text-3xl"}>Learning<br/> Challenges</h3>
                            <p className={'m-0'}>Learn new skills and get certified</p>
                        </div>
                    </div>
                    <div
                        className={'flex flex-col items-center h-[370px] relative bg-red-700 text-white flex-1 right-32 rotate-12 -bottom-32 rounded-3xl'}>
                        <div className={'relative w-[250px] -top-5'}>
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/028/720/484/non_2x/sports-subject-school-3d-ai-generative-free-png.png"
                                alt="Challenge 1"/>
                        </div>
                        <div className={"flex flex-col items-center relative -top-10"}>
                            <h3 className={"m-0 text-black font-bold text-3xl"}>Learning<br/> Challenges</h3>
                            <p className={'m-0'}>Learn new skills and get certified</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Hero;
