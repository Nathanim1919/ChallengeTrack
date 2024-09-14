import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import BGImage from "../../assets/bg1.png";
import React from "react";


const TestimonialCard = ({testimonial,key, isActive, onClick}) => {
    return (
        <div key={key} className={`card rounded-md grid grid-cols-1 bg-white items-start relative py-6 cursor-pointer transition-transform duration-300 ${isActive ? 'scale-100 md:scale-110 relative z-10 md:shadow-lg': 'scale-100 md:scale-75'}`} onClick={onClick}>
            <div
                className={" overflow-hidden flex flex-col p-1 rounded-2xl items-center justify-center relative bg-white w-full"}>
                <img src={BGImage as string} alt="BG1"
                     className="w-1/2 right-0 -top-24  bg1-image hidden md:block absolute opacity-100"/>
                <div className={"w-[60px] h-[60px] relative z-10 rounded-full bg-sky-400 m-0"}></div>
                <div className={"m-0 w-full flex justify-center items-center flex-col"}>
                    <h3 className={"font-bold text-[15px] m-0"}>{testimonial.author}</h3>
                    <p className={"text-[12px] m-0"}>{testimonial.position}</p>
                </div>
            </div>
            <div className="card-body rounded-2xl p-1 w-full  text-[14px] bg-white text-gray-600">
            <p className={'ml-3'}><FaQuoteLeft className={"text-sky-400 text-[20px]"} />{testimonial.text}<FaQuoteRight className={"text-sky-400 text-[20px]"} /></p>
            </div>
        </div>
    );
};


export default TestimonialCard;
