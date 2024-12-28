import React, { useEffect } from "react";
import AvattorImage from "../../assets/heroImages/avator.jpg";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
  getPopularChallenge,
  joinChallenge,
} from "../../features/challenges/challengesActions";
import { Link, useNavigate } from "react-router-dom";

const PopularChallengeCard = () => {
  const { popularChallenges } = useAppSelector((state) => state.challenges);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPopularChallenge());
  }, []);

  const joinChallengeHandler = (challengeId: string) => {
    dispatch(joinChallenge(challengeId));
    navigate(`/in/challenges/${challengeId}`);
  };

  console.log("Popular challenges: ", popularChallenges);

  if (popularChallenges.length < 1) {
    return null;
  }

  return (
    <div className="rounded-lg gap-2 text-white  relative overflow-hidden border border-gray-300
    before:absolute before:top-0 before:right-0 before:w-[100%]  before:h-[100%]
    before:bg-gradient-to-r from-red-600 to-yellow-400
    ">
      <div className="grid items-center bg-black/10 backdrop-blur-lg p-5 gap-5">
        <h1 className="font-bold text-2xl">This week Popular Challenge</h1>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-slate-300 rounded-lg"></div>
            <div className="flex flex-col">
              <h3 className="font-bold m-0">{popularChallenges[0]?.title}</h3>
              <p className="text-gray-300 m-0 text-[14px]">
                {popularChallenges[0]?.description.slice(0, 30)}...
              </p>
            </div>
          </div>
          <div>
            <p className="font-bold">{popularChallenges[0]?.status}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full">
              <img
                src={AvattorImage}
                alt="avatorImage"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="flex flex-col items-center">
              <p className="m-0">{popularChallenges[0]?.createdBy?.name}</p>
              <h3 className="m-0">
                {popularChallenges[0]?.createdBy?.points} XP
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex relative items-center">
              <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 relative">
                <img
                  src={AvattorImage}
                  alt="avatorImage"
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white right-3 bg-gray-300 relative">
                <img
                  src={AvattorImage}
                  alt="avatorImage"
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white right-6 bg-gray-300 relative">
                <img
                  src={AvattorImage}
                  alt="avatorImage"
                  className="w-full h-full rounded-full"
                />
              </div>
              <p className="relative right-3">
                +{popularChallenges[0]?.participants.length}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="bg-gray-900 px-3 rounded-full cursor-pointer hover:bg-orange-200 font-bold"
                onClick={() => joinChallengeHandler(popularChallenges[0]._id)}
              >
                Join
              </button>
              <Link
                to={`/in/challenges/${popularChallenges[0]?._id}`}
                className="bg-white px-3 rounded-full cursor-pointer hover:bg-orange-200 text-black"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularChallengeCard;
