import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getCategorieByName } from "../../features/categories/categorieActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import ButtonLoading from "../../components/loading/buttonLoading";
import { IChallenge } from "../../interfaces/IChallenge";
import { MdOutlinePending } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";
import { FaRegDotCircle } from "react-icons/fa";


const CategoryDetailPage: React.FC = () => {
    const {name} = useParams<{name: string}>();
    const {selectedCategory, loading} = useAppSelector((state) => state.categories);
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(getCategorieByName(name as string));
    }, [name]);

    if(loading) {
        return <ButtonLoading />
    }

    return (
        <div className="bg-red-400 grid grid-cols-[_.3fr_.7fr]">
            <div className="categorieDetail bg-white p-3 border-r border-gray-300">
                <div>
                    <h1 className="font-bold text-3xl">{selectedCategory?.name}</h1>
                    <p className="text-gray-500">{selectedCategory?.description}</p>
                </div>
                <div className="mt-5">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="bg-gray-100 border border-gray-300 p-4">
                            <h1 className="text-4xl font-bold">{selectedCategory?.challenges.length}<sup>+</sup></h1>
                            <p>Total Challenges</p>
                        </div>
                        <div className="bg-gray-100 border border-gray-300 p-4">
                            <h1 className="text-4xl font-bold">{selectedCategory?.challenges.filter(challenge => challenge.status === "PENDING").length}<sup>+</sup></h1>
                            <p className="flex items-center gap-1"><MdOutlinePending/>Pending</p>
                        </div>
                        <div className="bg-gray-100 border border-gray-300 p-4">
                            <h1 className="text-4xl font-bold">{selectedCategory?.challenges.filter(challenge => challenge.status === "COMPLETED").length}<sup>+</sup></h1>
                            <p className="flex items-center gap-1"><FaRegCheckCircle/>Completed</p>
                            </div>
                        <div className="bg-gray-100 border border-gray-300 p-4">
                            <h1 className="text-4xl font-bold">{selectedCategory?.challenges.filter(challenge => challenge.status === "ONGOING").length}<sup>+</sup></h1>
                            <p className="flex items-center gap-1"><GiProgression/>Ongoing</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="challenges bg-gray-100 p-3">
                <h2 className="font-bold text-2xl mb-5">Challenges</h2>
                <ul className="grid gap-2 ">
                    {selectedCategory?.challenges.map((challenge: IChallenge) => (
                        <Link to={`/in/challenges/${challenge._id}`} key={challenge?._id} className="bg-white w-full p-2 border border-gray-200 flex justify-between ">
                            <div>
                                <h3 className="font-bold">{challenge.title}</h3>
                           <div className="flex items-center gap-1">
                                <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                                <p className="text-gray-500">Nathanim</p>
                           </div>
                            </div>
                            <div>
                            <p className="text-gray-500 flex items-center gap-1"><BiCategory/>{challenge.categorie}</p>
                                <p className="text-gray-900 font-bold flex items-center gap-1"><FaRegDotCircle/>{challenge.status}</p>
                            </div>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CategoryDetailPage;