import React from "react";
import Layout from "../components/layout/Layout.tsx";
import Hero from "../components/home/Hero.tsx";
import Features from "../components/home/Features.tsx";

export const HomePage: React.FC = () => {
    return (
        <Layout>
           <Hero />
            <Features />
        </Layout>
    );
};
