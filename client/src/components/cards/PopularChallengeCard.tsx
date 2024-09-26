import React from "react";
import AvattorImage from '../../assets/heroImages/avator.jpg'



const PopularChallengeCard = () => {
    return (
        <div className="grid items-center bg-gray-100 border border-gray-300 p-5 rounded-lg gap-2 bg-gradient-to-tr from-orange-200 to-orange-600 text-white">
        <div className="flex justify-between">
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-slate-300 rounded-lg"></div>
                <div className="flex flex-col">
                    <h3 className="font-bold m-0">30-Day No Procrastination Challenge</h3>
                    <p className="text-gray-200 m-0">Break the habit of procrastination..</p>
                </div>
            </div>
            <div>
                <p>PENDING</p>
            </div>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full">
                    <img src={AvattorImage} alt="avatorImage" className="w-full h-full rounded-full"/>
                </div>
                <div className="flex flex-col items-center">
                    <p className="m-0">Nathanim T</p>
                    <h3 className="m-0">3000 XP</h3>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <div className="flex relative items-center">
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 relative">
                        <img src={AvattorImage} alt="avatorImage" className="w-full h-full rounded-full"/>
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white right-3 bg-gray-300 relative">
                    <img src={AvattorImage} alt="avatorImage" className="w-full h-full rounded-full"/>
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white right-6 bg-gray-300 relative">
                    <img src={AvattorImage} alt="avatorImage" className="w-full h-full rounded-full"/>
                    </div>
                    <p className="relative right-3">+200</p>
                </div>
                <button>Join</button>
            </div>
        </div>
    </div>
    )
}



export default PopularChallengeCard;