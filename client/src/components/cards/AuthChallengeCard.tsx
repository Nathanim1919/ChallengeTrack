import React from 'react';
import { IChallenge } from "../../interfaces/IChallenge";
import { TbProgressBolt } from 'react-icons/tb';
import AvatorImage from '../../assets/heroImages/avator.jpg';
import { GiTwoCoins } from 'react-icons/gi';
import { MdJoinFull } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { categoryConfig } from '../../utils/categorieConfig';

const AuthChallengeCard = ({ challenge }: { challenge: Partial<IChallenge> }) => {
    const category = categoryConfig[challenge?.categorie||""] || {
        bgColor: "bg-gray-300", // Default color
        icon: () => <span>?</span>, // Default icon
      };


      console.log(challenge)

    return (
        <Link to={`/in/challenges/${challenge._id}`} key={challenge._id} className='bg-white border min-w-[200px] max-w-[300px] border-gray-300 flex-1 overflow-hidden text-white'>
        <div className='cover bg-black p-4 flex flex-col justify-between gap-10 relative overflow-hidden'>
            <div className='w-24 h-24 bg-gray-800 absolute -top-3 -left-4 rounded-full'></div>
            <div className='w-96 h-96 bg-gray-800 absolute rounded-full -bottom-10 left-48'></div>
            <div className='flex items-center justify-between relative z-10'>
                <p className={`flex items-center gap-1 ${category.bgColor} text-white py-1 px-2 text-[12px] rounded-full`}><category.icon/>{challenge.categorie}</p>
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
                        <p className='m-0 text-[11px]'>{challenge?.createdBy?.name}</p>
                        <p className='m-0 text-[14px] text-orange-400 flex items-center gap-1'><GiTwoCoins/>{challenge?.createdBy?.points} XP</p>
                    </div>
                  
                </div>
            </div>
        </div>
        <div>
            <div className='flex items-center p-3'>
                <div className='flex items-center p-3'>
                <div className='w-10 border-2 relative border-white h-10 rounded-full bg-gray-300'>
                    <img src={AvatorImage} alt='avator' className='w-full h-full object-cover rounded-full'/>
                    </div>
                    <div className='w-10 border-2 relative right-6 border-white h-10 rounded-full bg-gray-300'>
                    <img src={AvatorImage} alt='avator' className='w-full h-full object-cover rounded-full'/>
                    </div>
                    <div className='w-10 border-2 relative right-10 border-white h-10 rounded-full bg-gray-300'>
                    <img src={AvatorImage} alt='avator' className='w-full h-full object-cover rounded-full'/>
                </div>
                <p className='font-bold relative text-black right-10'>+{challenge.participants?.length}</p>
                </div>
                <div>
                    <p>{challenge.level}</p>
                </div>
            </div>
            <div className='flex justify-between px-3 py-4'>
                <button className="bg-black text-white px-5 rounded-sm hover:bg-gray-600 text-[14px] flex items-center gap-1"><MdJoinFull/>Join</button>
                <button className='text-gray-500 hover:text-gray-800'>See more</button>
            </div>
        </div>
     </Link>
    );
};


export default AuthChallengeCard