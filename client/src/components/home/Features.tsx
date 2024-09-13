import React from "react";
import Badge from "../../assets/badge.png"
import Achievement from "../../assets/achievement.png"
import Notification from "../../assets/notification.png"
import Progress from "../../assets/progress.png"
import trophy from "../../assets/trophy.png"
import competition from "../../assets/competition.png"
import BG1Image from "../../assets/bg1.png";


const Features: React.FC = () => {
    return (
        <section className="features py-20 bg-gray-100">
            <div className="container mx-auto px-6 w-[80%]">
                <h2 className="text-center text-4xl font-bold mb-12">Our Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeatureBox
                        image={trophy as string}
                        title={"Customizable Challenges"}
                        description={"Create and personalize challenges that align with your unique goals and interests."}
                    />
                    <FeatureBox
                          image={competition as string}
                        title={"Real-time Leaderboards"}
                        description={"Stay competitive with dynamic leaderboards that update in real-time as you progress."}
                    />
                    <FeatureBox
                          image={Achievement as string}
                        title={"Achievement Badges"}
                        description={"Unlock exclusive badges for completing challenges and reaching new milestones."}
                    />
                    <FeatureBox
                          image={competition as string}
                        title={"Social Sharing"}
                        description={"Share your achievements and challenge completions with your friends on social media."}
                    />
                    <FeatureBox
                          image={Progress as string}
                        title={"Progress Tracking"}
                        description={"Monitor your progress through detailed statistics and insightful analytics."}
                    />
                    <FeatureBox
                          image={Notification as string}
                        title={"Real Time Notification"}
                        description={"Team up with friends or other users to participate in group challenges for more fun."}
                    />
                </div>
            </div>
        </section>
    );
};

const FeatureBox: React.FC<{ title: string; description: string; image: string }> = ({ title, description, image }) => {
    return (
        <div className="relative overflow-hidden feature-box p-8 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-5cd 00">
            <img src={BG1Image as string} alt="badge" className="w-1/2 absolute -top-11c -right-11" />
            <div className={"w-[130px] relative"}>
               <img src={image} alt={title} className="w-full h-full relative mx-auto mb-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-gray-500">{description}</p>
        </div>
    );
};

export default Features;
