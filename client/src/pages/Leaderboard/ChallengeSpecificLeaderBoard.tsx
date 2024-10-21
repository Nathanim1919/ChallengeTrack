import React, { useEffect } from "react";
import { GiTwoCoins } from "react-icons/gi";
import { MdOutlineLeaderboard } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import AvatorImage from "../../assets/heroImages/avator.jpg";
import { IChallenge } from "../../interfaces/IChallenge";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { getLeaderBoardByChallengeId } from "../../features/leaderboard/leaderboardAction";
import ButtonLoading from "../../components/loading/buttonLoading";
import { SlOptionsVertical } from "react-icons/sl";
import { MdAdsClick } from "react-icons/md";
import {ChallengeStatistics} from "../../components/cards/challengeStatistics.tsx";
import {ConfirmModal} from "../../components/modals/ConfirmModal.tsx"
import { leaveChallenge } from "../../features/challenges/challengesActions.ts";
import {useNavigate} from "react-router-dom";




const ChallengeSpecificLeaderBoard:React.FC<{challenge: IChallenge | null}> = ({challenge}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {loading, leaderboard} = useAppSelector((state) => state.leaderboard);
    const {isOwner, isParticipant} = useAppSelector((state) => state.challenges);
    const [showOptions, setShowOptions] = React.useState(false);

    // open the options
    const [showStatistics, setShowStatistics] = React.useState(false);
    // const [showParticipants, setShowParticipants] = React.useState(false);
    // const [showLeaderboard, setShowLeaderboard] = React.useState(false);
    // const [showSimilarChallenges, setShowSimilarChallenges] = React.useState(false);
    // const [showInviteFriends, setShowInviteFriends] = React.useState(false);
    // const [showDeleteChallenge, setShowDeleteChallenge] = React.useState(false);
    // const [showEditChallenge, setShowEditChallenge] = React.useState(false);
    const [showLeaveChallenge, setShowLeaveChallenge] = React.useState(false);


    useEffect(() => {
        if (challenge?._id) {
            dispatch(getLeaderBoardByChallengeId(challenge._id));
        }
    }, [challenge, dispatch]);

    return (
        <div className="leaderboard">
            {showStatistics && <ChallengeStatistics setShowStatistics={setShowStatistics} selectedChallenge={challenge}/>}
            {
                showLeaveChallenge && <ConfirmModal title="Leave Challenge" message="Are you sure you want to leave this challenge?" onClose={() => setShowLeaveChallenge(false)} onConfirm={() => {dispatch(leaveChallenge(challenge?._id));setShowLeaveChallenge(false);navigate("/in")}}/>
            }
            <div className="leaderboard-header bg-[#fff] text-black grid p-5 gap-3 relative">
                <div>
                    <h1 className="text-3xl font-bold">{challenge?.title}</h1>
                    <p className="challengeDescription">
                       {challenge?.description}
                    </p>
                </div>
                <div className="flex items-center gap-2 text-black">
                    <div className="w-10 h-10 rounded-full bg-gray-300">
                        <img src={AvatorImage as string} alt="avator" className="w-full h-full object-cover rounded-full"/>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-bold m-0">Nathanim Tadele</h2>
                        <p className="flex items-center gap-1 m-0">Rank: <MdOutlineLeaderboard/>1st</p>
                    </div>
                </div>
                {isParticipant&&<div className={"p-2"}>
                    <div onClick={() => setShowOptions(!showOptions)}
                        className="flex items-center gap-3 absolute right-2 p-2 bg-gray-200 hover:bg-gray-100  rounded-full top-2">
                        <SlOptionsVertical className="text-1xl cursor-pointer"/>
                    </div>
                    <div
                        className={`options 
                        ${showOptions ? 'block' : 'hidden'}
                        bg-white w-[200px] text-[13px] absolute z-10 shadow-lg  top-10 rounded-sm right-10 text-black`}>
                       {!isOwner && <div onClick={() => setShowLeaveChallenge(true)}
                            className="options-item flex items-center gap-2 cursor-pointer hover:bg-gray-200 border-b border-gray-200 p-2">
                            <MdAdsClick/>
                            <p className="m-0">Leave Challenge</p>
                        </div>}
                        {isOwner && <div
                            className={"options-item flex items-center gap-2 cursor-pointer hover:bg-gray-200 border-b border-gray-200 p-2"}>
                            <MdAdsClick/>
                            <p className="m-0">Delete Challenge</p>
                        </div>}
                        {isOwner && <div
                            className={"options-item flex items-center gap-2 cursor-pointer hover:bg-gray-200 border-b border-gray-200 p-2"}>
                            <MdAdsClick/>
                            <p className="m-0">Edit Challenge</p>
                        </div>}
                        <div
                            className={"options-item flex items-center gap-2 cursor-pointer hover:bg-gray-200 border-b border-gray-200 p-2"}>
                            <MdAdsClick/>
                            <p className="m-0">Invite Friends</p>
                        </div>
                        <div
                            className={"options-item flex items-center gap-2 cursor-pointer hover:bg-gray-200 border-b border-gray-200 p-2"}>
                            <MdAdsClick/>
                            <p className="m-0">View Participants</p>
                        </div>
                        <div
                            className={"options-item flex items-center gap-2 cursor-pointer hover:bg-gray-200 border-b border-gray-200 p-2"}>
                            <MdAdsClick/>
                            <p className="m-0">View Leaderboard</p>
                        </div>
                        <div
                            onClick={() => {
                                setShowStatistics(!showStatistics);
                                setShowOptions(false);
                            }}
                            className={"options-item flex items-center gap-2 cursor-pointer hover:bg-gray-200 border-b border-gray-200 p-2"}>
                            <MdAdsClick/>
                            <p className="m-0">View Statistics</p>
                        </div>
                        <div
                            className={"options-item flex items-center gap-2 cursor-pointer hover:bg-gray-200 border-b border-gray-200 p-2"}>
                            <MdAdsClick/>
                            <p className="m-0">View Similar Challenges</p>
                        </div>
                    </div>
                </div>}
            </div>
            <div className="leaderboard-list">
                <div className="leaderboard-list-body bg-[#f4f2f2] h-[75vh] overflow-y-auto">
                    {loading ? <div className=' grid place-items-center py-5'><ButtonLoading/></div>:
                    <div className="grid p-1">
                        {
                        leaderboard?.rankings?.map((user, index) => (
                            <div key={index} className="leaderboard-list-item p-3 grid grid-cols-4 gap-3 cursor-pointer border border-gray-300 bg-white">
                                <div className="flex items-center gap-5">
                                    <div className="w-8 h-8 bg-black font-bold rounded-md grid items-center justify-center text-white">
                                        <h3 className="m-0">{index + 1}</h3>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-gray-200">
                                                <img src={AvatorImage} alt="avator" className="w-full h-full object-cover rounded-full"/>
                                            </div>
                                            <h2 className="m-0 font-bold">{user.userId.username}</h2>
                                        </div>

                                        <p className="m-0 flex items-center gap-1">Rank: <MdOutlineLeaderboard/></p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1 text-orange-500 font-bold">
                                    <GiTwoCoins/>
                                    <p className="m-0">{user.score}</p>
                                </div>

                                <div className="flex items-center gap-1">
                                    <div className="w-24 h-2 relative bg-gray-300">
                                        <div className="absolute h-full bg-black w-[60%]"></div>
                                    </div>
                                    <p className="m-0">60%</p>
                                </div>

                                <div className="flex items-center gap-1">
                                    <FaRegCheckCircle/>
                                    <p className="m-0">5/13</p>
                                </div>
                            </div>
                        ))
                    }
                        </div>
                    }
                
                </div>
            </div>
        </div>
    )
};


export default ChallengeSpecificLeaderBoard;
