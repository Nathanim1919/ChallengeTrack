import React from "react";
import {CiCalendarDate} from "react-icons/ci";
import AvatorImage from "../../assets/heroImages/avator.jpg";




interface ChallengeCardProps {
    challenge: {
        title: string;
        description: string;
        startDate: Date;
        endDate: Date;
        participants: string[];
        status: string;
    };
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({challenge}) => {
    return (
        <div key={challenge}
            className="max-w-[300px] relative z-10 py-3 h-[400px] bg-sky-500 grid grid-rows-1 justify-between rounded-2xl shadow-lg hover:shadow-md cursor-pointer hover:bg-blue-500">
            <div className={"bg-white px-3 border-sky-500 grid grid-rows-3 justify-between shadow-lg"}>
                <div className={"flex justify-between px-3 py-1 items-center gap-3.5"}>
                    <span
                        className={"text-green-400 text-[16px] flex items-center gap-1"}><CiCalendarDate/>{challenge.startDate.toISOString()}</span>
                    <span className={"text-sky-500 text-[16px]"}>{challenge.status}</span>
                </div>
                <div className={"flex flex-col items-center justify-center"}>
                    <h3 className={"font-bold text-2xl text-center"}>{challenge.title}</h3>
                        <div className={"flex items-center p-3 gap-2"}>
                            <div className={"h-[30px] w-[30px] bg-sky-400 rounded-full"}>
                                <img src={AvatorImage as string} alt="Avator" className={"w-full h-full rounded-full"}/>
                            </div>
                            <p>Nathan Tadele</p>
                        </div>
                    <p className={"text-center text-teal-700"}>{challenge.description}</p>
                </div>
                <div className={"flex relative px-3 justify-between items-center"}>
                    <div className={"relative flex justify-between items-center"}>
                        <div className={'relative flex items-center justify-center'}>
                            <div
                                className={'w-[30px] relative border-2 border-white h-[30px] bg-blue-500 rounded-full'}>
                                <img src={AvatorImage as string} alt="Avator" className={"w-full h-full rounded-full"}/>
                            </div>
                            <div
                                className={'w-[30px] right-4 h-[30px] border-2 border-white relative bg-blue-500 rounded-full'}>
                                <img src={AvatorImage as string} alt="Avator" className={"w-full h-full rounded-full"}/>
                            </div>
                            <div
                                className={'w-[30px] right-8 h-[30px] border-2 border-white relative bg-blue-500 rounded-full'}>
                                <img src={AvatorImage as string} alt="Avator" className={"w-full h-full rounded-full"}/>
                            </div>
                        </div>
                        <h3 className={"-ml-8"}>200+</h3>
                    </div>
                    <button
                        className={'border-2 border-green-200 px-4 text-green-400 rounded-md hover:border-sky-500 hover:text-sky-500'}>Join
                    </button>
                </div>
            </div>
        </div>
    );
}


export default ChallengeCard;
