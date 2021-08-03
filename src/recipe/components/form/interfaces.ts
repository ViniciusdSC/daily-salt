import { RecipeInterface } from 'recipe/interfaces';

export type RecipeFormValues = Omit<RecipeInterface, 'id'>;
