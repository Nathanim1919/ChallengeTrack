import React, {useEffect} from "react";
import ChallengeCard from "../../components/cards/ChallengeCard";
import Abstract from "../../assets/heroImages/hero3.png"
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";
import {getAllChallenges} from "../../features/challenges/challengesActions.ts";

const ChallengePage: React.FC = () => {
    const {challenges} = useAppSelector(state => state.challenges)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAllChallenges())
    },[])

    return (
        <div className={'relative z-10 grid items-center justify-center gap-5 py-10 m-auto  w-[90%]'}>
            <h1 className={"self-center font-bold text-4xl grid items-center justify-center py-3"}>Latest Challenges</h1>
            <div className={"flex justify-center  gap-8 flex-wrap "}>
                {challenges.map((challenge, index) => {
                    return (
                        <ChallengeCard key={index} challenge={challenge}/>
                    )
                })}
                <img src={Abstract as string} alt="Abstract" className="absolute w-[50vw] transform rotate-180 -bottom-16 left-0 opacity-80 object-cover"/>
            </div>
        </div>
    )
};


export default ChallengePage;
