import React from "react";
import { IoMdAdd } from "react-icons/io";
import AvatorImage from '../../assets/heroImages/avator.jpg'
import { LuExpand } from "react-icons/lu";
import DailyLogModal from "../../components/modals/DailyLogModal";




const DailyLog = () => {
    const [openModal, setOpenModal] = React.useState(false);
    const dailyLogs = [
      {
        day: 1,
        date: "Mon Sep 30 2024",
        log: "I did 30 pushups today",
        status: "completed"
      },
      {
        day: 2,
        date: "Tue Sep 31 2024",
        log: "I did 30 pushups today",
        status: "completed"
      },
      {
        day: 3,
        date: "Wed Oct 1 2024",
        log: "I did 30 pushups today",
        status: "completed"
      },
      {
        day: 4,
        date: "Thu Oct 2 2024",
        log: "I did 30 pushups today",
        status: "completed"
      },
      {
        day: 1,
        date: "Mon Sep 30 2024",
        log: "I did 30 pushups today",
        status: "completed"
      },
      {
        day: 2,
        date: "Tue Sep 31 2024",
        log: "I did 30 pushups today",
        status: "completed"
      },
      {
        day: 3,
        date: "Wed Oct 1 2024",
        log: "I did 30 pushups today",
        status: "completed"
      },
      {
        day: 4,
        date: "Thu Oct 2 2024",
        log: "I did 30 pushups today",
        status: "completed"
      },
     
    ];
    return (
        <div className="p-3">
          <div className="creatorInfo flex gap-2 items-center border-b border-gray-300 p-3">
            
            <div className="creatorInfo__avatarn w-12 h-12 bg-gray-200">
              <img src={AvatorImage} alt="avator" className="w-full h-full object-cover"/>
            </div>
            <div className="creatorInfo__details">
              <h3 className="font-bold">John Doe</h3>
              <p>+30 challenges</p>
            </div>
          </div>
          <div>
            <DailyLogModal openModal={openModal} setOpenModal={setOpenModal}/>
              <div className="flex justify-between p-3">
                <h1 className="font-bold">Your Daily Log</h1>
                <IoMdAdd onClick={() => setOpenModal(true)} className="p-1 bg-gray-200 text-3xl rounded-full cursor-pointer hover:bg-gray-100"/>
              </div>
            <div className="h-[75vh] overflow-y-auto">
              {
                dailyLogs.map((log, index) => (
                  <div key={index} className="dailyLog__item border-b border-gray-300 p-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-2 justify-start items-center">
                          <h3 className="m-0 font-boldpg-white relative flex justify-start items-start border font-bold border-gray-300"><span className="font-bold p-1">Day</span> <span className="bg-gray-300 relative w-6 grid items-center justify-center p-1  text-black h-full ">{log.day}</span></h3>
                          <div>
                            <p className="m-0">{(log.log).slice(0,25)}...</p>
                            <p className="m-0 text-gray-400 text-[13px]">{log.date}</p>
                          </div>
                        </div>
                      </div>
                     <LuExpand/>
                    </div>
                  </div>))
              }
            </div>
          </div>
        </div>
    );
};


export default DailyLog;