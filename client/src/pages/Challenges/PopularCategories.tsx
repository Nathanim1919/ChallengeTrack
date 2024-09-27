import React from 'react'



const PopularCategories = () => {
    const categories = [
        {
            name: 'Fitness',
            icon: 'dumbbell',
        },
        {
            name: 'Nutrition',
            icon: 'apple-alt',
        },
        {
            name: 'Mindfulness',
            icon: 'brain',
        },
        {
            name: 'Productivity',
            icon: 'tasks',
        },
        {
            name: 'Finance',
            icon: 'wallet',
        },
        {
            name: 'Hobbies',
            icon: 'palette',
        },
        {
            name: 'Relationships',
            icon: 'heart',
        },
        {
            name: 'Self-Improvement',
            icon: 'user-check',
        },
        {
            name: 'Career',
            icon: 'briefcase',
        },
        {
            name: 'Education',
            icon: 'graduation-cap',
        },
    ];

    return (
        <div className="popular-categories">
            <h2>Popular Categories</h2>
            <div className="categories">
                {categories.map((category, index) => (
                    <div key={index} className="category">
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
