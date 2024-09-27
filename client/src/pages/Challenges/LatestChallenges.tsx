import React from 'react'
import AvatorImage from '../../assets/heroImages/avator.jpg'
import { MdJoinFull } from "react-icons/md";
import { GiTwoCoins } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";
import { TbProgressBolt } from "react-icons/tb";




const LatestChalleges = () => {
    const challenges = [
        {
            title: "30-Day Fitness Challenge",
            description: "Commit to 30 days of daily workouts to improve your strength and endurance.",
            startDate: "2023-10-01",
            endDate: "2023-10-30",
            participants: ["1", "23", "45"],
            status: 'ONGOING', // Challenge is currently active
            visibility: "public",
        },
        {
            title: "Read 5 Books in a Month",
            description: "Challenge yourself to read 5 books by the end of the month. Share your progress with others.",
            startDate: "2023-10-05",
            endDate: "2023-10-31",
            participants: ["2", "4", "19"],
            status: 'PENDING', // Challenge hasn't started yet
            visibility: "public",
        },
        {
            title: "100 Days of Code",
            description: "Code for at least an hour every day for 100 days. Improve your programming skills.",
            startDate: "2023-09-01",
            endDate: "2023-12-10",
            participants: ["10", "50", "67"],
            status: 'ONGOING',
            visibility: "public",
        },
        {
            title: "Healthy Eating Challenge",
            description: "Adopt a healthy eating plan for 21 days. Share your recipes and tips with the community.",
            startDate: "2023-10-10",
            endDate: "2023-10-31",
            participants: ["3", "17", "58"],
            status: 'PENDING',
            visibility: "public",
        },
        {
            title: "Learn a New Language",
            description: "Spend at least 15 minutes a day learning a new language. Complete the challenge in 60 days.",
            startDate: "2023-11-01",
            endDate: "2023-12-31",
            participants: ["5", "33", "101"],
            status: 'PENDING',
            visibility: "public",
        },
        {
            title: "Complete a Personal Project",
            description: "Finish a side project you've been putting off within 30 days. Share your progress with others.",
            startDate: "2023-09-15",
            endDate: "2023-10-15",
            participants: ["20", "75", "99"],
            status: 'COMPLETED',
            visibility: "private",
        },
        {
            title: "30-Day Fitness Challenge",
            description: "Commit to 30 days of daily workouts to improve your strength and endurance.",
            startDate: "2023-10-01",
            endDate: "2023-10-30",
            participants: ["1", "23", "45"],
            status: 'ONGOING', // Challenge is currently active
            visibility: "public",
        },
        {
            title: "Read 5 Books in a Month",
            description: "Challenge yourself to read 5 books by the end of the month. Share your progress with others.",
            startDate: "2023-10-05",
            endDate: "2023-10-31",
            participants: ["2", "4", "19"],
            status: 'PENDING', // Challenge hasn't started yet
            visibility: "public",
        },
    ];

    return (
        <div className="popular-categories grid">
            <h2 className='font-bold m-4'>Latest Challenges</h2>
            <div className="categories grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
               {
                     challenges.map((challenge, index) => (
                         <div key={index} className='bg-white border border-gray-300 flex-1 overflow-hidden text-white'>
                            <div className='cover bg-black p-4 flex flex-col justify-between gap-10 relative overflow-hidden'>
                                <div className='w-24 h-24 bg-gray-800 absolute -top-3 -left-4 rounded-full'></div>
                                {/* <div className='w-10 h-10 bg-gradient-to-tr from-yellow-200 to-yellow-400 absolute rounded-full top-2 right-1'></div> */}
                                {/* <div className='w-10 h-10 bg-gradient-to-tr from-yellow-200 to-yellow-400 absolute rounded-full bottom-2 right-5'></div> */}
                                <div className='w-96 h-96 bg-gray-800 absolute rounded-full -bottom-10 left-48'></div>
                                <div className='flex items-center justify-between relative z-10'>
                                    <p className='flex items-center gap-1'><BiCategory/>Fitness</p>
                                    <p className='flex items-center gap-1 text-[13px]'><TbProgressBolt/>{challenge.status}</p>
                                </div>
                                <div className='flex flex-col gap-2 relative z-10'>
                                    <div className='m-0'>
                                        <h3>{challenge.title}</h3>
                                    </div>
                                    <div className='m-0 flex items-center gap-2'>
                                        <div className='border-2 border-white w-8 h-8 rounded-full bg-gray-400'>
                                            <img src={AvatorImage} alt='avator' className='w-full h-full object-cover rounded-full'/>
                                        </div>
                                        <div className='flex flex-col'>
                                            <p className='m-0 text-[11px]'>Nathanim</p>
                                            <p className='m-0 text-[14px] text-orange-400 flex items-center gap-1'><GiTwoCoins/>3000 XP</p>
                                        </div>
                                      
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center p-3'>
                                    <div className='w-10 border-2 relative border-white h-10 rounded-full bg-gray-300'>
                                    <img src={AvatorImage} alt='avator' className='w-full h-full object-cover rounded-full'/>
                                    </div>
                                    <div className='w-10 border-2 relative right-3 border-white h-10 rounded-full bg-gray-300'>
                                    <img src={AvatorImage} alt='avator' className='w-full h-full object-cover rounded-full'/>
                                    </div>
                                    <div className='w-10 border-2 relative right-6 border-white h-10 rounded-full bg-gray-300'>
                                    <img src={AvatorImage} alt='avator' className='w-full h-full object-cover rounded-full'/>
                                    </div>
                                    <p className='font-bold relative text-black right-3'>+200</p>
                                </div>
                                <div className='flex justify-between px-3 py-4'>
                                    <button className="bg-black text-white px-5 rounded-sm hover:bg-gray-600 text-[14px] flex items-center gap-1"><MdJoinFull/>Join</button>
                                    <button className='text-gray-500 hover:text-gray-800'>See more</button>
                                </div>
                            </div>
                         </div>
                     ))
               }
            </div>
            <div className='w-full grid items-center justify-center my-5'>
                <button className='py-1 px-3 bg-black text-white rounded-sm hover:bg-gray-600 cursor-pointer'>See More</button>
               </div>      
        </div>
    );
};


export default LatestChalleges;
