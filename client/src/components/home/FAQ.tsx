import FAQImage from "../../assets/faq.png";
import { FcQuestions } from "react-icons/fc";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import React from "react";



const FAQ = () => {
    const faqs = [
        {
            question: "What is this website about?",
            answer: "This website is about..."
        },
        {
            question: "How do I get started?",
            answer: "To get started..."
        },
        {
            question: "How do I join a challenge?",
            answer: "To join a challenge..."
        },
        {
            question: "How do I create a challenge?",
            answer: "To create a challenge..."
        },
        {
            question: "How do I submit my solution?",
            answer: "To submit your solution..."
        },
        {
            question: "How do I view the leaderboard?",
            answer: "To view the leaderboard..."
        },
        {
            question: "How do I view my profile?",
            answer: "To view your profile..."
        },
        {
            question: "How do I view my achievements?",
            answer: "To view your achievements..."
        },
        {
            question: "How do I view my badges?",
            answer: "To view your badges..."
        },
        {
            question: "How do I view my rewards?",
            answer: "To view your rewards..."
        },
        {
            question: "How do I view my notifications?",
            answer: "To view your notifications..."
        },
        {
            question: "How do I view my settings?",
            answer: "To view your settings..."
        },
    ];
    const [activeIndex, setActiveIndex] = React.useState(-1);
    return (
        <div className={'bg-sky-200 grid items-center'}>
            <div className={'grid grid-cols-1 md:grid-cols-2 w-[100%] md:w-[70%] m-auto'}>
                <img src={FAQImage as string} alt="FAQ" className={"w-[450px] self-end"}/>
                <div className={"flex flex-col bg-white px-5 justify-center items-center gap-5 font-Montserrat"}>
                    <h1 className={"font-bold text-2xl"}>Frequently Asked Questions</h1>
                    <div className={"rounded-3xl"}>
                    {
                        faqs.map((faq, index) => (
                            <div key={index}>
                                <h2 onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                                    className={"flex cursor-pointer hover:text-gray-400 items-center gap-1 text-[1.25rem]"}>
                                    <FcQuestions/>{faq.question}<IoIosArrowDown
                                    className={"self-end justify-self-end"}/></h2>
                                {(index === activeIndex) &&
                                    <p className={'flex items-center gap-1'}><MdOutlineQuestionAnswer/>{faq.answer}</p>}
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};


export default FAQ;
