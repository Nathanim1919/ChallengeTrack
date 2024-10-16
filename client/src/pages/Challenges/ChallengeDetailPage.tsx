import React, { useEffect } from "react";
import ChallengeSpecificLeaderBoard from "../Leaderboard/ChallengeSpecificLeaderBoard";
import SimilarChallenges from "./SimilarChallenges";
import DailyLog from "./DailyLog";
import { checkIfUserIsParticipant, checkIfUserIsOwner, getChallengeById } from "../../features/challenges/challengesActions";
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
        dispatch(checkIfUserIsParticipant(challengeId!));
        dispatch(checkIfUserIsOwner(challengeId!));
    }, [dispatch]);

    if(loading) {
        return <div>Loading...</div>
    }

    return (
        <div className="grid grid-cols-[_.5fr_.5fr] w-[80%] m-auto">
            <ChallengeSpecificLeaderBoard challenge={selectedChallenge}/>
            <div className={"grid"}>
                <DailyLog/>
                <SimilarChallenges/>
            </div>
        </div>
    );
};


export default ChallengeDetailPage;
