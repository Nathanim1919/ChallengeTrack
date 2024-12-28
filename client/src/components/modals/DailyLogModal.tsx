import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { FaBookJournalWhills } from "react-icons/fa6";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { ProgressBar } from "../ui/progressBar";
import { createLog, getChallengeUserLogs } from "../../features/logs/logActons";
import { getCurrentDayNumber } from "../../utils/helper";
import { resetStatus } from "../../features/logs/logSlice";

interface DailyLogProps {
    openModal: boolean;
    setOpenModal: (value: boolean) => void;
    setShowAllLogDays?: React.Dispatch<React.SetStateAction<boolean>>;
}

const DailyLogModal: React.FC<DailyLogProps> = ({ openModal, setOpenModal, setShowAllLogDays }) => {
    const [details, setDetails] = React.useState<string>("");
    const { logs, statuses } = useAppSelector(state => state.logs);
    const { selectedChallenge } = useAppSelector(state => state.challenges);
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(createLog({ details, challenge: selectedChallenge?._id }));
    };

    useEffect(() => {
        if (statuses.createLog.success) {
            // Close modal after successful creation and reset status
            setOpenModal(false);
            dispatch(resetStatus("createLog"));
            // Refresh logs to include the new entry
            dispatch(getChallengeUserLogs(selectedChallenge?._id || ""));
        }
    }, [statuses.createLog.success, dispatch, setOpenModal, selectedChallenge?._id]);

    if (!openModal) {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 w-screen h-full bg-gray-700/50 backdrop-blur-0 grid place-items-center z-10">
            <form onSubmit={handleSubmit} className="bg-white p-5 shadow-md grid place-items-center gap-2 relative">
                {statuses.createLog.error && (
                    <p className="bg-red-100 text-red-500 p-2 rounded-md">{statuses.createLog.error}</p>
                )}
                <ProgressBar
                    setShowAllLogDays={setShowAllLogDays}
                    total={selectedChallenge?.duration || 0}
                    current={getCurrentDayNumber(selectedChallenge?.startDate ?? new Date(), selectedChallenge?.duration ?? 0)}
                    logs={logs}
                />
                <IoMdClose
                    onClick={() => {
                        setOpenModal(false);
                        dispatch(resetStatus("createLog")); // Reset on modal close
                    }}
                    className="w-6 h-6 bg-gray-200 absolute top-2 rounded-full p-1 right-2 cursor-pointer hover:bg-gray-300"
                />
                <h1 className="font-bold p-4">Daily Log For Day {getCurrentDayNumber(selectedChallenge?.startDate ?? new Date(), selectedChallenge?.duration ?? 0)}</h1>
                <div className="flex flex-col gap-1">
                    <label htmlFor="dailyLog" className="text-gray-700 flex items-center gap-2">
                        <FaBookJournalWhills /> Daily Log
                    </label>
                    <textarea
                        id="dailyLog"
                        name="dailyLog"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        className="border border-gray-200 resize-none p-2 outline-none"
                        placeholder="Enter your daily log here"
                        rows={6}
                        cols={50}
                    />
                </div>
                <button
                    disabled={statuses.createLog.loading}
                    className={`${!statuses.createLog.loading ? "bg-black" : "bg-gray-600"} hover:bg-gray-700 text-white font-bold w-full p-2`}
                    type="submit"
                >
                    {statuses.createLog.loading ? <>Creating...</> : <>Create</>}
                </button>
            </form>
        </div>
    );
};

export default DailyLogModal;
