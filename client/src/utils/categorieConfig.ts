import React from "react";
import { 
    FaLightbulb, FaUserTie, FaLeaf, FaHeartbeat, FaDumbbell, FaCarrot, FaSpa, 
    FaBrain, FaBriefcase, FaPiggyBank, FaGamepad, FaHandsHelping, FaGraduationCap, 
    FaCalendarCheck, FaArrowUp, FaHandshake, FaLaptopCode, FaPlane, FaTree, 
    FaUsers, FaPalette, FaMusic 
} from "react-icons/fa";


interface CategoryConfig {
    [key: string]: { name: string; bgColor: string; icon: () => JSX.Element };
}

export const categoryConfig: CategoryConfig = {

    "Creativity": { name:"Creativity",bgColor: "bg-yellow-400", icon: () => React.createElement(FaLightbulb) }, // Bright yellow for inspiration
    "Personal Development": { name:"Personal Development",bgColor: "bg-blue-500", icon: () => React.createElement(FaUserTie) }, // Blue for growth
    "Wellness": { name:"Wellness",bgColor: "bg-teal-400", icon: () => React.createElement(FaLeaf) }, // Calm teal for balance
    "Health": { name:"Health",bgColor: "bg-red-400", icon: () => React.createElement(FaHeartbeat) }, // Red for vitality
    "Fitness": { name:"Fitness",bgColor: "bg-green-500", icon: () => React.createElement(FaDumbbell) }, // Green for energy and fitness
    "Nutrition": { name:"Nutrition",bgColor: "bg-orange-500", icon: () => React.createElement(FaCarrot) }, // Orange for food and nutrition
    "Lifestyle": { name:"Lifestyle",bgColor: "bg-purple-400", icon: () => React.createElement(FaSpa) }, // Purple for balanced living
    "Mindfulness": { name:"Mindfulness",bgColor: "bg-blue-300", icon: () => React.createElement(FaBrain) }, // Light blue for calmness
    "Career": { name:"Career",bgColor: "bg-gray-700", icon: () => React.createElement(FaBriefcase) }, // Dark gray for professionalism
    "Finance": { name:"",bgColor: "bg-green-600", icon: () => React.createElement(FaPiggyBank) }, // Green for money and finance
    "Hobbies": { name:"Finance",bgColor: "bg-indigo-400", icon: () => React.createElement(FaGamepad) }, // Indigo for creativity in hobbies
    "Relationships": { name:"Relationships",bgColor: "bg-pink-400", icon: () => React.createElement(FaHandsHelping) }, // Pink for love and connection
    "Education": { name:"Education",bgColor: "bg-blue-600", icon: () => React.createElement(FaGraduationCap) }, // Dark blue for learning
    "Productivity": { name:"Productivity",bgColor: "bg-yellow-500", icon: () => React.createElement(FaCalendarCheck) }, // Yellow for focus
    "Self-Improvement": { name:"Self-Improvement",bgColor: "bg-green-400", icon: () => React.createElement(FaArrowUp) }, // Light green for growth
    "Social": { name:"Social",bgColor: "bg-orange-400", icon: () => React.createElement(FaHandshake) }, // Orange for social engagement
    "Technology": { name:"Technology",bgColor: "bg-purple-600", icon: () => React.createElement(FaLaptopCode) }, // Purple for modern tech
    "Travel": { name:"Travel",bgColor: "bg-blue-400", icon: () => React.createElement(FaPlane) }, // Blue for travel and exploration
    "Environment": { name:"Environment",bgColor: "bg-green-300", icon: () => React.createElement(FaTree) }, // Light green for nature
    "Community": { name:"Community",bgColor: "bg-yellow-600", icon: () => React.createElement(FaUsers) }, // Warm yellow for community
    "Art": { name:"Art",bgColor: "bg-pink-500", icon: () => React.createElement(FaPalette) }, // Bright pink for creativity in art
    "Music": { name:"Music",bgColor: "bg-red-500", icon: () => React.createElement(FaMusic) }, // Red for energy in music
    "Dance": { name:"Dance",bgColor: "bg-purple-500", icon: () => React.createElement(FaMusic) }, // Purple for expression in dance
};


