import React, {useEffect, useState} from 'react'
import AvatorImage from '../../assets/heroImages/avator.jpg'
import { MdJoinFull } from "react-icons/md";
import { GiTwoCoins } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";
import { TbProgressBolt } from "react-icons/tb";
import AuthChallengeCard from '../../components/cards/AuthChallengeCard';
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";
import {getAllChallenges} from "../../features/challenges/challengesActions.ts";





const LatestChalleges = () => {

    const {challenges, loading} = useAppSelector(state => state.challenges)
    const dispatch = useAppDispatch()
    const [page, setPage] = useState(1);
    const limit = 3;

    useEffect(() => {
        dispatch(getAllChallenges({page, limit}))
    },[dispatch, page])

    const handleSeeMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <div className="popular-categories grid w-[95%] mx-auto">
            <h2 className='font-bold sticky top-10 bg-white z-20 py-5'>Latest Challenges</h2>
            <div className="categories grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
               {
                     challenges.map((challenge, index) => (
                        <AuthChallengeCard key={index} challenge={challenge}/>
                     ))
               }
            </div>
            <div className='w-full grid items-center justify-center my-5'>
                <button onClick={handleSeeMore} disabled={loading} className='py-1 px-3 bg-black text-white rounded-sm hover:bg-gray-600 cursor-pointer'>See More</button>
               </div>
        </div>
    );
};


export default LatestChalleges;
