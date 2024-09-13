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
            position: "Software Engineer",
            text: "I’ve always been a fan of gamified learning, and this platform has exceeded my expectations. I love how I can track my progress, compete with others, and earn rewards for my hard work. It’s a fun and engaging way to improve my skills and stay motivated."
        },
        {
            author: "Alice Smith",
            position: "Designer",
            text: "As a designer, I’m always looking for new ways to challenge myself and grow. This platform has been a great resource for discovering new skills and staying inspired. The challenges are creative and engaging, and I love the sense of community that comes with sharing my achievements."
        },

    ]
    return (
        <div className={"py-8 bg-sky-400 grid gap-5 my-5"}>
            <img src={BGImage as string} alt="BG1" className="w-1/2 right-0  bg1-image hidden md:block absolute opacity-30"/>
            <h1 className={"p-7 grid items-center justify-center font-bold text-4xl text-white"}>What Our Users Are Saying</h1>
            <div className={"grid grid-cols-3 justify-center items-center w-[80%] m-auto"}>
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
