import React, {useEffect} from "react";
import ChallengeCard from "../../components/cards/ChallengeCard";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";
import {popularForUnsignedUser} from "../../features/challenges/challengesActions.ts";
import { IChallenge } from "../../interfaces/IChallenge.ts";

const ChallengePage: React.FC = () => {
    const {popularChallengesForUnsignedUser} = useAppSelector(state => state.challenges)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(popularForUnsignedUser())
    },[])


    console.log("Popular challenges: ",popularChallengesForUnsignedUser)

    return (
        <div className={'relative z-10 grid items-center justify-center gap-5 py-10 m-auto  w-[90%]'}>
            <h1 className={"self-center font-bold text-4xl grid items-center justify-center py-3"}>Latest Challenges</h1>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-5"}>
                {popularChallengesForUnsignedUser.map((challenge: IChallenge, index:number) => {
                    return (
                        <ChallengeCard key={index} challenge={challenge}/>
                    )
                })}
            </div>
        </div>
    )
};


export default ChallengePage;
