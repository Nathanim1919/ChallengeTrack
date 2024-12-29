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

    "Creativity": { name:"Creativity",bgColor: "yellow-400", icon: () => React.createElement(FaLightbulb) }, // Bright yellow for inspiration
    "Personal Development": { name:"Personal Development",bgColor: "blue-500", icon: () => React.createElement(FaUserTie) }, // Blue for growth
    "Wellness": { name:"Wellness",bgColor: "teal-400", icon: () => React.createElement(FaLeaf) }, // Calm teal for balance
    "Health": { name:"Health",bgColor: "red-400", icon: () => React.createElement(FaHeartbeat) }, // Red for vitality
    "Fitness": { name:"Fitness",bgColor: "green-500", icon: () => React.createElement(FaDumbbell) }, // Green for energy and fitness
    "Nutrition": { name:"Nutrition",bgColor: "orange-500", icon: () => React.createElement(FaCarrot) }, // Orange for food and nutrition
    "Lifestyle": { name:"Lifestyle",bgColor: "purple-400", icon: () => React.createElement(FaSpa) }, // Purple for balanced living
    "Mindfulness": { name:"Mindfulness",bgColor: "blue-300", icon: () => React.createElement(FaBrain) }, // Light blue for calmness
    "Career": { name:"Career",bgColor: "gray-700", icon: () => React.createElement(FaBriefcase) }, // Dark gray for professionalism
    "Finance": { name:"Finance",bgColor: "green-600", icon: () => React.createElement(FaPiggyBank) }, // Green for money and finance
    "Hobbies": { name:"Finance",bgColor: "indigo-400", icon: () => React.createElement(FaGamepad) }, // Indigo for creativity in hobbies
    "Relationships": { name:"Relationships",bgColor: "pink-400", icon: () => React.createElement(FaHandsHelping) }, // Pink for love and connection
    "Education": { name:"Education",bgColor: "blue-600", icon: () => React.createElement(FaGraduationCap) }, // Dark blue for learning
    "Productivity": { name:"Productivity",bgColor: "yellow-500", icon: () => React.createElement(FaCalendarCheck) }, // Yellow for focus
    "Self-Improvement": { name:"Self-Improvement",bgColor: "green-400", icon: () => React.createElement(FaArrowUp) }, // Light green for growth
    "Social": { name:"Social",bgColor: "orange-400", icon: () => React.createElement(FaHandshake) }, // Orange for social engagement
    "Technology": { name:"Technology",bgColor: "purple-600", icon: () => React.createElement(FaLaptopCode) }, // Purple for modern tech
    "Travel": { name:"Travel",bgColor: "blue-400", icon: () => React.createElement(FaPlane) }, // Blue for travel and exploration
    "Environment": { name:"Environment",bgColor: "green-300", icon: () => React.createElement(FaTree) }, // Light green for nature
    "Community": { name:"Community",bgColor: "yellow-600", icon: () => React.createElement(FaUsers) }, // Warm yellow for community
    "Art": { name:"Art",bgColor: "pink-500", icon: () => React.createElement(FaPalette) }, // Bright pink for creativity in art
    "Music": { name:"Music",bgColor: "red-500", icon: () => React.createElement(FaMusic) }, // Red for energy in music
    "Dance": { name:"Dance",bgColor: "purple-500", icon: () => React.createElement(FaMusic) }, // Purple for expression in dance
};


