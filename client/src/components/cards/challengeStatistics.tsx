import ButtonLoading from "../loading/buttonLoading.tsx";
import {IoStatsChartOutline} from "react-icons/io5";
import {calculateDaysLeft, getFormattedDate} from "../../utils/helper.ts";
import {IChallenge} from "../../interfaces/IChallenge.ts";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import { FaRegWindowClose } from "react-icons/fa";


export const ChallengeStatistics = ({ selectedChallenge, setShowStatistics }: { selectedChallenge: IChallenge | null, setShowStatistics:(value: boolean) => void }) => {
    const {loading} = useAppSelector((state) => state.challenges);
    return (
        <div className="grid fixed top-0 left-0 w-full h-full place-items-center bg-gray-800/50 z-20">
            <div className="bg-[#eee] p-5 grid gap-3">
                <div className="flex justify-end">
                    <FaRegWindowClose className="text-3xl cursor-pointer" onClick={() => setShowStatistics(false)}/>
                </div>
                <div className="countdown flex flex-col items-center justify-center p-3 gap-2">
                    <h1 className="font-bold text-4xl bg-red-400 text-white px-3 flex gap-2 items-center rounded-lg shadow-md"><span className="border-r border-gray-300 pr-3">{calculateDaysLeft(selectedChallenge?.startDate??new Date(), selectedChallenge?.endDate??new Date())}</span> <span className="p-1 flex flex-col"><span className="text-2xl">Days</span><span className="text-sm">Left</span></span></h1>
                </div>
                <div className="flex flex-wrap justify-center gap-1 items-center">
                    <p className="py-1 px-3 bg-white border border-gray-300 rounded-full text-[12px]">{selectedChallenge?.categorie}</p>
                    <p className="py-1 px-3 bg-white border border-gray-300 rounded-full text-[12px]">{selectedChallenge?.duration} days</p>
                    <p className="py-1 px-3 bg-white border border-gray-300 rounded-full text-[12px]">{getFormattedDate(selectedChallenge?.startDate??new Date())} - {getFormattedDate(selectedChallenge?.endDate??new Date())}</p>
                </div>
                <div className="statistics grid gap-2">
                    <h2 className="font-bold flex items-center gap-1 text-2xl"><IoStatsChartOutline/>Statistics</h2>
                    {loading?<div className=' grid place-items-center py-5'><ButtonLoading/></div>:
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col items-center py-4 p-1 bg-white shadow-sm border border-gray-300">
                            <h2 className="font-bold text-4xl">{selectedChallenge?.totalParticipants}</h2>
                            <p>Participants</p>
                        </div>
                        <div className="flex flex-col items-center py-4 p-1 bg-white shadow-sm border border-gray-300">
                            <h2 className="font-bold text-4xl">{selectedChallenge?.participantsOnTrack}</h2>
                            <p>On The Right Track</p>
                        </div>
                        <div className="flex flex-col items-center py-4 p-1 bg-white shadow-sm border border-gray-300">
                            <h2 className="font-bold text-4xl">{selectedChallenge?.participantsBehind}</h2>
                            <p>Need To Catch Up</p>
                        </div>
                        <div className="flex flex-col items-center py-4 p-1 bg-white shadow-sm border border-gray-300">
                            <h2 className="font-bold text-4xl">{selectedChallenge?.participantsLeft}</h2>
                            <p>Left</p>
                        </div>
                    </div>}
                </div>
            </div>
    </div>
    );
};
