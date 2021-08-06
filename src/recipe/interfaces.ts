export interface RecipeInterface {
  id: string;
  recipeTypeId: string;
  mode: 'daily' | 'weekly' | 'monthly' | 'repeatable';
  name: string;
  value: number;
}

export type RecipeTableTabType = 'daily' | 'weekly' | 'monthly' | 'repeatable' | 'total';
