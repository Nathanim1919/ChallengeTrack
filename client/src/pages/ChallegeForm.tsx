import React from "react";


const ChallengeForm = () => {
    const [challengeData, setChallengeData] = React.useState({
        title: "",
        description: "",
        duration: "",
        category: "",
        level: "",
        isPrivate: false,
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChallengeData({
            ...challengeData,
            [e.target.name]: e.target.value
        })
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(challengeData);
    };


    return (
        <div className="challenge-form">
            <div className="form-header bg-black text-white p-5 grid items-center justify-center">
                <h1 className="text-3xl font-bold">Create Challenge</h1>
            </div>
            <div className="form-body grid w-[60%] m-auto mt-5">
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
                            <input type="date" name="startdate" id="startdate" placeholder="startdate" className="p-2 border border-gray-300 bg-gray-100" onChange={handleChange}/>
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
                            <input type="number" name="minParticipants" id="minParticipants" placeholder="Minimum Participants" className="p-2 border border-gray-300 bg-gray-100" onChange={handleChange}/>
                        </div>
                        <div className="grid gap-2 flex-1">
                            <label htmlFor="maxParticipants">Maximum Participants</label>
                            <input type="number" name="maxParticipants" id="maxParticipants" placeholder="Maximum Participants" className="p-2 border border-gray-300 bg-gray-100" onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-row-reverse items-center gap-2">
                            <label htmlFor="isPrivate">Publish Now?</label>
                            <input type="checkbox" name="isPrivate" id="isPrivate" className="p-2 border border-gray-300" onChange={handleChange}/>
                        </div>
                        <button className="bg-black text-white py-2 px-5 font-bold hover:bg-gray-700 rounded-sm" type="submit">Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default ChallengeForm;