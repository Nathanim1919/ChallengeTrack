import React from "react"; 
import { IoMdClose } from "react-icons/io";
import { useAppSelector } from "../../hooks/useAppSelector";



/**
 * Props for the DailyLogDetail component.
 * 
 * @interface IProps
 * @property {boolean} showLogDetail - Indicates whether the log detail modal is visible.
 * @property {(logDetail: { day: number; date: string; log: string; status: string } | null) => void} setShowLogDetail - Function to set the log detail modal visibility and its content.
 */
interface IProps {
    showLogDetail: {
        day: number;
        date: string;
        log: string;
        status: string;
    } | null;
    setShowLogDetail: (logDetail: {
        day: number;
        date: string;
        log: string;
        status: string;
    } | null) => void;
}


const DailyLogDetail:React.FC<IProps> = ({
    showLogDetail,
    setShowLogDetail
}) => {

    const {isParticipant,selectedChallenge} = useAppSelector(state => state.challenges);

    if(!showLogDetail) return null;
    return (
        <div className="fixed  bg-black/50 top-0 left-0 h-screen w-screen grid place-items-center z-10">
            {isParticipant?(<div className="bg-white w-[500px] p-4 relative grid">
                <div className="absolute top-2 right-2 w-6 font-bold h-6 bg-gray-200 rounded-full grid place-items-center cursor-pointer">
                    <IoMdClose  onClick={() => setShowLogDetail(null)} />
                </div>
            <div>
                <div>
                    <h1 className="font-bold ">Daily Log Detail For Day 7/{selectedChallenge?.duration}</h1>
                    <h2 className="text-gray-500 text-[13px]">Nov 23 2023</h2>
                </div>
                <div className="text-gray-800 text-[14px] mt-4">
                    <p>
                        I did 2km run today and 30 pushups, 30 situps, 30 squats, so I am feeling good today.
                        i hope to keep up with this pace and getting better everyday. 
                    </p>
                </div>
            </div>
            </div>):
            (<div>
                <button>Join Now</button>
            </div>)
            }
        </div>
    );
};


export default DailyLogDetail;