import { RecipeTypeInterface } from 'recipe-type/interfaces';

export type RecipeTypeFormValues = Omit<RecipeTypeInterface, 'id'>;
