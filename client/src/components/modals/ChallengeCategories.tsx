import React from "react";

interface ChallengeCategoriesProps {
  setFilter: (value: string) => void;
  setShowCategories: (value: boolean) => void;
  showCategories: boolean;
}

const categories = [
  "All",
  "Fitness",
  "Nutrition",
  "Mindfulness",
  "Productivity",
  "Finance",
  "Hobbies",
  "Relationships",
  "Self-Improvement",
  "Career",
  "Education",
];

const ChallengeCategories: React.FC<ChallengeCategoriesProps> = ({
  setShowCategories,
  setFilter,
  showCategories,
}) => {
  const handleFilterClick = (value: string) => {
    setFilter(value);
    setShowCategories(false); // Close the dropdown after selection
  };

  return (
    <div>
      {showCategories && (
        <div
          id="categories-dropdown"
          className="flex flex-col absolute z-50 bg-white justify-start items-start text-[14px] border border-gray-200 rounded-md shadow-lg"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterClick(category)}
              className="px-2 py-1 hover:bg-gray-200 border-b w-full hover:text-gray-500 border-gray-300"
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChallengeCategories;
