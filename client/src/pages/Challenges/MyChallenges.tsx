import React from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { getAllChallenges } from "../../features/challenges/challengesActions";
import MyChallengeCard from "../../components/cards/MyChallengeCard";

const MyChallenges = () => {
    const dispatch = useAppDispatch();
    const {challenges} = useAppSelector((state) => state.challenges);

    React.useEffect(() => {
        dispatch(getAllChallenges());
    }, [dispatch]);


    return (
        <div className="w-[90%] h-[90vh] mx-auto overflow-auto">
            <h1 className="py-4 font-bold text-2xl sticky top-0 bg-white z-50">My Challenges</h1>
            <div className="flex flex-wrap gap-2 p-3 overflow-auto">
                {challenges?.map((challenge, index) => (
                   <MyChallengeCard key={index} challenge={challenge}/>
                ))}
            </div>
        </div>
    )
};


export default MyChallenges;