import React, { useEffect } from "react";
import ChallengeSpecificLeaderBoard from "../Leaderboard/ChallengeSpecificLeaderBoard";
import SimilarChallenges from "./SimilarChallenges";
import DailyLog from "./DailyLog";
import {
  checkIfUserIsParticipant,
  checkIfUserIsOwner,
  getChallengeById,
} from "../../features/challenges/challengesActions";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";

const ChallengeDetailPage = () => {
  const dispatch = useAppDispatch();
  const {selectedChallenge } = useAppSelector(
    (state) => state.challenges
  );
  // const {user} = useAppSelector((state) => state.auth);
  const { challengeId } = useParams();

  useEffect(() => {
    dispatch(getChallengeById(challengeId!));
    dispatch(checkIfUserIsParticipant(challengeId!));
    dispatch(checkIfUserIsOwner(challengeId!));
  }, [dispatch, challengeId]);


  return (
    <div className="grid grid-cols-[_.3fr_.4fr_.3fr] m-auto">
      <SimilarChallenges />
      <ChallengeSpecificLeaderBoard challenge={selectedChallenge} />
      <div className={"grid"}>
        <DailyLog challengeId={challengeId??""} />
      </div>
    </div>
  );
};

export default ChallengeDetailPage;
