import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";


const TestimonialCard = ({testimonial,key, isActive, onClick}) => {
    return (
        <div key={key} className={`card grid grid-cols-[.3fr_.7fr] items-start relative py-6 cursor-pointer transition-transform duration-300 ${isActive ? 'scale-100 relative z-10': 'scale-100'}`} onClick={onClick}>
            <div
                className={"flex flex-col p-1 rounded-2xl items-center justify-center relative -top-6 -right-8 bg-white shadow-lg w-full border border-sky-300"}>
                <div className={"w-[60px] h-[60px] rounded-full bg-sky-400 m-0"}></div>
                <div className={"m-0 w-full flex justify-center items-center flex-col"}>
                    <h3 className={"font-bold text-[15px] m-0"}>{testimonial.author}</h3>
                    <p className={"text-[12px] m-0"}>{testimonial.position}</p>
                </div>
            </div>
            <div className="card-body rounded-2xl p-1 px-10 w-full  text-[14px] bg-white text-gray-600 shadow-lg border border-sky-300">
                <p className={'ml-3'}><FaQuoteLeft className={"text-sky-400 text-[20px]"} />{testimonial.text}<FaQuoteRight className={"text-sky-400 text-[20px]"} /></p>
            </div>
        </div>
    );
};


export default TestimonialCard;
