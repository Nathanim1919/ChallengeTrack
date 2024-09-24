import TestimonialCard from "../components/cards/TestimonialCard.tsx";
import React from "react";
import BGImage from "../assets/bg1.png";


const Testimonial = () => {
    const [activeIndex, setActiveIndex] = React.useState(1);
    const testimonials = [
        {
            author: "John Doe",
            position: "CEO",
            text: "Joining this platform has been a game-changer for my productivity. The challenges are not only fun but also practical, helping me build real-world skills while staying motivated. The reward system is a huge plus—I feel recognized for my efforts every step of the way!"
        },
        {
            author: "Jane Doe",
            position: "S.Engineer",
            text: "I’ve always been a fan of gamified learning, and this platform has exceeded my expectations. I love how I can track my progress, compete with others, and earn rewards for my hard work. It’s a fun and engaging way to improve my skills and stay motivated."
        },
        {
            author: "Alice Smith",
            position: "Designer",
            text: "As a designer, I’m always looking for new ways to challenge myself and grow. This platform has been a great resource for discovering new skills and staying inspired. The challenges are creative and engaging, and I love the sense of community that comes with sharing my achievements."
        },
    ]
    return (
        <div className={"my-10 px-5 py-4 md:py-24 bg-gray-900 grid grid-cols-1 md:grid-cols-[.4fr_.6fr] overflow-hidden relative"}>
            <img src={BGImage as string} alt="BG1" className="w-1/2 right-0  bg1-image hidden md:block absolute opacity-100"/>
            <div className={'flex flex-col justify-center w-full md:w-[80%] text-left gap-5'}>
                <h1 className={"font-bold text-3xl md:text-6xl text-white"}>What Our Users Are
                    Saying</h1>
                <p className={"text-white text-center md:text-left"}>
                    See what our users have to say about their experience with our platform. We’re proud to have helped so many people achieve their goals and improve their skills.
                </p>
                <button className={'bg-white border-2 border-sky-500 px-4 py-2 hover:bg-gray-200 rounded-md shadow-md self-start'}>
                    Be Inspired and Get Started
                </button>
            </div>

            <div className={"grid grid-cols-1 md:grid-cols-3 md:gap-0 gap-2 mt-10"}>
            {
                    testimonials.map((testimonial, index) => (
                        <TestimonialCard testimonial={testimonial} onClick={() => setActiveIndex(index)} isActive={index === activeIndex} key={index}/>
                    ))
                }
            </div>
        </div>
    );
};


export default Testimonial;
