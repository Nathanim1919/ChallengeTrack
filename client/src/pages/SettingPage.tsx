import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { CiEdit } from "react-icons/ci";
import AvatorImage from '../assets/heroImages/avator.jpg'


const SettingPage = () => {
    const { user } = useSelector((state: RootState) => state.auth);
    const [isEditProfile, setIsEditProfile] = React.useState(false);
    return (
        <div className="setting-page">
            <div className="setting-header bg-black text-white p-5 grid items-center justify-center">
                <h1 className="text-3xl font-bold">Settings</h1>
            </div>
            <div className="setting-list grid grid-cols-3 gap-5 items-center justify-center w-[90%] m-auto">
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col">
                            <h1 className="font-bold text-3xl">Account</h1>
                            <p className="text-gray-500">Update your profile</p>
                        </div>
                        {isEditProfile ? (
                            <form className="grid gap-2">
                                <div className="grid gap-2">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" name="name" id="name" placeholder={user?.name} className="p-2 border border-gray-300"/>
                                </div>
                                <div className="grid gap-2">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" name="username" id="username" placeholder={user?.username} className="p-2 border border-gray-300"/>
                                </div>
                                <div className="grid gap-2">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" placeholder={user?.email} className="p-2 border border-gray-300"/>
                                </div>
                                <button className="bg-gray-300 justify-self-start py-1 px-5 font-bold" onClick={() => setIsEditProfile(false)}>Save</button>
                            </form>
                        ):(
                            <div className="grid gap-5">
                                <div className="w-16 h-16 rounded-md bg-gray-200 relative">
                                    <CiEdit className="w-4 h-4 text-white top-0 right-0 cursor-pointer m-auto absolute"/>
                                    <img src={AvatorImage} alt="avator" className="w-full h-full object-cover rounded-md"/>
                                </div>
                                <div className="grid gap-2">
                                    <h2 className="flex items-center gap-5"><span className="bg-gray-200 py-1 px-3">Full Name</span> <span className="flex font-bold">{user?.name}</span></h2>
                                    <h2 className="flex items-center gap-5"><span className="bg-gray-200 py-1 px-3">Username</span> <span className="flex font-bold">{user?.username}</span></h2>
                                    <h2 className="flex items-center gap-5"><span className="bg-gray-200 py-1 px-3">Email</span> <span className="flex font-bold">{user?.email}</span></h2>
                                </div>
                                <button className="bg-gray-300 justify-self-start py-1 px-5 font-bold" onClick={() => setIsEditProfile(true)}>Edit</button>
                            </div>
                        )}
                    </div>
                 
                    <div className="flex flex-col gap-3">
                        <div>
                        <h1 className="font-bold text-3xl">Security</h1>
                        <p className="text-gray-500">Enable Two factor authontication</p>
                        </div>
                        <div>
                            <form>
                            <input type="checkbox" name="two-factor-auth" id="two-factor-auth"/>
                            <label htmlFor="two-factor-auth">Enable</label>
                            </form>
                        </div>
                    </div>

                  
                    <div className="flex flex-col gap-3">
                        <div>
                             <h1 className="font-bold text-3xl">Notification</h1>
                             <p className="text-gray-500">Manage your notification</p>
                        </div>
                        <div>
                            <form>
                            <input type="checkbox" name="notification" id="notification"/>
                            <label htmlFor="notification">Enable</label>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
    );
};



export default SettingPage;