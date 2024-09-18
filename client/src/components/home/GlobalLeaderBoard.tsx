import React from 'react';
import NumberOne from '../../assets/n1.png';
import NumberTwo from '../../assets/n2.png';
import NumberThree from '../../assets/n3.png';
import { GiTwoCoins } from "react-icons/gi";
import BGImage from '../../assets/bg1.png';
import AvatorImage from '../../assets/heroImages/avator.jpg';

const GlobalLeaderBoard=  () => {
    return (
        <div className={'grid grid-cols-1 relative z-10 md:grid-cols-[.2fr_.8fr] justify-center my-10 mx-auto bg-gray-900 pt-10 md:pt-32 overflow-hidden relative'}>
            <img src={BGImage as string} alt="BG1" className="w-1/2  bg1-image hidden md:block absolute opacity-10"/>
            <div className={'ml-10'}>
                <h1 className={"font-bold text-3xl md:text-6xl text-white"}>Global Leaderboard</h1>
                <p className={'text-gray-100'}>
                    Compete with users from around the world and climb your way to the top of the leaderboard.
                </p>
                <button className={'bg-sky-400 text-white px-5 py-2 rounded-md mt-5'}>View Leaderboard</button>
            </div>
            <div className={'grid grid-cols-3 m-auto gap-1 mt-24  md:mt-0'}>
                <div className={'flex flex-col items-center'}>
                    {/*<h1 className={'font-bold text-6xl'}>3</h1>*/}
                    <img src={NumberThree as string} alt={'NumberThree'} className={'w-10 md:w-32'}/>
                    <div className={'image w-[80px] h-[80px] md:w-[150px] md:h-[150px] border-8 border-white bg-sky-400 rounded-full'}>
                        <img src={AvatorImage as string} className={"w-full h-full rounded-full"}/>
                    </div>
                    <div className={'flex flex-col justify-center items-center mt-1'}>
                        <h1 className={"text-white font-bold text-2xl"}>John Doe</h1>
                        <h1 className={'flex justify-center items-center text-1xl md:text-2xl text-orange-300 gap-1'}><GiTwoCoins/>+1000 points</h1>
                    </div>
                </div>
                <div className={'flex flex-col items-center relative -top-24 md:-top-32'}>
                    {/*<h1 className={'font-bold text-6xl'}>1</h1>*/}
                    <img src={NumberOne as string} alt={'NumberThree'} className={'w-20 md:w-40'}/>
                    <div
                        className={'image w-[100px] h-[100px] md:w-[230px] md:h-[230px] border-8 border-white bg-sky-400 rounded-full'}>
                        <img src={AvatorImage as string} className={"w-full h-full rounded-full"}/>
                    </div>
                    <div className={'flex flex-col justify-center items-center mt-1'}>
                        <h1 className={"text-white font-bold text-2xl"}>Jane Doe</h1>
                        <h1 className={'flex justify-center items-center text-1xl md:text-2xl text-orange-300 gap-1'}><GiTwoCoins/>+3000 points</h1>
                    </div>
                </div>

                <div className={'flex flex-col items-center'}>
                    {/*<h1 className={'font-bold text-6xl'}>2</h1>*/}
                    <img src={NumberTwo as string} alt={'NumberThree'} className={'w-10 md:w-32'}/>
                    <div
                        className={'image w-[80px] h-[80px] md:w-[170px] border-8 border-white md:h-[170px] bg-sky-400 rounded-full'}>
                        <img src={AvatorImage as string} className={"w-full h-full rounded-full"}/>
                    </div>
                    <div className={'flex flex-col justify-center items-center mt-1'}>
                        <h1 className={"text-white font-bold text-2xl"}>Alice Smith</h1>
                        <h1 className={'flex justify-center items-center text-1xl md:text-2xl text-orange-300 gap-1'}><GiTwoCoins/>+2000 points</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default GlobalLeaderBoard;
