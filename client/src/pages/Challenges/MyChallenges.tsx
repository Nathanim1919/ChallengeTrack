import React from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import {getMyChallenges} from "../../features/challenges/challengesActions";
import MyChallengeCard from "../../components/cards/MyChallengeCard";
import ButtonLoading from "../../components/loading/buttonLoading";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";


const MyChallenges = () => {
    const dispatch = useAppDispatch();
    const {challenges, loading} = useAppSelector((state) => state.challenges);

    React.useEffect(() => {
        dispatch(getMyChallenges());
    }, [dispatch]);



    if (challenges.length < 1) {
        return (
            <div className="grid place-items-center pt-10">
                <div>
                    <h1 className="text-2xl font-bold">You have no challenges yet</h1>
                    <p className="text-gray-500">Create a challenge to get started</p>
                </div>
                <Link to={'/in/create-new'} className="bg-gray-900 hover:bg-gray-600 text-white py-2 px-4 rounded-md mt-4 flex items-center gap-2">Create Challenge<IoIosArrowForward/></Link>
            </div>
        );
    }



    return (
        <div className="w-[90%] h-[90vh] mx-auto overflow-auto">
            <h1 className="py-4 font-bold text-2xl sticky top-0 bg-white z-50">My Challenges</h1>
            {loading && <div className="grid place-items-center py-5"><ButtonLoading/></div>}
            <div className="flex flex-wrap gap-2 p-3 overflow-auto">
                {challenges?.map((challenge, index) => (
                   <MyChallengeCard key={index} challenge={challenge}/>
                ))}
            </div>
        </div>
    )
};


export default MyChallenges;
