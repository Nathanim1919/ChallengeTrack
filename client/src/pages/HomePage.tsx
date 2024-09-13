import React from "react";
import Layout from "../components/layout/Layout.tsx";
import Hero from "../components/home/Hero.tsx";
import Features from "../components/home/Features.tsx";
import ChallengePage from "./ChallengePage.tsx";
import CTA from "../components/home/CTA.tsx";
import Testimonial from "./Testimonial.tsx";

export const HomePage: React.FC = () => {
    return (
        <Layout>
           <Hero />
            <Features />
            <CTA/>
            <ChallengePage/>
            <Testimonial/>
        </Layout>
    );
};
