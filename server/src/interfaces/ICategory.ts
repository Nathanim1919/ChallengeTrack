interface ICategory {
    id: string;
    name: string;
    description: string;
    parentCategoryId?: string;
}

interface ChallengeCategory {
    challengeId: string;
    categoryId: string;
}
