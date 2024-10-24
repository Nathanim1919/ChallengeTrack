import React, { useEffect } from "react";
import { IoMdAdd } from "react-icons/io";
import AvatorImage from "../../assets/heroImages/avator.jpg";
import { LuExpand } from "react-icons/lu";
import DailyLogModal from "../../components/modals/DailyLogModal";
import DailyLogDetail from "../../components/modals/DailyLogDetail";
import { useAppSelector } from "../../hooks/useAppSelector";
import { MdOutlineJoinFull } from "react-icons/md";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getMyChallenges, joinChallenge } from "../../features/challenges/challengesActions";
import ButtonLoading from "../../components/loading/buttonLoading";
import { CustomeToast } from "../../components/ui/customeToast";
import {
  DetailedProgressBar,
  ProgressBar,
} from "../../components/ui/progressBar";
import {getChallengeUserLogs } from "../../features/logs/logActons";

const DailyLog = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [showAllLogDays, setShowAllLogDays] = React.useState(false);
  const { user } = useAppSelector((state) => state.auth);
  const { selectedChallenge, isParticipant, loading, message, error } =
    useAppSelector((state) => state.challenges);
  const { logs } = useAppSelector((state) => state.logs);

  const dispatch = useAppDispatch();
  const [showLogDetail, setShowLogDetail] = React.useState<{
    days?: number;
    details?: string;
    completed?: boolean;
  } | null>(null);
 

  useEffect(() => {
    dispatch(getChallengeUserLogs(selectedChallenge?._id ?? ""));
  }, [dispatch]);


  const handleJoinChallenge = () => {
    dispatch(joinChallenge(selectedChallenge?._id ?? ""));
    dispatch(getMyChallenges());
  };


  return (
    <div className="p-3 border-l border-gray-200 bg-white">
      <div className="creatorInfo flex gap-2 items-center border-b border-gray-300 p-3 relative">
        <div className="creatorInfo__avatarn w-12 h-12 bg-gray-200">
          <img
            src={AvatorImage as string}
            alt="avator"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="creatorInfo__details">
          <h3 className="font-bold">{user?.username}</h3>
          <p>+30 challenges</p>
        </div>
      </div>
      {loading ? (
        <div className=" grid place-items-center py-5">
          <ButtonLoading />
        </div>
      ) : (isParticipant) ? (
        <div>
          <DailyLogModal
            setShowAllLogDays={setShowAllLogDays}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
          <ProgressBar
            setShowAllLogDays={setShowAllLogDays}
            total={selectedChallenge?.duration || 0}
            current={5}
          />
          <DetailedProgressBar
            setShowAllLogDays={setShowAllLogDays}
            showAllLogDays={showAllLogDays}
            total={selectedChallenge?.duration || 0}
            current={5}
          />
          <div className="flex justify-between p-3">
            <h1 className="font-bold">Your Daily Log</h1>
            <div className="flex items-center gap-2">
              <IoMdAdd
                onClick={() => setOpenModal(true)}
                className="p-1 bg-gray-200 text-3xl rounded-full cursor-pointer hover:bg-gray-100"
              />
            </div>
          </div>
          <DailyLogDetail
            showLogDetail={showLogDetail}
            setShowLogDetail={setShowLogDetail}
          />
          <div className="overflow-y-auto">
            {logs?.slice(0,10)?.reverse()?.map((log, index) => (
              <div
                key={index}
                className="dailyLog__item border-b border-gray-300"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <div className="flex gap-2 justify-center items-center">
                      <h3 className="m-0 gap-2 bg-white relative flex items-center border font-bold border-gray-300">
                        <span className="font-bold">Day</span>{" "}
                        <span className="bg-gray-300 relative w-6 grid items-center justify-center p-1  text-black h-full ">
                          {log.days}
                        </span>
                      </h3>
                      <div>
                        <p className="m-0">{log.details?.slice(0, 30)}...</p>
                        <p className="m-0 text-gray-400 text-[13px]">
                          date
                        </p>
                      </div>
                    </div>
                  </div>
                  <LuExpand
                    className="cursor-pointer w-6 hover:bg-gray-100 h-6 rounded-full bg-gray-200 grid place-items-center p-1"
                    onClick={() => setShowLogDetail(log)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col p-4 items-start gap-2">
          <CustomeToast message={message} type={error ? "error" : "success"} />
          <h1 className="font-bold">You are not a participant</h1>
          <p className="text-gray-400">
            You need to join the challenge to log your daily progress
          </p>
          <button
            disabled={loading}
            className={`hover:bg-gray-600 ${!loading ? "bg-gray-900" : "bg-gray-600"} text-white py-1 px-3 rounded-sm flex items-center gap-1`}
            onClick={handleJoinChallenge}
          >
            {loading ? <ButtonLoading /> : <MdOutlineJoinFull />}Join
          </button>
        </div>
      )}
    </div>
  );
};

export default DailyLog;
