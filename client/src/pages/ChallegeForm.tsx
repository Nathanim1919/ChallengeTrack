import React from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { createChallenge } from "../features/challenges/challengesActions";
import { useAppSelector } from "../hooks/useAppSelector";
import { IUser } from "../interfaces/IUser";
import ChallengeCoverImage from "../assets/heroImages/challenge.jpg"
import { MdAddToPhotos } from "react-icons/md";


interface ChallengeData {
    title: string;
    startDate: Date;
    description: string;
    duration: string;
    category: string;
    level: string;
    rules: {
        minParticipants: number;
        maxParticipants: number;
    };
    visibility: "public" | "private";
    createdBy: IUser['_id'];
}

const ChallengeForm = () => {
    const {user} = useAppSelector((state) => state.auth);
    const [challengeData, setChallengeData] = React.useState<ChallengeData>({
        title: "",
        startDate: new Date(),
        description: "",
        duration: "",
        category: "",
        level: "",
        rules:{
            minParticipants: 0,
            maxParticipants: 0,
        },
        visibility: "public",
        createdBy: user?._id,
    });
    const dispatch = useAppDispatch();
   

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChallengeData({
            ...challengeData,
            [e.target.name]: e.target.value
        })
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChallengeData({
            ...challengeData,
            [e.target.name]: e.target.checked
        })
    };


    const handleRuleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChallengeData({
            ...challengeData,
            rules: {
                ...challengeData.rules,
                [e.target.name]: e.target.value
            } 
        })
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(challengeData);
        dispatch(createChallenge(challengeData));
    };


    return (
        <div className="challenge-form">
            <div className="form-header bg-black text-white p-5 grid items-center justify-center">
                <h1 className="text-3xl font-bold">Create Challenge</h1>
            </div>
            <div className="form-body w-[80%] m-auto mt-5 grid grid-cols-[_.6fr_.4fr]">
                <form onSubmit={handleSubmit} className="w-[90%] m-auto grid gap-2">
                    <div className="grid gap-2">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" placeholder="Title" className="p-2 border border-gray-300 bg-gray-100" onChange={handleChange}/>
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" rows={5} id="description" placeholder="Description" className="p-2 border border-gray-300 bg-gray-100 resize-none" onChange={handleChange}/>
                    </div>
                    <div className="flex justify-between gap-2">
                        <div className="grid gap-2 flex-1">
                            <label htmlFor="duration">Duration</label>
                            <input type="text" name="duration" id="duration" placeholder="Duration" className="p-2 border border-gray-300 bg-gray-100" onChange={handleChange}/>
                        </div>
                        <div className="grid gap-2 flex-1">
                            <label htmlFor="category">Start Date</label>
                            <input type="date" name="startDate" id="startdate" placeholder="startdate" className="p-2 border border-gray-300 bg-gray-100" onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="flex justify-between gap-2">
                        <div className="grid gap-2 flex-1">
                                <label htmlFor="category">Category</label>
                                <input type="text" name="category" id="category" placeholder="Category" className="p-2 border border-gray-300 bg-gray-100" onChange={handleChange}/>
                            </div>
                        <div className="grid gap-2 flex-1">
                            <label htmlFor="level">Level</label>
                            <input type="text" name="level" id="level" placeholder="Level" className="p-2 border border-gray-300 bg-gray-100" onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="flex justify-between gap-2">
                        <div className="grid gap-2 flex-1">
                            <label htmlFor="minParticipants">Minimum Participants</label>
                            <input type="number" name="minParticipants" id="minParticipants" placeholder="Minimum Participants" className="p-2 border border-gray-300 bg-gray-100" onChange={handleRuleChange}/>
                        </div>
                        <div className="grid gap-2 flex-1">
                            <label htmlFor="maxParticipants">Maximum Participants</label>
                            <input type="number" name="maxParticipants" id="maxParticipants" placeholder="Maximum Participants" className="p-2 border border-gray-300 bg-gray-100" onChange={handleRuleChange}/>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-row-reverse items-center gap-2">
                            <label htmlFor="isPrivate">Publish Now?</label>
                            <input type="checkbox" name="visibility" id="visibility" className="p-2 border border-gray-300" onChange={handleCheckboxChange}/>
                        </div>
                        <button className="bg-black text-white py-2 px-5 font-bold hover:bg-gray-700 rounded-sm" type="submit">Create</button>
                    </div>
                </form>
                <div className="relative challengeCoverImage w-full h-[50%] bg-gray-200 rounded-md">
                    <MdAddToPhotos className="absolute top-2 right-2 "/>
                    <img src={ChallengeCoverImage} alt="challenge cover" className="w-full h-full object-cover"/>
                </div>
            </div>
        </div>
    );
};


export default ChallengeForm;