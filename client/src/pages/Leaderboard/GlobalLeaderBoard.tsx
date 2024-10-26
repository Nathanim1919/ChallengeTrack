import React, { useEffect, useState } from "react";
import { GiTwoCoins } from "react-icons/gi";
import { MdOutlineLeaderboard } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import AvatorImage from "../../assets/heroImages/avator.jpg";
import { getGlobalLeaderboard } from "../../features/leaderboard/leaderboardAction";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { IUser } from "../../interfaces/IUser";
import { IGlobalLeaderboard } from "../../interfaces/ILeaderBoard";
import ButtonLoading from "../../components/loading/buttonLoading";

const GlobalLeaderBoard = () => {
  const dispatch = useAppDispatch();
  const { globalLeaderboard, loading } = useAppSelector(
    (state) => state.leaderboard
  );
  const { user } = useAppSelector((state) => state.auth);
  const currentUserRank: IGlobalLeaderboard = globalLeaderboard.filter(
    (leaderBoard) => leaderBoard.userId._id === user?._id
  )[0];

  useEffect(() => {
    dispatch(getGlobalLeaderboard());
  }, [dispatch]);

  return (
    <div className="">
      <div className="bg-black sticky top-0 p-5 text-white grid items-center justify-center text-2xl overflow-hidden">
        <h1>Global-LeaderBoard</h1>
        <div className="w-24 h-24 bg-gray-800 absolute -top-12 left-24 rounded-full"></div>
      </div>
      {loading ? (
        <div className="grid place-items-center py-5">
          <ButtonLoading />
        </div>
      ) : (
        <div className="h-[85vh] overflow-y-auto py-3 flex flex-col gap-3">
          <div className="p-3 grid grid-cols-[_.3fr_.2fr_.2fr_.2fr_.1fr] mx-1 items-center bg-orange-200 shadow-lg border border-gray-400 text-black sticky top-0 rounded-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full">
                <img
                  src={AvatorImage}
                  alt="avator"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h2>{currentUserRank?.userId?.username}</h2>
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-orange-500">
                <GiTwoCoins />
                {currentUserRank?.totalPoints}
              </h3>
            </div>
            <div>
              <h3 className="flex items-center gap-1">
                <MdOutlineLeaderboard />
                {currentUserRank?.rank}th
              </h3>
            </div>
            <div>
              <h3 className="flex items-center gap-1 font-bold">
                <FaRegCheckCircle />
                3400 completed
              </h3>
            </div>
            <div>
              <h3 className="flex items-center gap-1 font-bold">
                <FaRegCheckCircle />
                You
              </h3>
            </div>
          </div>

          {globalLeaderboard.map((leaderBoard, index) => {
            if (currentUserRank?.userId?._id === leaderBoard?.userId?._id) {
              return null;
            }

            return (
              <div
                key={index}
                className="grid grid-cols-[_.3fr_.2fr_.2fr_.3fr] p-1 mx-4 items-center cursor-pointer border-b border-gray-200"
              >
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full">
                      <img
                        src={AvatorImage}
                        alt="avator"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h2>{leaderBoard.userId.username}</h2>
                  </div>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-orange-500">
                    <GiTwoCoins />
                    {leaderBoard.totalPoints}
                  </h3>
                </div>
                <div>
                  <h3 className="flex items-center gap-1">
                    <MdOutlineLeaderboard />
                    {leaderBoard.rank}
                  </h3>
                </div>
                <div>
                  <h3 className="flex items-center gap-1 text-black font-bold text-[13px]">
                    <FaRegCheckCircle />
                    3400 completed
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      )}
      ;
    </div>
  );
};

export default GlobalLeaderBoard;
