export interface ChallengeItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Will match Lucide icon keys dynamically
}

export interface SolutionBenefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CategoryCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  recipesCount: string;
  gradient: string;
  tags: string[];
}

export interface RecipeItem {
  id: string;
  title: string;
  category: string;
  prepTime: string;
  calories: string;
  macros: {
    protein: string;
    carbs: string;
    fat: string;
  };
  ingredients: string[];
  instructions: string[];
  imageUrl: string;
}

export interface BonusItem {
  id: string;
  title: string;
  description: string;
  value: string;
  iconName: string;
  highlights: string[];
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  date: string;
  avatarUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
