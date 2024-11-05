import React from "react"
import { useAppSelector } from "../../hooks/useAppSelector"
import ButtonLoading from "../loading/buttonLoading"
import { ICategory } from "../../interfaces/ICategory"
import { categoryConfig } from "../../utils/categorieConfig"


interface IHeaderProps {
    categorie: ICategory | null
}

export const Header:React.FC<IHeaderProps> = ({
    categorie
}) => {
    const {loading} = useAppSelector((state) => state.categories)
    if (loading) {
        return(
        <div className="grid place-items-center"> 
        <ButtonLoading />
        </div>
    )}
    return (
        <div className="bg-gray-100">
          <div className="flex flex-col p-3 gap-1">
            <h1 className={`font-bold text-2xl flex items-center gap-1 py-1 px-2 ${categoryConfig[categorie?.name || ""]?.bgColor} text-white`}><span>{categoryConfig[categorie?.name || ""]?.icon()}</span>{categorie?.name}</h1>
            <p className="text-[14px] text-gray-500">
              {categorie?.description}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-1 p-3">
            <div className="flex-1 border border-gray-300 p-3 bg-white grid place-items-center">
              <h1 className="font-bold text-3xl">
                {categorie?.challenges.length}<sup>+</sup>
              </h1>
              <h2>Challenges</h2>
            </div>
            <div className="flex-1 border border-gray-300 p-3 bg-white grid place-items-center">
              <h1 className="font-bold text-3xl">
                20<sup>+</sup>
              </h1>
              <h2>Participants</h2>
            </div>
            <div className="flex-1 border border-gray-300 p-3 bg-white grid place-items-center col-span-2">
              <h1 className="font-bold text-3xl">
                10<sup>+</sup>
              </h1>
              <h2>Completed</h2>
            </div>
          </div>
        </div>
    )
}