import React from "react";

const Features: React.FC = () => {
    return (
        <section className="features py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-center text-4xl font-bold mb-12">Our Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeatureBox
                        title={"Customizable Challenges"}
                        description={"Create and personalize challenges that align with your unique goals and interests."}
                    />
                    <FeatureBox
                        title={"Real-time Leaderboards"}
                        description={"Stay competitive with dynamic leaderboards that update in real-time as you progress."}
                    />
                    <FeatureBox
                        title={"Achievement Badges"}
                        description={"Unlock exclusive badges for completing challenges and reaching new milestones."}
                    />
                    <FeatureBox
                        title={"Social Sharing"}
                        description={"Share your achievements and challenge completions with your friends on social media."}
                    />
                    <FeatureBox
                        title={"Progress Tracking"}
                        description={"Monitor your progress through detailed statistics and insightful analytics."}
                    />
                    <FeatureBox
                        title={"Collaborative Challenges"}
                        description={"Team up with friends or other users to participate in group challenges for more fun."}
                    />
                </div>
            </div>
        </section>
    );
};

const FeatureBox: React.FC<{ title: string; description: string }> = ({ title, description }) => {
    return (
        <div className="feature-box p-8 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-gray-500">{description}</p>
        </div>
    );
};

export default Features;
