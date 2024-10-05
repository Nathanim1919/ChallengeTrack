import React from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { getAllChallenges } from "../../features/challenges/challengesActions";
import AuthChallengeCard from "../../components/cards/AuthChallengeCard";

const MyChallenges = () => {
    const dispatch = useAppDispatch();
    const {challenges} = useAppSelector((state) => state.challenges);
    console.log(challenges);

    React.useEffect(() => {
        dispatch(getAllChallenges());
    }, [dispatch]);


    return (
        <div className="w-[90%] mx-auto py-5">
            <h1 className="py-4 font-bold text-2xl">My Challenges</h1>
            <div className="grid grid-cols-4 gap-2">
                {challenges?.map((challenge, index) => (
                   <AuthChallengeCard key={index} challenge={challenge}/>
                ))}
            </div>
        </div>
    )
};


export default MyChallenges;