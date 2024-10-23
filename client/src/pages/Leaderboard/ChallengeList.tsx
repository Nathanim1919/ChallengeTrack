import React from "react";
import { MdOutlineLeaderboard } from "react-icons/md";
import { GiTwoCoins } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { BsCollection } from "react-icons/bs";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { getLeaderBoardByChallengeId } from "../../features/leaderboard/leaderboardAction";


interface ChallengeListProps {
    showGlobalLeaderBoard: boolean;
    setShowGlobalLeaderBoard: (value: boolean) => void;
}



const ChallengeList: React.FC<ChallengeListProps> = ({
    showGlobalLeaderBoard,
    setShowGlobalLeaderBoard,
}) => {
//   const challenges = [
//     {
//       name: "30-Day Fitness Challenge",
//       rank: "1st",
//     },
//     {
//       name: "Read 5 Books in a Month",
//       rank: "2nd",
//     },
//     {
//       name: "100 Days of Code",
//       rank: "3rd",
//     },
//     {
//       name: "Healthy Eating Challenge",
//       rank: "4th",
//     },
//     {
//       name: "Learn a New Language",
//       rank: "5th",
//     },
//     {
//       name: "Complete a Personal Project",
//       rank: "6th",
//     },
//     {
//       name: "Healthy Eating Challenge",
//       rank: "4th",
//     },
//     {
//       name: "Learn a New Language",
//       rank: "5th",
//     },
//     {
//       name: "Complete a Personal Project",
//       rank: "6th",
//     },
//     {
//       name: "30-Day Fitness Challenge",
//       rank: "1st",
//     },
//     {
//       name: "Read 5 Books in a Month",
//       rank: "2nd",
//     },
//     {
//       name: "100 Days of Code",
//       rank: "3rd",
//     },
//     {
//       name: "Healthy Eating Challenge",
//       rank: "4th",
//     },
//     {
//       name: "Learn a New Language",
//       rank: "5th",
//     },
//     {
//       name: "Complete a Personal Project",
//       rank: "6th",
//     },
//     {
//       name: "Healthy Eating Challenge",
//       rank: "4th",
//     },
//     {
//       name: "Learn a New Language",
//       rank: "5th",
//     },
//     {
//       name: "Complete a Personal Project",
//       rank: "6th",
//     },
//   ];
  const {challenges} = useAppSelector(state => state.challenges);
  const [activeChallenge, setActiveChallenge] = React.useState<string>("");
  const dispatch = useAppDispatch();

  const handleChallengeClick = (challengeId: string) => {
    setActiveChallenge(challengeId);
    dispatch(getLeaderBoardByChallengeId(challengeId));
  };

  return (
    <div className="p-3">
      <div className="flex items-center justify-between p-4 border-b border-gray-300 mb-2">
        <h1 className="font-bold">My Leader-Boards</h1>

        <form className="bg-white flex justify-between items-center p-1">
          <input
            placeholder="Search Challenge"
            className="border-0 outline-none"
            name="challenge"
            id="challenge"
          />
          <FaSearch />
        </form>
      </div>
      <div className="mb-5 grid gap-2">
        <h2 className="font-bold flex items-center gap-1 py-2"><FaEarthAfrica/>Global Leaderboard</h2>
        <div className={`${showGlobalLeaderBoard? "bg-gray-900 text-white hover:bg-gray-700":"bg-white hover:bg-gray-200"} p-3 border border-gray-200 shadow-sm cursor-pointer`} onClick={()=>{setShowGlobalLeaderBoard(true); setActiveChallenge("")}}>
          <h3 className="font-bold">Global Leader Board</h3>
          <p className="text-[14px]">Navigate to the global leader board</p>
        </div>
      </div>
      <div className="grid gap-1 overflow-auto h-[85vh]">
        <div>
          <h2 className="py-2 sticky top-0 bg-white flex items-center gap-1 font-bold"><BsCollection/>Challenge List</h2>
          {challenges.map((challenge, index) => (
            <div
              onClick={() => {handleChallengeClick(challenge._id);setShowGlobalLeaderBoard(false);}}
              key={index}
              className={`grid grid-cols-[_.5fr_.3fr_.2fr] justify-between py-2 px-1 cursor-pointer ${activeChallenge === challenge._id?"bg-gray-700 text-white hover:bg-gray-700":"bg-white hover:bg-gray-100"}`}
            >
              <div className="flex items-center gap-2 border-l-4 border-blue-400 px-2">
                {/* <div className="bg-blue-400 w-8 h-8 grid items-center justify-center text-2xl font-bold text-white">
                  <h3 className="">{index}</h3>
                </div> */}
                <div className="flex flex-col">
                  <h2 className="m-0 font-bold">{challenge.title}</h2>
                  <p className="m-0 text-gray-500">pending</p>
                </div>
              </div>
              <div className="text-orange-400">
                <h3 className="flex items-center gap-1">
                  <GiTwoCoins />
                  4050
                </h3>
              </div>
              <div>
                <h3 className="flex items-center gap-1">
                  <MdOutlineLeaderboard />
                  {/* {challenge.rank} */}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChallengeList;
