import React from "react";
import { IoMdClose } from "react-icons/io";
import { FaBookJournalWhills } from "react-icons/fa6";
import { useAppDispatch } from "../../hooks/useAppDispatch";
// import { addDailyLog } from "../../features/challenges/challengesActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import { ProgressBar } from "../ui/progressBar";
import { createLog } from "../../features/logs/logActons";

interface DailyLogProps {
    openModal: boolean;
    setOpenModal: (value: boolean) => void;
    setShowAllLogDays?: React.Dispatch<React.SetStateAction<boolean>>;
}


const DailyLogModal: React.FC<DailyLogProps> = ({openModal, setOpenModal,setShowAllLogDays}) => {
    const [details, setDetails] = React.useState<string>("");
    const {loading, error}  = useAppSelector(state => state.logs);
    const {selectedChallenge} = useAppSelector(state => state.challenges);
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(createLog({details, challenge: selectedChallenge?._id}));
    };

    if (!openModal) {
        return null;
    }
    return (
        <div className="fixed top-0 left-0 w-screen h-full bg-gray-700/50 backdrop-blur-0 grid place-items-center z-10">
            <form onSubmit={handleSubmit} className="bg-white p-5 shadow-md grid place-items-center gap-2 relative">
             {error && <p className="bg-red-100 text-red-500 p-2 rounded-md">{error}</p>}   
            <ProgressBar setShowAllLogDays={setShowAllLogDays} total={selectedChallenge?.duration || 0} current={5}/>
            <IoMdClose onClick={() => setOpenModal(false)} className="w-6 h-6 bg-gray-200 absolute top-2 rounded-full p-1 right-2 cursor-pointer hover:bg-gray-300"/>
                <h1 className="font-bold p-4">Daily Log For Day 3</h1>
                <div className="flex flex-col gap-1">
                    <label htmlFor="dailyLog" className="text-gray-700 flex items-center gap-2"><FaBookJournalWhills/>Daily Log</label>
                    <textarea 
                        id="dailyLog"  
                        name="dailyLog" 
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        className="border border-gray-200 resize-none p-2 outline-none" 
                        placeholder="Enter your daily log here"
                        rows={6} 
                        cols={50}>
                    </textarea>
                </div>
                <button disabled={loading} className={`${!loading?"bg-black":"bg-gray-600"}  hover:bg-gray-700 text-white font-bold w-full p-2`} type="submit">{loading?<>Creating...</>:<>Create</>}</button>
            </form>
        </div>
    );
};

export default DailyLogModal;