import React from 'react'



const PopularCategories = () => {
    const categories = [
        {
            name: 'Fitness',
            total:45,
            describtion:"Collection of Fitness Challenges"
        },
        {
            name: 'Nutrition',
            total:45,
            describtion:"Collection of Fitness Challenges"

        },
        {
            name: 'Mindfulness',
            total:45,
            describtion:"Collection of Fitness Challenges"
        },
        {
            name: 'Productivity',
            total:45,
            describtion:"Collection of Fitness Challenges"
        },
        {
            name: 'Finance',
            total:45,
            describtion:"Collection of Fitness Challenges"
        },
        {
            name: 'Hobbies',
            total:45,
            describtion:"Collection of Fitness Challenges"
        },
        {
            name: 'Relationships',
            total:45,
            describtion:"Collection of Fitness Challenges"
        },
        {
            name: 'Self-Improvement',
            total:45,
            describtion:"Collection of Fitness Challenges"
        },
        {
            name: 'Career',
            total:45,
            describtion:"Collection of Fitness Challenges"
        },
        {
            name: 'Education',
            total:45,
            describtion:"Collection of Fitness Challenges"
        },
    ];

    return (
        <div className="popular-categories">
            <h2 className={"font-bold text-3xl"}>Popular Categories</h2>
            <div className="categories grid grid-cols-3">
                {categories.map((category, index) => (
                    <div key={index} className="category ">
                        <div className="icon">
                            <i className={`fas fa-${category.icon}`}/>
                        </div>
                        <div className="name">{category.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default PopularCategories;
