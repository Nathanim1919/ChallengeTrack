import React from "react"
import { useAppSelector } from "../../hooks/useAppSelector"
import ButtonLoading from "../loading/buttonLoading"


export const Header:React.FC = () => {
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
            <h1 className="font-bold text-2xl">Personal Development</h1>
            <p className="text-[14px] text-gray-500">
              Personal development is a lifelong process. It is a way for people
              to assess their skills and qualities, consider their aims in life
              and set goals in order to realise and maximise their potential.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-1 p-3">
            <div className="flex-1 border border-gray-300 p-3 bg-white grid place-items-center">
              <h1 className="font-bold text-3xl">
                140<sup>+</sup>
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