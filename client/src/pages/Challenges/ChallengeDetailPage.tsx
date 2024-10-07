import React, { useEffect } from "react";
import ChallengeSpecificLeaderBoard from "../Leaderboard/ChallengeSpecificLeaderBoard";
import SimilarChallenges from "./SimilarChallenges";
import DailyLog from "./DailyLog";
import { IoStatsChartOutline } from "react-icons/io5";
import { getChallengeById } from "../../features/challenges/challengesActions";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";




const ChallengeDetailPage = () => {
    const dispatch = useAppDispatch();
    const {loading,selectedChallenge} = useAppSelector((state) => state.challenges);
    // const {user} = useAppSelector((state) => state.auth);
    const {challengeId} = useParams();

    useEffect(() => {
        dispatch(getChallengeById(challengeId!));
    }, [dispatch]);


    if(loading) {
        return <div>Loading...</div>
    }

    console.log("This is the specific challenge detail: ", selectedChallenge);

    return (
        <div className="grid grid-cols-[_.25fr_.45fr_.3fr]"> 
            <DailyLog />
            <ChallengeSpecificLeaderBoard challenge={selectedChallenge}/>
            <div className="grid grid-rows-2">
                <div className="bg-[#eee] p-2 grid gap-3">
                    <div className="countdown flex flex-col items-center justify-center p-3 gap-2">
                        <h1 className="font-bold text-4xl bg-red-400 text-white px-3 flex gap-2 items-center rounded-lg shadow-md"><span className="border-r border-gray-300 pr-3">23</span> <span className="p-1 flex flex-col"><span className="text-2xl">Days</span><span className="text-sm">Left</span></span></h1>
                    </div>
                    <div className="flex flex-wrap justify-center gap-1 items-center">
                        <p className="py-1 px-3 bg-white border border-gray-300 rounded-full text-[12px]">{selectedChallenge?.categorie}</p>
                        <p className="py-1 px-3 bg-white border border-gray-300 rounded-full text-[12px]">{selectedChallenge?.duration} days</p>
                        <p className="py-1 px-3 bg-white border border-gray-300 rounded-full text-[12px]">Mon Sep 30 2024 - Mon Oct 30 2024</p>
                    </div>
                    <div className="statistics grid gap-2">
                        <h2 className="font-bold flex items-center gap-1 text-2xl"><IoStatsChartOutline/>Statistics</h2>
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
                            <p>Leave</p>
                        </div>
                        </div>
                    </div>
                </div>
                <SimilarChallenges />
            </div>
           
        </div>
    );
};


export default ChallengeDetailPage;